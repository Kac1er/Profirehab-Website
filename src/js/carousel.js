const carousel = document.querySelector('.carousel');

const setCarousels = () => {
	const carouselContainer = new Flickity(carousel, {
		cellAlign: "left",
		contain: true,
		prevNextButtons: false,

		autoPlay: true,
		pauseAutoPlayOnHover: false,
		wrapAround: true,
	});
};

document.addEventListener("DOMContentLoaded", () => {
	setCarousels();
});