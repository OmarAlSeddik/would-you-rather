import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrQ4P2kl5uvjtGmj09gYDJ3fZ2VpqyAKg",
  authDomain: "would-you-rather-59208.firebaseapp.com",
  projectId: "would-you-rather-59208",
  storageBucket: "would-you-rather-59208.appspot.com",
  messagingSenderId: "632973873267",
  appId: "1:632973873267:web:146ce78d2f0e44c3e25a06",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
