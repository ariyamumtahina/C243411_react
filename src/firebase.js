
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSqg1IgTyo197gL_tG2Rv8yiBjRiTZwzc",
  authDomain: "c243411-artarchive.firebaseapp.com",
  projectId: "c243411-artarchive",
  storageBucket: "c243411-artarchive.firebasestorage.app",
  messagingSenderId: "216513566878",
  appId: "1:216513566878:web:d24f3e3a4fdff2e283438f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

export default app;
