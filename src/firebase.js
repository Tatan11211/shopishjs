import firebase from 'firebase/compat/app';

require('firebase/compat/firestore');
require('firebase/compat/auth');
require('firebase/compat/storage');
require('firebase/compat/database');

// " compat v8 added cos there was an error importing things from firebase v9 or higher"
const firebaseConfig = {
  // apikey: 'AIzaSyDurL0wp080PWgbIZkaHSobCiIm_R95-Rk',
  // authDomain: 'shopish-5e282.firebaseapp.com',
  // databaseURL: 'https://shopish-5e282-default-rtdb.firebaseio.com',
  // projectId: 'shopish-5e282',
  // storageBucket: 'shopish-5e282.appspot.com',
  // messagingSenderId: '304963509677',
  // appId: '1:304963509677:web:164e08376e332b6ef19524',
  // measurementId: 'G-3XKG15SWNS',
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
