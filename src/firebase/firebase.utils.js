/*request for firestore database data
in a new.file.js

import firebase from 'firebase/app';
import 'firebase/firestore'

const firestore = firestore.firestore();

//firebase database consist in a nassive json file, with collections and documents:
//collection: is a collection of items (like users, or cart item)
//documents: is an element of a collection

//chain way
firestore.collection('users').doc('qchLJVFqLzFykX3HA4Hi').collection('cartItems').doc('cayk1fSkKTnhFsYnQ19J');
//point directly to document
firestore.doc('/users/qchLJVFqLzFykX3HA4Hi/cartItems/cayk1fSkKTnhFsYnQ19J');
//point directly to collection
firestore.collection('/users/qchLJVFqLzFykX3HA4Hi/cartItems')
-----------------------------------------------------------------------------------
query reference and query snapshot (returns a objects)

REFERNCE = object that rapresent the current place we are querying
ex
firestore.doc('/users/qchLJVFqLzFykX3HA4Hi/cartItems/cayk1fSkKTnhFsYnQ19J');

doesn't have actual data of the collection or document. it has proprieties that tells us detail 
(id and path of the query) about it
or the method to get the snapshot object that will give us the data we are looking for.

documentRef object are used to perform set(), get(), update(), delete() method

to obtain snapshotObj (that contains the actual data) we use get();

this is a document reference and return document snapshot object
firestore.doc('/users/qchLJVFqLzFykX3HA4Hi/cartItems/cayk1fSkKTnhFsYnQ19J');

this is a collection reference and return query snapshot object
firestore.collection('/users/qchLJVFqLzFykX3HA4Hi/cartItems')

*/

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

//take the userAuth object from google signin and store it inside database
export const createUserProfileDocument = async (userAuth, additionalData) =>{
    //save to database only if we get back a valid object
    if (!userAuth) return;

    //check if user already exist
    const userRef = firestore.doc(`users/${userAuth.uid}`);//query reference

    const snapShot = await userRef.get();//snapshot, rapresents the data. 
        //to check if there is some data there, we use the exists propriety
    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (err){
            console.log('error creating user', err)
        }
    }

    return userRef
}
 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});//always triggers google popup whenever we use google auth
 export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase;

