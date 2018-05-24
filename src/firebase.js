import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAugc2PV7c46RXiwz2RwDye_Oi992JTbJ4',
  authDomain: 'reactfirebase-c30a4.firebaseapp.com',
  databaseURL: 'https://reactfirebase-c30a4.firebaseio.com',
  projectId: 'reactfirebase-c30a4',
  storageBucket: 'reactfirebase-c30a4.appspot.com',
  messagingSenderId: '552021101192'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
