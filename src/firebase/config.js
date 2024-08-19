import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBxDJIN_q1-Tfn1vErfX_66liI6pioKUx4",
  authDomain: "realtime-chat-1cc42.firebaseapp.com",
  projectId: "realtime-chat-1cc42",
  storageBucket: "realtime-chat-1cc42.appspot.com",
  messagingSenderId: "234423865178",
  appId: "1:234423865178:web:da67977663d7771a876d63"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)