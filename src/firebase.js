import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyCDcdYA7f-LdtUBQ3KGU1nbG0aoGTBf7-0',
  authDomain: 'react-slack-clone-76c66.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-76c66.firebaseio.com',
  projectId: 'react-slack-clone-76c66',
  storageBucket: 'react-slack-clone-76c66.appspot.com',
  messagingSenderId: '537553602515',
  appId: '1:537553602515:web:b968482c95178c19bdd126'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
