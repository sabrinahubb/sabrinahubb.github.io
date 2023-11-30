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
