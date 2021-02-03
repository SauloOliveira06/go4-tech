import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAC51mNDSXsGyFN52wL_jlfxwyq6mSUBKw",
    authDomain: "mybooks-d9f38.firebaseapp.com",
    projectId: "mybooks-d9f38",
    storageBucket: "mybooks-d9f38.appspot.com",
    messagingSenderId: "964556248668",
    appId: "1:964556248668:web:8b51cca42375f428ea7899",
    measurementId: "G-3G54Z8LCEX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};