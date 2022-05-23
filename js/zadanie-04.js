const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const firstSpan = document.querySelector(".one");
const secondSpan = document.querySelector(".two");

const swap = () => {
	if (firstSpan.textContent === "°C") {
		firstSpan.textContent = "°F";
		secondSpan.textContent = "°C";
		result.textContent = "";
	} else {
		firstSpan.textContent = "°C";
		secondSpan.textContent = "°F";
		result.textContent = "";
	}
};

const fahrToCel = () => {
	const fahrenheit = converter.value * 1.8 + 32;
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
	converter.value = "";
};

const celToFahr = () => {
	const celsius = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
	converter.value = "";
};

const conversion = () => {
	if (converter.value !== "") {
		if (firstSpan.textContent === "°C") {
			fahrToCel();
		} else {
			celToFahr();
		}
	}
};

const reset = () => {
	conversion.value = "";
	result.textContent = "";
};

changeBtn.addEventListener("click", swap);
resetBtn.addEventListener("click", reset);
convBtn.addEventListener("click", conversion);
