const heroVideo = document.querySelector(".header__video");
const partnersContainer = document.querySelector(".partners__carousel");
const reviewsContainer = document.querySelector(".reviews__container");

const loadHeroVideo = () => {
	if (window.innerWidth > 1200) {
		heroVideo.src = "../dist/assets/video/hero-video.mp4";
	}
};
//Interview Modal - main page
const interviewModal = document.querySelector(".interview-modal");
const interviewPlayButton = document.querySelector(
	".owner__interview-button-play"
);
const interviewVideo = document.querySelector(".interview-modal-video");
const toggleInterview = () => {
	interviewModal.classList.toggle("interview-modal-active");
	document.body.classList.toggle("fixed-body");
	interviewVideo.src = "https://www.youtube.com/embed/lijmWYzGRx8";
};
interviewPlayButton.addEventListener("click", toggleInterview);
interviewModal.addEventListener("click", toggleInterview);

const setCarousels = () => {
	const partnersCarousel = new Flickity(partnersContainer, {
		cellAlign: "left",
		contain: true,
		prevNextButtons: false,

		autoPlay: true,
		pauseAutoPlayOnHover: false,
		wrapAround: true,
	});
	const reviewsCarousel = new Flickity(reviewsContainer, {
		cellAlign: "left",
		contain: true,
		prevNextButtons: false,
		autoPlay: 8000,
	
		pauseAutoPlayOnHover: false,
		wrapAround: true,
	});
};

document.addEventListener("DOMContentLoaded", () => {
	loadHeroVideo();
	setCarousels();
});
