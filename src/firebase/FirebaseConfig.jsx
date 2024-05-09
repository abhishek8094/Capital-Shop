import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHT3_kDcf_qKHdw0db_jv8nqrLLs41EOQ",
  authDomain: "myfirstapp-bdbc1.firebaseapp.com",
  projectId: "myfirstapp-bdbc1",
  storageBucket: "myfirstapp-bdbc1.appspot.com",
  messagingSenderId: "968512832287",
  appId: "1:968512832287:web:56cab260fc3fab969fe62a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app)
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
