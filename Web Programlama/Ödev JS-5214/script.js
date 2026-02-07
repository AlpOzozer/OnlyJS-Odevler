function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


const nav = document.getElementById("container");
const desktopnav = document.getElementById("desktop-container")
const mobilenav = document.getElementById("topnav")

function applyLayout() {
  if (window.innerWidth <= 992) {
    nav.classList.add("topnav");
    desktopnav.style.display = "none";
    mobilenav.style.display = "block";
    nav.classList.remove("desktop-container");

  } else {
    nav.classList.remove("topnav");
    mobilenav.style.display = "none";
    desktopnav.style.display = "block";
    nav.classList.add("desktop-container");

  }
}

window.addEventListener("load", applyLayout);
window.addEventListener("resize", applyLayout);