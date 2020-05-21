import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBjKvt_jecfv_vZrVB6exvkQGxrIWqz-GU",
    authDomain: "bhutanexamfactory-d7ea2.firebaseapp.com",
    databaseURL: "https://bhutanexamfactory-d7ea2.firebaseio.com",
    projectId: "bhutanexamfactory-d7ea2",
    storageBucket: "bhutanexamfactory-d7ea2.appspot.com",
    messagingSenderId: "1030134919193",
    appId: "1:1030134919193:web:f4763a54d6bfb2b78c7a88",
    measurementId: "G-W5X78CV6V1"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;