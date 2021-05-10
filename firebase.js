import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSRV026C3QvNZnLIBbIbWlUye0MxaiS_A",
    authDomain: "danielschung-whatsapp-clone.firebaseapp.com",
    projectId: "danielschung-whatsapp-clone",
    storageBucket: "danielschung-whatsapp-clone.appspot.com",
    messagingSenderId: "298712126567",
    appId: "1:298712126567:web:79336b8921cfa67e3a70c2"
  };

  const app = !firebase.apps.length  ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider;

  export {provider, db , auth } 