/* Setting up a Firebase app using the Firebase SDK. Here's a breakdown of what
each part is doing: */
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'knord-and-solve.firebaseapp.com',
  projectId: 'knord-and-solve',
  storageBucket: 'knord-and-solve.appspot.com',
  messagingSenderId: '1084410555281',
  appId: '1:1084410555281:web:38f2d4c7c643d24860c830',
  measurementId: 'G-0Z2T7L85GC',
};

const app = initializeApp(firebaseConfig);

export default app;
