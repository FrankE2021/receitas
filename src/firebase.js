import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA13d6pZF5Vc0pQ4Rds-I_QtZ3KJmgqtng",
  authDomain: "receitas-1b80e.firebaseapp.com",
  projectId: "receitas-1b80e",
  storageBucket: "receitas-1b80e.appspot.com",
  messagingSenderId: "671562321662",
  appId: "1:671562321662:web:9204b6d4085c35b641dfaf",
  measurementId: "G-LZK9G45LN8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
