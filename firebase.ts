import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFgrQa5cQ1zk19S5Mh5-WttRJE8iGQDws",
    authDomain: "shipped-2ca0e.firebaseapp.com",
    projectId: "shipped-2ca0e",
    storageBucket: "shipped-2ca0e.appspot.com",
    messagingSenderId: "216936017238",
    appId: "1:216936017238:web:789e0174e5669efa037af7",
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export default db;
