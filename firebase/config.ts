/* Setting up a Firebase app using the Firebase SDK. Here's a breakdown of what
each part is doing: */
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'node_modules/firebase/auth';
import { getFirestore } from 'node_modules/firebase/firestore';
import { getStorage } from 'node_modules/firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID,
// } from '@env';

const firebaseConfig = {
  apiKey: 'AIzaSyBzTuPcNA1ZxTfnMVAVoA7EFwwi1z8iYhk',
  authDomain: 'kord-snap-and-solve.firebaseapp.com',
  projectId: 'kord-snap-and-solve',
  storageBucket: 'kord-snap-and-solve.appspot.com',
  messagingSenderId: '1068297986797',
  appId: '1:1068297986797:web:1166792edbfc4fdab022e4',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
