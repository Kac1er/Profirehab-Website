const readmoreButton = document.querySelectorAll(".offer__readmore");
const offers = document.querySelectorAll(".offer__box");
const offerShadow = document.querySelector(".offer__shadow");
const offerContent = document.querySelectorAll(".offer__content");

const toggleOffer = e => {
	e.preventDefault();
	e.target.parentNode.classList.toggle("offer__box--active");
	document.body.classList.toggle("always-sticky-body");
	offerShadow.classList.toggle("offer__shadow--active");
};

const clearActiveOffers = () => {
	offerShadow.classList.toggle("offer__shadow--active");
	document.body.classList.toggle("always-sticky-body");
	offers.forEach(offer => {
		if (offer.classList.contains("offer__box--active")) {
			offer.classList.remove("offer__box--active");
		}
	});
	offerContent.forEach(offer => {
		offer.scrollTo(0, 0);
	});
};
document.addEventListener("DOMContentLoaded", () => {
	readmoreButton.forEach(button => {
		button.addEventListener("click", toggleOffer);
	});
	offerShadow.addEventListener("click", clearActiveOffers);
});
