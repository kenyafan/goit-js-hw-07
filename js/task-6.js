// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputEl = document.querySelector("input");
const createElBtn = document.querySelector("[data-create]");
const destroyElBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createElBtn.addEventListener("click", onCreateClick);
destroyElBtn.addEventListener("click", onDestroyClick);

function onCreateClick() {
  let userInput = parseInt(inputEl.value);
  onDestroyClick();

  if (userInput >= 1 && userInput <= 100) {
    let divArr = createBoxes(userInput);
    boxesContainer.append(...divArr);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function createBoxes(userInput) {
  let divArr = [];
  let size = 30;
  for (let i = 0; i < userInput; i++) {
    const divEl = document.createElement("div");
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divArr.push(divEl);
    size += 10;
  }
  return divArr;
}

function onDestroyClick() {
  boxesContainer.innerHTML = "";
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
