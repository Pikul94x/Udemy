const btn = document.querySelector(".arrow");
const arrow = document.querySelector(".fas");
const img = document.querySelector(".item1");

const showImg = () => {
	img.classList.toggle("hide");

	if (img.classList.contains("hide")) {
		arrow.style.transform = "rotate(180deg";
	} else {
		arrow.style.transform = "rotate(0deg)";
	}
};

btn.addEventListener("click", showImg);
