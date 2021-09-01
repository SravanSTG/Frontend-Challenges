// jshint esversion: 6

let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let emailId = document.querySelector(".email-id");
let password = document.querySelector(".password");

document.querySelector(".claim-trial").addEventListener("click", checkForm);

function checkForm()
{
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = emailId.value.trim();
  let passwordValue = password.value.trim();

  // Check first name
  if (firstNameValue === "")
    showError(firstName, 1);
  else
    removeError(firstName, 1);

  // Check last name
  if (lastNameValue === "")
    showError(lastName, 2);
  else
    removeError(lastName, 2);

  // Check email
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex email validation
  if (emailValue === "" || !emailValue.match(mailFormat))
    showError(emailId, 3);
  else
    removeError(emailId, 3);

  // Check password
  if (passwordValue === "")
    showError(password, 4);
  else
    removeError(password, 4);
}

function showError(input, errorNum)
{
  input.placeholder = "";
  input.classList.add("add-error");
  document.querySelector(".error" + errorNum).style.display = "inline-block";

  if (input === emailId)
  {
    input.value = "";
    input.placeholder = "email@example.com";
    input.classList.add("error-mail");
  }
}

function removeError(input, errorNum)
{
  input.classList.remove("add-error");
  document.querySelector(".error" + errorNum).style.display = "none";
}
