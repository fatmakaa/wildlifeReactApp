import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpT5Nwo3YBtciYg5HkX8tUMAJeqbX6cgE",
  authDomain: "wildife-center-react.firebaseapp.com",
  projectId: "wildife-center-react",
  storageBucket: "wildife-center-react.firebasestorage.app",
  messagingSenderId: "547919669076",
  appId: "1:547919669076:web:4007a38991e2274286cac1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);