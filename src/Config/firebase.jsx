
import { initializeApp } from "firebase/app";
//  import {getAuth} from 'firebase/auth'
 import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAnZf0MKXcRJp2_szgK5Xv0wJBQac12-vQ",
//   authDomain: "olxdata-63c3a.firebaseapp.com",
//   projectId: "olxdata-63c3a",
//   storageBucket: "olxdata-63c3a.appspot.com",
//   messagingSenderId: "235700044454",
//   appId: "1:235700044454:web:8c5b97a53d52351057aa67"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs9guroQgiUu_-vKAHebgi_rmKQgQocLk",
  authDomain: "saylani-5be98.firebaseapp.com",
  databaseURL: "https://saylani-5be98-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "saylani-5be98",
  storageBucket: "saylani-5be98.appspot.com",
  messagingSenderId: "1074262464051",
  appId: "1:1074262464051:web:aeb47ce1ebb0027513b546",
  measurementId: "G-XB7EEC4LYC"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getDatabase(app)
const storage=getStorage(app)

export {db,storage}