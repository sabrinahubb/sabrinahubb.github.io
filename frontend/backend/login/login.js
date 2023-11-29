function submitLoginForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Basic validation
  if (email === "" || password === "") {
    alert("Both email and password are required");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  //  live server url
  fetch("http://localhost:63342/sabrinahubb.github.io/frontend/backend/login/login.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem("account", "logged");
        document.getElementById("loginForm").reset();
        window.location.href = "frontend/index.html";
      } else {
        alert("Incorrect email or password. Please try again.");
      }
    })
    .catch((error) => console.error(error));
}
