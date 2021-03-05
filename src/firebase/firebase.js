import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyA60iPdluG7oe5SSQgxmwsn8B4eXIY3R4o",
    authDomain: "facebook-clone-fb50a.firebaseapp.com",
    projectId: "facebook-clone-fb50a",
    storageBucket: "facebook-clone-fb50a.appspot.com",
    messagingSenderId: "375553250936",
    appId: "1:375553250936:web:bd8a9030a0894c758f3f8d",
    measurementId: "G-3FVFY3Z4RQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

const auth = firebase.auth();

// Tells firebase we want google service
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default database;