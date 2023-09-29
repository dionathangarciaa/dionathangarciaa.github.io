const btnMenu = document.getElementById("js-btn-menu");
btnMenu.addEventListener("click", () => {
  document.documentElement.classList.toggle("open-menu");
  btnMenu.classList.toggle("is-active");
});
