import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD7klnRt1vfXFHDBWUM2wpgFeMZuyNGNp0',
  authDomain: 'whattsapp-clone-abddf.firebaseapp.com',
  databaseURL: 'https://whattsapp-clone-abddf.firebaseio.com',
  projectId: 'whattsapp-clone-abddf',
  storageBucket: 'whattsapp-clone-abddf.appspot.com',
  messagingSenderId: '1034389681112',
  appId: '1:1034389681112:web:e66c445de020a9a1edf8ad',
  measurementId: 'G-BRRY628611',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
