import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBTveQxsLYdWfI3w6uG225gEAWrwkMrQng",
    authDomain: "tuvoicedemo.firebaseapp.com",
    databaseURL: "https://tuvoicedemo.firebaseio.com",
    projectId: "tuvoicedemo",
    storageBucket: "tuvoicedemo.appspot.com",
    messagingSenderId: "1045598113918"
}

firebase.initializeApp(config);

export default firebase;
