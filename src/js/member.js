const aboutCarouselContainer = document.querySelector(".about__carousel");

const setCarousels = () => {
	const aboutCarousel = new Flickity(aboutCarouselContainer, {
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
