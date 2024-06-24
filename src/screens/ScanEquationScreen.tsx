/* This code snippet is a React component called `ScanEquationScreen` that utilizes the `useState` and
`useEffect` hooks from React. It also imports necessary components and modules such as `Platform`,
`PermissionsAndroid`, `Image`, `Alert`, `View`, and `DocumentScanner` for handling document scanning
functionality. */
import { Component } from 'react';
import { Platform, PermissionsAndroid, Image, Alert, View, ActivityIndicator } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';
import axios from 'axios';
import mime from 'mime';

import { SERVER_END_POINT } from '@/constants';
import { TypeEquationScreen } from '@/src/screens';

type Props = object;

type State = {
  scannedImage: string;
  loading: boolean;
  latex: string;
};

class ScanEquationScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scannedImage: '',
      loading: true,
      latex: '',
    };
  }

  componentDidMount() {
    this.scanDocument();
  }

  sendImage = async (uri: string) => {
    this.setState({ loading: true });
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
          const response = await axios.post(`${SERVER_END_POINT}/latex`, payload, {
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 300000, // Set timeout to 5 minutes
          });
          // eslint-disable-next-line no-console
          console.log('Response:', response.data);
          this.setState({ latex: response.data.latex });
          this.setState({ loading: false });
          this.setState({ scannedImage: '' });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error sending POST request:', error);
          this.setState({ loading: false });
          this.setState({ scannedImage: '' });
        }
      }
    };
    reader.readAsDataURL(blob);
  };

  scanDocument = async () => {
    if (
      Platform.OS === 'android' &&
      (await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)) !==
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      Alert.alert('Error', 'User must grant camera permissions for scanning.');
      return;
    }

    const { scannedImages } = await DocumentScanner.scanDocument({
      maxNumDocuments: 1,
    });

    if (scannedImages && scannedImages.length > 0) {
      this.setState({ scannedImage: scannedImages[0], loading: true });
      await this.sendImage(scannedImages[0]);
    }
  };

  render() {
    const { scannedImage, loading, latex } = this.state;

    if (scannedImage || loading) {
      return (
        <View className="bg-gray-100 flex flex-col flex-1 justify-center items-center">
          {scannedImage && (
            <Image resizeMode="contain" source={{ uri: scannedImage }} className="w-1/2 -mt-12" />
          )}
          {loading && <ActivityIndicator color="#6844EE" size="large" />}
        </View>
      );
    }

    if (latex) {
      return <TypeEquationScreen latex={latex} />;
    }

    return <View className="bg-gray-100 flex flex-col flex-1 justify-start items-center" />;
  }
}

export default ScanEquationScreen;
