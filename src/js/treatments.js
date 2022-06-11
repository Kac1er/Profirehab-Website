const treatmentBtns = document.querySelectorAll(".treatment__btn");
const treatmetnList = document.querySelectorAll(".treatment__list");

const removeShow = () => {
	treatmetnList.forEach((item) => {
		item.classList.remove("show");
	});
	treatmentBtns.forEach((item) => {
		item.classList.remove("show");
		item.querySelector(".btn-text").innerHTML = "Czytaj Więcej";
	});
};
treatmentBtns.forEach((btn) => {
	btn.addEventListener("click", function showLis(btn) {
		const btnText = btn.target.querySelector(".btn-text");
		const textBox = btn.target.previousElementSibling;
		const list = textBox.querySelector(".treatment__list");
		if (list.classList.contains("show")) {
			removeShow();
			btn.target.classList.remove("show");
			list.classList.remove("show");
		} else {
			removeShow();
			btnText.innerHTML = "Ukryj tekst";
			btn.target.classList.add("show");
			list.classList.add("show");
		}
	});
});
