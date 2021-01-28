const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  var height = document.querySelector(".height").value;
  var weight = document.querySelector(".weight").value;
  var age = document.querySelector(".age").value;
  var male = document.querySelector('input[value="male"]');
  var female = document.querySelector('input[value="female"]');
  var heading = document.querySelector("h2");
  var result;
  if (height === "" || weight === "" || age === "") {
    heading.innerHTML = "Kindly enter all the value";
  } else {
    if (male.checked == true) {
      result = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
      heading.innerHTML = " BMR for male is :" + Math.floor(result);
    } else {
      result = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      heading.innerHTML = "BMR for female  is :" + Math.floor(result);
    }
  }
});
