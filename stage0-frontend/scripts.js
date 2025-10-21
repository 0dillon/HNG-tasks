document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const errName = document.getElementById("error-name");
  const errEmail = document.getElementById("error-email");
  const errSubject = document.getElementById("error-subject");
  const errMessage = document.getElementById("error-message");
  const successBox = document.getElementById("form-success");

  function clearErrors() {
    errName.textContent = "";
    errEmail.textContent = "";
    errSubject.textContent = "";
    errMessage.textContent = "";
    successBox.hidden = true;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();
    let ok = true;

    if (!nameInput.value.trim()) {
      errName.textContent = "Full name is required.";
      nameInput.focus();
      ok = false;
    }

    if (!emailInput.value.trim()) {
      errEmail.textContent = "Email is required.";
      if (ok) emailInput.focus();
      ok = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      errEmail.textContent = "Enter a valid email address.";
      if (ok) emailInput.focus();
      ok = false;
    }

    if (!subjectInput.value.trim()) {
      errSubject.textContent = "Subject is required.";
      if (ok) subjectInput.focus();
      ok = false;
    }

    if (!messageInput.value.trim()) {
      errMessage.textContent = "Message is required.";
      if (ok) messageInput.focus();
      ok = false;
    } else if (messageInput.value.trim().length < 10) {
      errMessage.textContent = "Message must be at least 10 characters.";
      if (ok) messageInput.focus();
      ok = false;
    }

    if (!ok) return;

    successBox.hidden = false;
    form.reset();
    nameInput.focus();
  });

  nameInput.setAttribute("aria-describedby", "error-name");
  emailInput.setAttribute("aria-describedby", "error-email");
  subjectInput.setAttribute("aria-describedby", "error-subject");
  messageInput.setAttribute("aria-describedby", "error-message");
});
