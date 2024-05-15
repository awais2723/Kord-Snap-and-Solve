// import React, { useState, useEffect } from 'react';
// import { Platform, PermissionsAndroid, Image, Alert, View } from 'react-native';
// import DocumentScanner from 'react-native-document-scanner-plugin';

// import { Card } from '@/src/components';

// const AskMeScreen = () => {
//   const [scannedImage, setScannedImage] = useState<string>('');

//   const scanDocument = async () => {
//     // prompt user to accept camera permission request if they haven't already
//     if (
//       Platform.OS === 'android' &&
//       (await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)) !==
//         PermissionsAndroid.RESULTS.GRANTED
//     ) {
//       Alert.alert('Error', 'User must grant camera permissions for scanning.');
//       return;
//     }

//     // start the document scanner
//     const { scannedImages } = await DocumentScanner.scanDocument({
//       maxNumDocuments: 1,
//     });

//     // get back an array with scanned image file paths
//     if (scannedImages && scannedImages.length > 0) {
//       // set the img src, so we can view the first scanned image
//       setScannedImage(scannedImages[0]);
//     }
//   };

//   useEffect(() => {
//     // call scanDocument on load
//     scanDocument();
//   }, []);

//   if (scannedImage) {
//     return (
//       <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
//         <Image
//           resizeMode="contain"
//           source={{ uri: scannedImage }}
//           className="w-full h-full -mt-12"
//         />
//       </View>
//     );
//   }

//   return (
//     <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
//       <Card text="Scan Screen" />
//       <View className="my-10" />
//     </View>
//   );
// };

// export default AskMeScreen;
