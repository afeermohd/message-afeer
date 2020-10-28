import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnBx83USASFbdRyS5Wi4JcMOcwPA4u80E",
  authDomain: "message-afeer.firebaseapp.com",
  databaseURL: "https://message-afeer.firebaseio.com",
  projectId: "message-afeer",
  storageBucket: "message-afeer.appspot.com",
  messagingSenderId: "1002030577709",
  appId: "1:1002030577709:web:9ef91940e1e5d93439a0a4",
  measurementId: "G-D3DLKY0Q4L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
