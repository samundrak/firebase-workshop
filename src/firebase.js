import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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
export const storage = () => firebase.storage();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the database where a user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch the document from that location.
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return getUserDocument(user.uid);
};
export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection('users').doc(uid);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};
export default firebase;
