// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation
function isValidPassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

function submitRegisterFrom() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Basic validation for fields is filled out or not
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("All fields must be filled out");
    return;
  }

  // use the email validation function
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // use the password validation function
  if (!isValidPassword(password)) {
    alert(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
    );
    return;
  }

  //  confirm the password and confirmPassword filed is match or not match
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  //   live server url
  fetch("http://localhost:63342/sabrinahubb.github.io/frontend/backend/registration/registration.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("registrationForm").reset();
      localStorage.setItem("account", "logged");
      window.location.href = "frontend/index.html";
    })
    .catch((error) => console.error(error));
}
