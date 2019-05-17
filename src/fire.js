import firebase from '@firebase/app';
require('firebase/auth');
require('firebase/database');

const config = {
    apiKey: "AIzaSyDjH1H1tEagm9WSWeGZ99i1GOgrVaXXlKs",
    authDomain: "masterrebate.firebaseapp.com",
    databaseURL: "https://masterrebate.firebaseio.com",
    projectId: "masterrebate",
    storageBucket: "masterrebate.appspot.com",
    messagingSenderId: "192557235849",
    appId: "1:192557235849:web:79e173a9a815f6ff"
  };

var fire = firebase.initializeApp(config);

export default fire;