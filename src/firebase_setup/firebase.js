// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app" ; 
import {getFirestore}  from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = { 
//   apiKey : process.env.REACT_APP_apiKey, 
//   authDomain : process.env.REACT_APP_authDomain, 
//   projectId : process.env.REACT_APP_projectId, 
//   storageBucket : process.env.REACT_APP_storageBucket, 
//   messagingSenderId : process.env.REACT_APP_messagingSenderId, 
//   appId : process.env.REACT_APP_appId,
// };


const firebaseConfig = { 
  apiKey : process.env.REACT_APP_apiKey , 
  authDomain : "crud-app-f4c49.firebaseapp.com" , 
  projectId : "crud-app-f4c49" , 
  storageBucket : "crud-app-f4c49.appspot.com" , 
  messagingSenderId : "236155708104" , 
  appId : "1:236155708104:web:ceab1429b466be7c157bfd" 
};


// Initialize Firebase
const app = initializeApp ( firebaseConfig );

export const db = getFirestore(app);
export const storage = getStorage(app);