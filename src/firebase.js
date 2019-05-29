import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBPEOFwNXfwuXV4miO3LPm7jzEe8XxXZ7Y',
  authDomain: 'iaminnepal-6d53b.firebaseapp.com',
  databaseURL: 'https://iaminnepal-6d53b.firebaseio.com',
  projectId: 'iaminnepal-6d53b',
  storageBucket: 'iaminnepal-6d53b.appspot.com',
  messagingSenderId: '521984004495',
  appId: '1:521984004495:web:8bff8284e857b378',
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export default firebase;
