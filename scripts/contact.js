document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const city = document.getElementById("city");
  const zip = document.getElementById("zip");
  const errorBox = document.getElementById("formError");

  function capitalizeWords(text) {
    return text
      .trim()
      .toLowerCase()
      .split(" ")
      .filter(word => word !== "")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  function validEmail(value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value.trim());
  }

  function validZip(value) {
    const pattern = /^\d{5}(-\d{4})?$/;
    return pattern.test(value.trim());
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorBox.textContent = "";

    firstName.value = capitalizeWords(firstName.value);
    lastName.value = capitalizeWords(lastName.value);
    city.value = capitalizeWords(city.value);

    if (firstName.value === "") {
      errorBox.textContent = "Please enter your first name.";
      firstName.focus();
      return;
    }

    if (lastName.value === "") {
      errorBox.textContent = "Please enter your last name.";
      lastName.focus();
      return;
    }

    if (!validEmail(email.value)) {
      errorBox.textContent = "Please enter a valid email address.";
      email.focus();
      return;
    }

    if (city.value === "") {
      errorBox.textContent = "Please enter your city.";
      city.focus();
      return;
    }

    if (!validZip(zip.value)) {
      errorBox.textContent = "Please enter a valid ZIP code.";
      zip.focus();
      return;
    }

    errorBox.textContent = "Form submitted successfully.";
    form.reset();
  });
});