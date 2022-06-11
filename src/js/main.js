const closeBtn = document.querySelector(".close-btn");
const menuItems = document.querySelectorAll(".menu-item");
const hamBtn = document.querySelector(".ham-btn");
const menu = document.querySelector(".nav__menu");
const shadowNav = document.querySelector(".nav__shadow");

//open menu
const addVisibilityHidden = () => {
	menu.style.visibility = "hidden";
};
const openMenu = () => {
	menu.style.visibility = "visible";
	menu.classList.add("show");
	shadowNav.classList.add("show");
	document.body.classList.add("fixed-body");
};
//close menu
const closeMenu = () => {
	menu.classList.remove("show");
	shadowNav.classList.remove("show");
	document.body.classList.remove("fixed-body");
	setTimeout(addVisibilityHidden, 100);
};

//change color nav
function scrollHeader() {
	const navItem = document.querySelector(".nav__components");
	if (this.scrollY >= 100) navItem.classList.add("scroll-nav");
	else navItem.classList.remove("scroll-nav");
}
window.addEventListener("scroll", scrollHeader);
hamBtn.addEventListener("click", openMenu);
menuItems.forEach((item) => {
	item.addEventListener("click", closeMenu);
});
closeBtn.addEventListener("click", closeMenu);
shadowNav.addEventListener("click", closeMenu);

const setIntersectionObserver = () => {
	const imageObserver = new IntersectionObserver((entries, imgObserver) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;
				lazyImage.classList.remove("lazy-load-image");
				imgObserver.unobserve(lazyImage);
			}
		});
	});
	const arr = document.querySelectorAll("img.lazy-load-image");
	arr.forEach((v) => {
		imageObserver.observe(v);
	});
};

document.addEventListener("DOMContentLoaded", () => {
	setIntersectionObserver();
});
