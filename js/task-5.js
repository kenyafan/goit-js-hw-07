// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body")
const textColor = document.querySelector(".color")


changeColorBtn.addEventListener("click", onButtonClick);


function onButtonClick() {
  const randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
