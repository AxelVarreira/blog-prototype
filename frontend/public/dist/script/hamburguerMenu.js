"use strict";const menuIcon = document.querySelector(".headerHamburguerMenu") ;
const navbar = document.querySelector(".headerNavbar") ;

console.log(navbar, menuIcon);

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
