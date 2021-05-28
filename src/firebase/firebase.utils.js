import firebase from 'firebase/app';//pulling in the firebase utility library
//firebase has a lot of dependencies, and we only take the ones we need
import 'firebase/firestore';// db storage
import 'firebase/auth';//authorization

const config={
    apiKey: "AIzaSyDzn4q15FjH4ZBF5wviAPxui3tG3iLbb8Q",
    authDomain: "crwn-db-766d8.firebaseapp.com",
    projectId: "crwn-db-766d8",
    storageBucket: "crwn-db-766d8.appspot.com",
    messagingSenderId: "140980742378",
    appId: "1:140980742378:web:2e8c33d2f5645704100f93",
    measurementId: "G-X5Z25N7GLF"
  };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});//always triggers google popup whenever we use google auth
 export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase;
