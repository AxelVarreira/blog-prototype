const menuIcon = document.querySelector(".headerHamburguerMenu") as HTMLElement;
const navbar = document.querySelector(".headerNavbar") as HTMLElement;

console.log(navbar, menuIcon);

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
