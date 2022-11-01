const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

const tds = document.querySelectorAll('td');
tds.forEach((td) => {
  td.style.setProperty('--td-background-color', '#00ff00');
});

var Button=document.getElementById('Button');
/* Clear all previous hover classes */
Button.classList.remove('HoverClass1','HoverClass2');
/* Set the desired hover class */
Button.classList.add('HoverClass1');
