// Elem hozzáadása
function addItem() {
    const input = document.getElementById("itemInput");
    const newItem = input.value.trim();
    if (newItem === "") return;

    const list = document.getElementById("itemList");
    const listItem = document.createElement("li");
    listItem.textContent = newItem;
    listItem.setAttribute("draggable", "true");
    listItem.addEventListener("dragstart", dragStart);
    listItem.addEventListener("dragend", dragEnd);

    list.appendChild(listItem);
    input.value = ""; // Input mező törlése
}

// Kategória hozzáadása
function addCategory() {
    const categoryInput = document.getElementById("categoryInput");
    const categoryName = categoryInput.value.trim();
    if (categoryName === "") return;

    const categoriesContainer = document.getElementById("categoriesContainer");
    const categoryBox = document.createElement("div");
    categoryBox.classList.add("category-box");
    categoryBox.innerHTML = `<h2>${categoryName}</h2><ul></ul>`;
    categoryBox.addEventListener("dragover", dragOver);
    categoryBox.addEventListener("drop", drop);

    categoriesContainer.appendChild(categoryBox);
    categoryInput.value = ""; // Törli a kategória input mezőt
}

// Drag-and-drop funkciók
let draggedItem = null;

function dragStart(event) {
    draggedItem = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
}

function dragEnd() {
    setTimeout(() => {
        this.style.display = "block";
        draggedItem = null;
    }, 0);
}

function dragOver(event) {
    event.preventDefault();
}

function drop() {
    if (draggedItem) {
        this.querySelector("ul").appendChild(draggedItem);
    }
}
