const space_div = document.querySelector(".space-div");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
sun.style.display = "none";
const input = document.getElementById("input");
const form1 = document.querySelector(".input-form");
const header = document.getElementsByTagName("header")[0];
const section = document.querySelector(".section");
const ul_div = document.querySelector(".ul");
const main_info = document.querySelector(".main-information");

space_div.addEventListener("click", () => {
  if (sun.style.display === "none") {
    moon.style.display = "none";
    sun.style.display = "block";
    document.body.classList.toggle("dark");
    input.classList.toggle("dark-input");
    form1.classList.toggle("dark-input");
    header.style.background = "url(./img-folder/dark-img.jpg)";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";
    header.style.backgroundPositionX = "100%";
    section.classList.toggle("section-dark");
    ul_div.classList.toggle("dark-ul");
    main_info.classList.toggle("main-information-dark");
  } else {
    moon.style.display = "block";
    sun.style.display = "none";
    document.body.classList.toggle("dark");
    input.classList.toggle("dark-input");
    form1.classList.toggle("dark-input");
    header.style.background = "url(./img-folder/background-img.jpg)";
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundSize = "cover";
    header.style.backgroundPositionX = "100%";
    section.classList.toggle("section-dark");
    ul_div.classList.toggle("dark-ul");
    main_info.classList.toggle("main-information-dark");
  }
});

const number = document.querySelector(".number"); // this is a counter of how many results we get
let todo_arry = [];
const check = document.getElementById("check");

check.addEventListener("click", () => {
  add();
  input.value = "";
  number.innerHTML = todo_arry.length;
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior
    add();
    input.value = "";
    number.innerHTML = todo_arry.length;
  }
});

let counter = 0;

function add() {
  const input = document.getElementById("input");
  const newItem = input.value.trim();

  if (newItem === "") {
    alert("Write something...");
  } else if (todo_arry.includes(newItem)) {
    alert("Item already exists!");
  } else {
    todo_arry.push(newItem);
    // localStorage.setItem("todos", JSON.stringify(input.value));
    // li = localStorage.getItem("todos");

    const list = document.createElement("li");
    const ul = document.querySelector(".ul");
    counter++;

    // Insert the new item at the beginning of the list
    ul.insertBefore(list, ul.firstChild);

    list.innerHTML = `
      <div class="li-div">
        <input type="checkbox" id="check-result-${counter}" class="checkbox-result"/>
        <label for="check-result-${counter}"></label>
        <li class="result">${newItem}</li>
        <button class="delete"><i class="fa-sharp fa-solid fa-x" id="pop"></i></button>
      </div>
    `;
    // remove

    const deleteBtn = list.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      // Get the index of the item to remove
      const indexToRemove = todo_arry.pop(newItem);

      // Remove the item from the array
      if (indexToRemove !== -1) {
        todo_arry.splice(indexToRemove, 0);
      }
      // Remove the list item from the DOM
      ul.removeChild(list);
      // Update the counter
      number.innerHTML = todo_arry.length;
    });
    // li-check
    const check_info = list.querySelector(".checkbox-result");
    const result = list.querySelector(".result");
    check_info.addEventListener("click", () => {
      if (check_info.checked) {
        result.style.textDecoration = "line-through";
        // result.style.color = "grey";
      } else {
        result.style.textDecoration = "none";
      }
    });
  }
}
