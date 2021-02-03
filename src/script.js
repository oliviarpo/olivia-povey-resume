// Current date
var dt = new Date();
document.getElementById("datetime").innerHTML =
  ("0" + dt.getHours()).slice(-2) +
  ":" +
  ("0" + dt.getMinutes()).slice(-2) +
  ", " +
  ("0" + dt.getDate()).slice(-2) +
  "." +
  ("0" + (dt.getMonth() + 1)).slice(-2) +
  "." +
  dt.getFullYear();

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
