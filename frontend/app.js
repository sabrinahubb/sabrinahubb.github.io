const accountStatus = localStorage.getItem("account");
const loginButtonsContainer = document.getElementById("loginButtons");

if (accountStatus === "logged") {
  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logout";
  logoutButton.className = "loginButton";
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("account");
    window.location.href = "frontend/backend/login/login.html";
  });
  loginButtonsContainer.appendChild(logoutButton);
} else {
  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  loginButton.className = "loginButton";
  loginButton.addEventListener("click", function () {
    window.location.href = "frontend/backend/login/login.html";
  });
  loginButtonsContainer.appendChild(loginButton);
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuDEAYmSZfMxD5DCd8Lao-XINbE4J0SO0",
  authDomain: "sdlab3-f5603.firebaseapp.com",
  projectId: "sdlab3-f5603",
  storageBucket: "sdlab3-f5603.appspot.com",
  messagingSenderId: "868353866547",
  appId: "1:868353866547:web:2168c0b07ce400efc69c46",
  measurementId: "G-KCH55E3QRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
