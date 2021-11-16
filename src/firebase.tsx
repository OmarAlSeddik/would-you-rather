import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-H1g186sFgbCP0M-LY9Ao9C2AEDLysdo",
  authDomain: "would-you-rather-a4e0f.firebaseapp.com",
  projectId: "would-you-rather-a4e0f",
  storageBucket: "would-you-rather-a4e0f.appspot.com",
  messagingSenderId: "900310034993",
  appId: "1:900310034993:web:c9a2c121fd19207f560310",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
