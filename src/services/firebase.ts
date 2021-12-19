import firebase from 'firebase/app';

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyDlLYQBtJDEoXbbRX0NmszNMaTpJ1Ut-G0',
    authDomain: 'letmeask-60b04.firebaseapp.com',
    databaseURL: 'https://letmeask-60b04-default-rtdb.firebaseio.com',
    projectId: 'letmeask-60b04',
    storageBucket: 'letmeask-60b04.appspot.com',
    messagingSenderId: '568425271118',
    appId: '1:568425271118:web:c013a97e6853627322981f',
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }