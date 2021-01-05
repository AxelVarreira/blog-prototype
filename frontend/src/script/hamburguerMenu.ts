const menuIcon = document.querySelector(".headerHamburguerMenu") as HTMLElement;
const navbar = document.querySelector(".headerNavbar") as HTMLElement;

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
