AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

const nav = document.querySelector(".def__nav");
const navUl = document.querySelector(".nav-ul");
const menuBtn = document.querySelector(".menu-btn");
const submit = document.querySelector(".submit");
const input = document.querySelector(".input");
const required1 = document.querySelector(".require");
const required2 = document.querySelector(".require2");
const required3 = document.querySelector(".require3");
const firstLi = $("ul.nav-ul li").eq(1);
const secondLi = $("ul.nav-ul li").eq(2);
const thirdLi = $("ul.nav-ul li").eq(3);
const fourthLi = $("ul.nav-ul li").eq(4);
const fifthLi = $("ul.nav-ul li").eq(5);

// Prevent defualt behavior of form submission onclick and display required
function displayRequiredFormData() {
  required1.style.display = "block";
  required2.style.display = "block";
  required3.style.display = "block";
}

submit.onclick = function (e) {
  e.preventDefault();
  if (document.forms["form"].name.value === "") {
    displayRequiredFormData();
  } else if (document.forms["form"].email.value === "") {
    displayRequiredFormData();
  } else if (document.forms["form"].phone.value === "") {
    displayRequiredFormData();
  } else {
    return true;
  }
};

// Add active class nav on scroll
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > navUl.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// Blur Background Image on Scroll
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  $(".background__image").css({
    filter: "blur(" + scroll / 30 + "px)",
  });
});

// Hamburger
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  animateOnMobileView();
  navUl.classList.toggle("show");
  nav.classList.toggle("black");

  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");

    menuOpen = false;
  }
});

// OnMousehover function on Ul list Items
function onHoverFunction() {
  firstLi.hover(function () {
    firstLi.toggleClass("current");
  });
  secondLi.hover(function () {
    secondLi.toggleClass("current");
  });

  thirdLi.hover(function () {
    thirdLi.toggleClass("current");
  });

  fourthLi.hover(function () {
    fourthLi.toggleClass("current");
  });

  fifthLi.hover(function () {
    fifthLi.toggleClass("current");
  });
}

onHoverFunction();

// Animation on MobileView
function animateOnMobileView() {
  $("li")
    .eq(0)
    .addClass("animate__animated animate__fadeInDown animate__delay-0.9s");
  $("li")
    .eq(1)
    .addClass("animate__animated animate__fadeInDown animate__delay-1s");

  $("li")
    .eq(2)
    .addClass("animate__animated animate__fadeInDown animate__delay-2s");

  $("li")
    .eq(3)
    .addClass("animate__animated animate__fadeInDown animate__delay-3s");

  $("li")
    .eq(4)
    .addClass("animate__animated animate__fadeInDown animate__delay-4s");

  $("li")
    .eq(5)
    .addClass("animate__animated animate__fadeInDown animate__delay-5s");
}
