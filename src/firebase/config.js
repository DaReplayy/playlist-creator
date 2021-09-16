import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGT_C2kMViWE0EElpuKG3MFhoLZDWy5Wo",
    authDomain: "playlist-creator-e895f.firebaseapp.com",
    projectId: "playlist-creator-e895f",
    storageBucket: "playlist-creator-e895f.appspot.com",
    messagingSenderId: "645615416774",
    appId: "1:645615416774:web:f1ddf8242ae38f906aeec7"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, timestamp }