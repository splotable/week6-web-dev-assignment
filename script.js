// =========================
// Event Handling & Features
// =========================

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});

// Show/Hide Password Toggle
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");
togglePassword.addEventListener("click", () => {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordField.type = "password";
    togglePassword.textContent = "Show";
  }
});

// =========================
// Custom Form Validation
// =========================
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting immediately

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordField.value.trim();

  let errors = [];

  // Validate name
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }

  // Validate email (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate password (at least 6 chars, must contain a number)
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(password)) {
    errors.push("Password must be at least 6 characters and contain a number.");
  }

  // Show validation result
  if (errors.length > 0) {
    message.style.color = "red";
    message.textContent = errors.join(" ");
  } else {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
  }
});
