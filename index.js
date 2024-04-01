window.addEventListener("scroll", () => {
  let menu = document.querySelector(".menu");
  let scrollPosition = window.scrollY;
  if (scrollPosition > 415) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
});
