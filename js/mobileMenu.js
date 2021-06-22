var body = document.getElementById("body");
var menu = document.getElementById("menu");
var menuicon = document.getElementsByTagName("i")[0];
var devname = document.getElementById("devname");
var portfolio = document.getElementsByTagName("li")[0];
var about = document.getElementsByTagName("li")[1];
var contact = document.getElementsByTagName("li")[2];
var envelope = document.getElementsByTagName("li")[3];

function mobilemenu() {

  menuicon.classList.toggle("fa-bars");
  menuicon.classList.toggle("fa-times");
  devname.classList.toggle("name");
  devname.classList.toggle("name-hide");
  menu.classList.toggle("desktop-menu");
  menu.classList.toggle("mobile-menu");
  body.classList.toggle("scroll");
  body.classList.toggle("noscroll");
  envelope.classList.toggle("fa-envelope");
  envelope.classList.toggle("hide");
}

function link() {
  if (menu.className == "mobile-menu") {
    menu.className = "desktop-menu";
  } else {
    menu.className = "desktop-menu";
  }
  if (menuicon.className == "fa fa-times") {
    menuicon.className = "fa fa-bars";
  } else {
    menuicon.className = "fa fa-bars";
  }
  if (devname.className == "name-hide") {
    devname.className = "name";
  } else {
    devname.className = "name";
  }
  if (body.className == "noscroll") {
    body.className = "scroll";
  } else {
    body.className = "scroll";
  }
  if (envelope.className == "hide") {
    envelope.className = "fa-envelope";
  } else {
    envelope.className = "fa-envelope";
  }
}

menuicon.addEventListener("click", mobilemenu);
portfolio.addEventListener("click", link);
about.addEventListener("click", link);
contact.addEventListener("click", link);