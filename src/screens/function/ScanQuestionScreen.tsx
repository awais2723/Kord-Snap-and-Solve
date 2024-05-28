/* This code snippet is a React component called `ScanQuestionScreen` that utilizes the `useState` and
`useEffect` hooks from React. It also imports necessary components and modules such as `Platform`,
`PermissionsAndroid`, `Image`, `Alert`, `View`, and `DocumentScanner` for handling document scanning
functionality. */
import React, { useState, useEffect } from 'react';
import { Platform, PermissionsAndroid, Image, Alert, View, ActivityIndicator } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import axios from 'axios';
import mime from 'mime';

import { Card } from '@/src/components/function';
import { SERVER_END_POINT } from '@/constants';

type Props = object;

const ScanQuestionScreen: React.FC<Props> = (_props: Props) => {
  const [scannedImage, setScannedImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendImage = async (uri: string) => {
    const res = await fetch(uri);
    const blob = await res.blob();

    const reader = new FileReader();
    reader.onloadend = async () => {
      if (reader.result && typeof reader.result === 'string') {
        const base64data = reader.result.split(',')[1];

        const payload = {
          uri: `data:${mime.getType(uri)};base64,${base64data}`,
          type: mime.getType(uri) || 'image/png',
          name: uri.split('/').pop() || 'image.png',
        };

        try {
          const response = await axios.post(`${SERVER_END_POINT}/text`, payload, {
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 300000, // Set timeout to 5 minutes
          });
          // eslint-disable-next-line no-console
          console.log('Response:', response.data);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error sending POST request:', error);
        }
      }
    };
    reader.readAsDataURL(blob);
  };

  const scanDocument = async () => {
    // prompt user to accept camera permission request if they haven't already
    if (
      Platform.OS === 'android' &&
      (await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)) !==
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      Alert.alert('Error', 'User must grant camera permissions for scanning.');
      return;
    }

    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument({
      maxNumDocuments: 1,
    });

    // get back an array with scanned image file paths
    if (scannedImages && scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
      setLoading(true);
      await sendImage(scannedImages[0]);
      setLoading(false);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (scannedImage) {
    return (
      <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
        <Image resizeMode="contain" source={{ uri: scannedImage }} className="w-1/2 -mt-12" />
        {loading && <ActivityIndicator size="large" />}
      </View>
    );
  }

  return (
    <View className="bg-gray-100 flex flex-col flex-1 justify-center items-center">
      <Card text="Scan Screen" />
      <View className="my-10" />
    </View>
  );
};

export default ScanQuestionScreen;
