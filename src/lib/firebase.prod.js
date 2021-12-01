import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to seed the database.
// we need to config.

const config = {
  apiKey: "AIzaSyCOteRaztkpgk4FmTRFMsfiQMDXHt4Rzfo",
  authDomain: "netflix-7895b.firebaseapp.com",
  projectId: "netflix-7895b",
  storageBucket: "netflix-7895b.appspot.com",
  messagingSenderId: "956839915893",
  appId: "1:956839915893:web:26bbaf03327b260d7ca33c",
};
const firebase = Firebase.initializeApp(config);

export { firebase };
