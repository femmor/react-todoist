import firebase from 'firebase/app';
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBIpoGYvEM1TLjACZO3AiZQHFHDIFXwktg",
    authDomain: "todoist-343f2.firebaseapp.com",
    projectId: "todoist-343f2",
    storageBucket: "todoist-343f2.appspot.com",
    messagingSenderId: "471477908556",
    appId: "1:471477908556:web:1709c1423b8dca72b1b0e9"
});

export { firebaseConfig as firebase }