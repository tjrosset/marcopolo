import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

const config = {
   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGINGSENDERID,
   appId: process.env.REACT_APP_FIREBASE_APPID
};
const defaultapp = firebase.initializeApp(config);
const db = defaultapp.firestore()

export default db;