import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signinWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }

  // get a refernce to the place in the database
  const userRef = firestore.doc(`users/${user.uid}`);

  // go and fetch the document from that location
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURl } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURl,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(err);
    }
  }
};
export default firebase;
