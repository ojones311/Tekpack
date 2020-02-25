import * as firebase from 'firebase'
require('dotenv').config()

const config = {
    apiKey: process.env.FIREBASE_API,
    authDomain: "hackathon-tekpack.firebaseapp.com",
    databaseURL: "https://hackathon-tekpack.firebaseio.com",
    projectId: "hackathon-tekpack",
    storageBucket: "hackathon-tekpack.appspot.com",
    messagingSenderId: "441214947070",
    appId: "1:441214947070:web:49b71e28694261185fdfaf",
    measurementId: "G-9F1WKHMM8E"
}

firebase.initializeApp(config)

const storage = firebase.storage()

export {
    storage,
    firebase as default
}