// Menu Open & Close
const menuIcon = document.querySelector(".menu-icon"),
  menu = document.querySelector(".links ul");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuIcon.classList.toggle("bx-x");
});

// Go To Top Arrow
const arrow = document.querySelector(".top-arrow");

window.onscroll = () => {
  if (document.body.scrollTop >= 192 || document.documentElement.scrollTop >= 192) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
};
arrow.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
