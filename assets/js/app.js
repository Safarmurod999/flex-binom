const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const headerLinks = document.querySelectorAll(
  ".header__list .header__list-item"
);
const headerBurger = document.querySelector(".header__burger");

window.addEventListener("scroll", function () {
  header.classList.toggle("shrink", window.scrollY > 0);
});

function navbarControl() {
  header.classList.toggle("header-active");
  headerBurger.classList.toggle("header__burger-active");
  if (window.innerWidth <= 1024) {
    if (header.classList.contains("header-active")) {
      headerMenu.style.left = "0px";
    } else {
      headerMenu.style.left = "-100%";
    }
  }
}

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
   navbarControl();
  });
});

let video = document.querySelector("#video");

let videoController = document.querySelector(".video-controller");

function videoControl() {
  if (video.paused) {
    video.play();
    videoController.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 19V5H19V19H13ZM5 19V5H11V19H5ZM15 17H17V7H15V17ZM7 17H9V7H7V17Z" fill="white"/>
    </svg>
    `;
  } else {
    video.pause();
    videoController.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 11.13L5.50001 3.04999C5.34799 2.96222 5.17554 2.91602 5.00001 2.91602C4.82447 2.91602 4.65203 2.96222 4.50001 3.04999C4.3474 3.13809 4.22079 3.26496 4.13299 3.41774C4.04518 3.57051 3.99931 3.74378 4.00001 3.91999V20.08C3.99931 20.2562 4.04518 20.4295 4.13299 20.5822C4.22079 20.735 4.3474 20.8619 4.50001 20.95C4.65203 21.0378 4.82447 21.084 5.00001 21.084C5.17554 21.084 5.34799 21.0378 5.50001 20.95L19.5 12.87C19.6539 12.7828 19.7819 12.6563 19.871 12.5035C19.96 12.3506 20.007 12.1769 20.007 12C20.007 11.8231 19.96 11.6494 19.871 11.4965C19.7819 11.3437 19.6539 11.2172 19.5 11.13ZM6.00001 18.35V5.64999L17 12L6.00001 18.35Z" fill="white"/>
    </svg>`;
  }
}
