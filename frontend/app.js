function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

const accountStatus = localStorage.getItem("account");
const loginButtonsContainer = document.getElementById("loginButtons");
const sabrinaLink = document.getElementById("sabrinaLink");

if (accountStatus === "logged") {
  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logout";
  logoutButton.className = "loginButton";
  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("account");
    window.location.href = "./backend/login/login.html";
  });
  loginButtonsContainer.appendChild(logoutButton);

  // Allow access to the Sabrina page
  sabrinaLink.href = "./frontend/sabrina/index.html";
} else {
  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  loginButton.className = "loginButton";
  loginButton.addEventListener("click", function () {
    window.location.href = "./backend/login/login.html";
  });
  loginButtonsContainer.appendChild(loginButton);

  // Prevent access to the Sabrina page for non-logged-in users
  sabrinaLink.addEventListener("click", function (event) {
    event.preventDefault();
    alert("You need to log in to access this page.");
    window.location.href = "./backend/login/login.html";

    // Show the pop-up
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  });

// Hide the pop-up when it's clicked
  document.getElementById('popup').addEventListener('click', function() {
    this.style.display = 'none';
  });


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
