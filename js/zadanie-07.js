let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;
let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");

	popup = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAddBtn = document.querySelector(".accept");
	popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTodo);
	ulList.addEventListener("click", checkClick);
	popupCloseBtn.addEventListener("click", closePopup);
	popupAddBtn.addEventListener("click", changeTodoText);
	todoInput.addEventListener("keydown", enterKeyCheck);
};

const addNewTodo = () => {
	if (todoInput.value !== "") {
		newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		createToolsArea();
		ulList.append(newTodo);

		todoInput.value = "";
		errorInfo.textContent = "";
	} else {
		errorInfo.textContent = "Wpisz treść zadania";
	}
};

const createToolsArea = () => {
	const div = document.createElement("div");
	div.setAttribute("class", "tools");
	newTodo.append(div);

	const btn1 = document.createElement("button");
	btn1.setAttribute("class", "complete");
	div.append(btn1);

	const i = document.createElement("i");
	i.setAttribute("class", "fas fa-check");
	btn1.append(i);

	const btn2 = document.createElement("button");
	btn2.setAttribute("class", "edit");
	btn2.textContent = "EDIT";
	div.append(btn2);

	const btn3 = document.createElement("button");
	btn3.setAttribute("class", "delete");
	div.append(btn3);

	const i2 = document.createElement("i");
	i2.setAttribute("class", "fas fa-times");
	btn3.append(i2);
};

const checkClick = e => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed");
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTodo(e);
	} else if (e.target.matches(".delete")) {
		deleteTodo(e);
	}
};

const editTodo = e => {
	todoToEdit = e.target.closest("li");
	popupInput.value = todoToEdit.firstChild.textContent;

	popup.style.display = "flex";
};

const closePopup = () => {
	popup.style.display = "none";
	popupInfo.textContent = "";
};

const changeTodoText = () => {
	if (popupInput.value !== "") {
		todoToEdit.firstChild.textContent = popupInput.value;
		popup.style.display = "none";
		popupInfo.textContent = "";
	} else {
		popupInfo.textContent = "Musisz podać jakaś treść";
	}
};

const deleteTodo = e => {
	e.target.closest("li").remove();

	const allLi = document.querySelectorAll("li");
	if (allLi.length === 0) {
		errorInfo.textContent = "Brak zadań na liście.";
	}
};

const enterKeyCheck = e => {
	if (e.key === "Enter") {
		addNewTodo();
	}
};

document.addEventListener("DOMContentLoaded", main);
