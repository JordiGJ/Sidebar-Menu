// get elements
const icons = document.querySelectorAll("i");
const hamburger = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const sidebar = document.querySelector(".sidebar");

// functions
function handleClick(e) {
  const list = e.target.classList[1];
  // click on hamburger
  if (list === "fa-bars" && sidebar.style.transform === "translateX(500px)") {
    // if sidebar is already showing
    sidebar.style.transform = "translateX(0px)";
  } else {
    // if sidebar is hidden
    sidebar.style.transform = "translateX(500px)";
  }

  // click on sidebar x icon
  if (list === "fa-xmark") {
    sidebar.style.transform = "translateX(0px)";
  }
}

// eventsListeners
icons.forEach((i) => i.addEventListener("click", handleClick));
