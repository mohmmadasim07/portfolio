const form = document.querySelector(".forms");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const passwordtwo = document.querySelector(".passwordtwo");
const email = document.querySelector(".email");

//funtion to show error

function showError(item) {
  var formControl = item.parentElement;
  var small = document.querySelector("small");
  formControl.className = "form-item error";
  small.style.visibility = "visible";
}
function showSuccess(itemtwo) {
  var form = itemtwo.parentElement;
  var small = document.querySelector("small");
  form.className = "form-item success";
  small.style.visibility = "hidden";
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (email.value === "") {
    showError(email);
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password);
  } else {
    showSuccess(password);
  }
  if (passwordtwo.value == "" || passwordtwo.value != password.value) {
    var small = document.querySelector(".check");

    showError(passwordtwo);
    small.innerHTML = "password did not match";
  } else {
    showSuccess(passwordtwo);
  }
  if (username.value === "") {
    showError(username);
  } else {
    showSuccess(username);
  }
});
