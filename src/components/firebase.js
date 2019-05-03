import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDmkfBOpzVjE2tp8oM-eVw5xTSebbjQpSk',
  authDomain: 'think-piece-live-325de.firebaseapp.com',
  databaseURL: 'https://think-piece-live-325de.firebaseio.com',
  projectId: 'think-piece-live-325de',
  storageBucket: 'think-piece-live-325de.appspot.com',
  messagingSenderId: '1012963292428',
};
firebase.initializeApp(config);
export default firebase;
export const firestore = firebase.firestore();
() => {
  export default {};
};
