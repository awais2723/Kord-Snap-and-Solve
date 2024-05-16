import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARFuH1UTgQzzhUBHald3eZYpxI6QKHaJ0',
  authDomain: 'knord-24650.firebaseapp.com',
  projectId: 'knord-24650',
  storageBucket: 'knord-24650.appspot.com',
  messagingSenderId: '1080394557024',
  appId: '1:1080394557024:web:c5f7633ad1819fff958505',
  measurementId: 'G-R78D5SXGGT',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
