import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as firebase from "firebase";
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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
