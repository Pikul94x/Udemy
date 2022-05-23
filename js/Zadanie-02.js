const sizeUp = document.querySelector(".sizeUp");
const sizeDown = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const p = document.querySelector("div>p");

let fontSize = 36;

const increseFont = () => {
	if (fontSize >= 50) return;
	fontSize += 5;
	p.style.fontSize = fontSize + "px";
};

const decreaseFont = () => {
	if (fontSize < 21) return;
	fontSize -= 5;
	p.style.fontSize = fontSize + "px";
};

const colorChanger = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	p.style.color = `rgb(${r},${g},${b})`;
};

sizeUp.addEventListener("click", increseFont);
sizeDown.addEventListener("click", decreaseFont);
colorBtn.addEventListener("click", colorChanger);
