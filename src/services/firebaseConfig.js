import * as firebase from "firebase/app";
import "@firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqIHeQ6d9EYoLk8v6wJ58in79R0kYVhfw",
  authDomain: "cookito-backend-90890.firebaseapp.com",
  projectId: "cookito-backend-90890",
  storageBucket: "cookito-backend-90890.appspot.com",
  messagingSenderId: "433995914896",
  appId: "1:433995914896:web:982361ad3cf1b7e9fa8215",
  measurementId: "G-L1Z1X74TE4",
};

firebase.initializeApp(firebaseConfig);

export { firebase };

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
