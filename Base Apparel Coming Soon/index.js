let emailId = document.querySelector(".email-input");

document.querySelector(".btn").addEventListener("click", checkEmail);

function checkEmail() {
  let email = emailId.value.trim();

  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex email validation
  if (email === "" || !email.match(mailFormat)) showError();
  else removeError();
}

function showError() {
  emailId.style.border = "hsl(0, 93%, 68%) 2px solid";
  document.querySelector(".logo-error").style.display = "inline";
  document.querySelector("small").style.display = "block";
}

function removeError() {
  emailId.style.border = "hsl(0, 36%, 70%) 1px solid";
  document.querySelector(".logo-error").style.display = "none";
  document.querySelector("small").style.display = "none";
}
