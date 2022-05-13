import firebase from 'firebase/compat/app';

require('firebase/compat/firestore');
require('firebase/compat/auth');
require('firebase/compat/storage');
require('firebase/compat/database');

// " compat v8 added cos there was an error importing things from firebase v9 or higher"
/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

const firebaseConfig = {
  apikey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DATABASEURL,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTID,
};

// To avoid an error add if, inicializating app
if (!firebase.app.lenght) {
  firebase.initializeApp(firebaseConfig);
}

// exports
const db = firebase.firestore();
// const auth = firebase.auth();
const storage = firebase.storage();
const database = firebase.database();

export {
  firebase,
  db,
  storage,
  database,
};
