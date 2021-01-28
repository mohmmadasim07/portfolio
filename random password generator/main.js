const button = document.querySelector(".btn");
const secondbutton = document.querySelector(".sbtn");
let passwordShow = document.querySelector(".password");

button.addEventListener("click", passwordGenerate);
secondbutton.addEventListener("click", pinGenerate);

function passwordGenerate() {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let chars = ["#", "%", "$", "!", "@", "&", "+", "?"];
  let upperLetters = ["A", "B", "C", "D", "E", "G", "H", "I"];
  let random = Math.floor(Math.random() * 8);
  let secondrandom = Math.floor(Math.random() * 8);
  let randomgeneratedPassword =
    letters[random] +
    numbers[random] +
    upperLetters[random] +
    chars[random] +
    numbers[secondrandom] +
    chars[secondrandom] +
    letters[secondrandom] +
    upperLetters[secondrandom];

  passwordShow.innerHTML = randomgeneratedPassword;
  console.log(randomgeneratedPassword);
}

function pinGenerate() {
  let randomOne = Math.floor(Math.random() * 4);
  let randomTwo = Math.floor(Math.random() * 4);
  let randomThree = Math.floor(Math.random() * 4);
  let randomFour = Math.floor(Math.random() * 4);
  let pinGenerated =
    randomOne + "" + randomTwo + "" + randomThree + "" + randomFour;
  passwordShow.innerHTML = pinGenerated;
  console.log(pinGenerated);
}
