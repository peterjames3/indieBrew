
const formEl = document.querySelector(".form-group");
const emailValidate = formEl.querySelector("#email");
const nameValidate = document.querySelector("#fullName");
const passwordValidate = document.querySelector("#password");
const invalidEmailEl = document.querySelector(".error");
const invalidNameEL = document.querySelector(".error1");
const invalidPasswordEL = document.querySelector(".error2");
const emailGroupEl = document.getElementById("email-group");
const submitBtn = document.querySelector(".create-account");
const modal = document.querySelector(".modal");
const checkboxEl = document.getElementById("checkbox");
const checkEl = document.querySelector(".check");
const formContent = document.getElementById("form-content");
const updateModal = document.querySelector(".update");


const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const userNamePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordValue = passwordValidate.value.trim();

const emailValue = emailValidate.value.trim();

const userNameValue = nameValidate.value.trim();
//?Email validation
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailValue = emailValidate.value.trim();

  if (!emailPattern.test(emailValue)) {
    emailValidate.style.border = "1px solid red";
    invalidEmailEl.style.display = "block";
    /*   emailGroupEl.classList.add("error"); */
  } else {
    emailValidate.style.border = "";
    invalidEmailEl.style.display = "none";
    /*  emailGroupEl.classList.remove("error"); */
  }
}

//? Name validation
function validateName() {
  const userNamePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
  const userNameValue = nameValidate.value.trim();
  if (!userNamePattern.test(userNameValue)) {
    nameValidate.style.border = "1px solid red";
    invalidNameEL.style.display = "block";
  } else {
    nameValidate.style.border = "";
    invalidNameEL.style.display = "none";
  }
}
//?password validation

function validatePassword() {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const passwordValue = passwordValidate.value.trim();
  if (!passwordPattern.test(passwordValue)) {
    passwordValidate.style.border = "1px solid red";
    invalidPasswordEL.style.display = "block";
  } else {
    passwordValidate.style.border = "";
    invalidPasswordEL.style.display = "none";
  }
}

function showModal() {
  setTimeout(() => {
    modal.classList.add("visible");
  }, 2000);
  setTimeout(() => {
    modal.classList.remove("visible");
  }, 7000);
}

function checkboxmodal() {
  if (!checkboxEl.checked) {
    checkEl.classList.add("invalid");
    console.log("unchecked");
    return;
  } else {
    checkEl.classList.remove("invalid");
    console.log("checked");
  }
}

function submitForm() {
  // passwordValue, emailValue and  userNameValue must be moved in this function to prevent the form  from working with the initial values outside the submitForm()
  const passwordValue = passwordValidate.value.trim();
  const emailValue = emailValidate.value.trim();
  const userNameValue = nameValidate.value.trim();

  if (
    !passwordPattern.test(passwordValue) ||
    !userNamePattern.test(userNameValue) ||
    !emailPattern.test(emailValue)
  ) {
    //validation failed
    checkboxmodal();
    return;
  } else {
    document.cookie = `username=${userNameValue}`;

    //validation succeesful
    setTimeout(() => {
      //Easy way to clear all form fields at once instead of manually clearing each field
      formContent.reset();
    }, 2000);

    showModal();
  }
}

submitBtn.addEventListener("click", () => {
  submitForm();
});
function getCookie(name) {
  const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookieValue ? cookieValue[2] : null;
}

// Retrieve user name from the cookie and log the welcome message
const userNameFromCookie = getCookie("username");
if (userNameFromCookie) {
  updateModal.textContent = `Welcome, ${userNameFromCookie}!`;
  /* alert(`Welcome, ${userNameFromCookie}!`);  */
}
nameValidate.addEventListener("input", validateName);
emailValidate.addEventListener("input", validateEmail);
passwordValidate.addEventListener("input", validatePassword);
