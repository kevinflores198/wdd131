
// That is a way to change the title
document.title = "New title"

// how to change to dark mode background
document.body.style.background = "black";

// And it is going to be the same with all colors
document.body.style.color= "red"

// we can also asign an ID too an element in the HTML doc and edit it on JS

// 1. We create the variable/object that is going to be next to welcome msg
const userName = "Kevin Flores";
// 2. We call the element from HTML, using a variable
const title = document.getElementById("title-msg");
// 3. we copncatenate the element with the variable added. if it's empty will give guest
title.textContent += userName === "" ? "Guest" : userName;
