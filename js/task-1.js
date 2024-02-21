// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).


const ulEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${ulEl.length}`);

ulEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`);
})

