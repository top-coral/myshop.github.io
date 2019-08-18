import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBllnkUHFwWZM9AGaTn4eob8LaB2M6gdzQ',
    authDomain: 'prodacts-ae377.firebaseapp.com',
    databaseURL: 'https://prodacts-ae377.firebaseio.com',
    projectId: 'prodacts-ae377',
    storageBucket: '',
    messagingSenderId: '980703114562',
    appId: '1:980703114562:web:5574f9af29d5d279'
  };
  // Initialize Firebase
  const firebaseapp = firebase.initializeApp(firebaseConfig);

 export default firebaseapp.firestore()