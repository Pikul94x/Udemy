const burgerBtn = document.querySelector(".burger");
const barIco = document.querySelector(".fa-bars");
const xIco = document.querySelector(".fa-times");
const nav = document.querySelector("nav ul");

const handleNav = () => {
	nav.classList.toggle("active");
	burgerBtn.classList.toggle("active");
	xIco.classList.toggle("hide");
	barIco.classList.toggle("hide");
};

burgerBtn.addEventListener("click", handleNav);
