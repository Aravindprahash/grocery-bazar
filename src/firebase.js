import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB-ea5f_Xv4qrvlsppuBQei86HO0W-Gks",
  authDomain: "grocerybazar-f5bcb.firebaseapp.com",
  projectId: "grocerybazar-f5bcb",
  storageBucket: "grocerybazar-f5bcb.firebasestorage.app",
  messagingSenderId: "546180584871",
  appId: "1:546180584871:web:0907f9c8e0cff2f1525282",
  measurementId: "G-1DGQ4PWXM1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
