const form = document.getElementById("registerForm");

// submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

const touched = {
  name: false,
  email: false,
  password: false,
  confirmPassword: false
};


// reusable helpers
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  formGroup.querySelector("small").innerText = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}

// regex validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// main validation logic
function validateInputs() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Name
  if (name.value.trim() === "") {
    showError(name, "Name is required");
  } else {
    showSuccess(name);
  }

  // Email
  if (!isValidEmail(email.value.trim())) {
    showError(email, "Enter a valid email");
  } else {
    showSuccess(email);
  }

  // Password
  if (password.value.length < 8) {
    showError(password, "Password must be at least 8 characters");
  } else {
    showSuccess(password);
  }

  // Confirm Password
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    showError(confirmPassword, "Passwords do not match");
  } else {
    showSuccess(confirmPassword);
  }
}

// real-time UX validation
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("keyup", validateInputs);
  input.addEventListener("blur", validateInputs);
});
