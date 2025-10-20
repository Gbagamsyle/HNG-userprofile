document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("test-contact-success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    document.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
      el.style.display = "none";
    });
    successMsg.style.display = "none";
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    if (name === "") {
      isValid = false;
      const error = document.getElementById("test-contact-error-name");
      error.textContent = "Full name is required.";
      error.style.display = "block";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      isValid = false;
      const error = document.getElementById("test-contact-error-email");
      error.textContent = "Email is required.";
      error.style.display = "block";
    } else if (!emailPattern.test(email)) {
      isValid = false;
      const error = document.getElementById("test-contact-error-email");
      error.textContent = "Enter a valid email address.";
      error.style.display = "block";
    }
    if (subject === "") {
      isValid = false;
      const error = document.getElementById("test-contact-error-subject");
      error.textContent = "Subject is required.";
      error.style.display = "block";
    }
    if (message === "") {
      isValid = false;
      const error = document.getElementById("test-contact-error-message");
      error.textContent = "Message is required.";
      error.style.display = "block";
    } else if (message.length < 10) {
      isValid = false;
      const error = document.getElementById("test-contact-error-message");
      error.textContent = "Message must be at least 10 characters long.";
      error.style.display = "block";
    }
    if (isValid) {
      successMsg.textContent = "Your message has been sent successfully! ✅";
      successMsg.style.display = "block";
      form.reset();
      setTimeout(() => {
        successMsg.style.display = "none";
      }, 4000);
    }
  });
});
