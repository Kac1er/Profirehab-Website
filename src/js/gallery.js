const galleryShadow = document.querySelector(".gallery__shadow");
const galleryItems = document.querySelectorAll(".gallery-item");

const closeImageView = () => {
	galleryShadow.classList.remove("gallery__shadow--active");
	document.body.classList.remove("always-sticky-body");
	galleryItems.forEach(item => {
		if (item.classList.contains("gallery-item--active")) {
			item.classList.remove("gallery-item--active");
		}
	});
};

const openImageView = e => {
	e.target.classList.add("gallery-item--active");
	galleryShadow.classList.add("gallery__shadow--active");
	document.body.classList.add("always-sticky-body");
};

document.addEventListener("DOMContentLoaded", () => {
    galleryShadow.addEventListener('click', closeImageView);
	galleryItems.forEach(item => {
		item.addEventListener("click", openImageView);
	});
});
