// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth to handle authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy4EBnItJka5zjIeQtQm4P2JHHOPIlGGQ",
  authDomain: "carsini-winery.firebaseapp.com",
  projectId: "carsini-winery",
  storageBucket: "carsini-winery.firebasestorage.app",
  messagingSenderId: "203949586582",
  appId: "1:203949586582:web:725f1342947180e835aab7",
  measurementId: "G-08LMSP5J8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and export it
const auth = getAuth(app); // Initialize auth using the app instance

// Export auth to use it in other components
export { auth };

