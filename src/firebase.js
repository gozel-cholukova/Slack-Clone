import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCj7ahW9Yy7rCi1M5nZRIE2BYmprnK5Tpw",
  authDomain: "slack-clone-3512b.firebaseapp.com",
  projectId: "slack-clone-3512b",
  storageBucket: "slack-clone-3512b.appspot.com",
  messagingSenderId: "87839488338",
  appId: "1:87839488338:web:d2fe3ee93fcda39951e28b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };