/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.querySelectorAll("section");
let navbarLinks = document.getElementById("navbarLinks");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// function to cheak if the section is in the view port

 function isInViewPort(section) {
   let scrollTop = window.pageYOffset;
   let offsetMin500 = section.offsetTop-500;
   let offsetPlusHeight =  section.offsetTop+section.clientHeight - 500;
   if ( scrollTop >= offsetMin500 && scrollTop < offsetPlusHeight) {
     return true;
   } else {
     return false;
   }
 }


 // function to remove classe (active) from the siblings of a section
 
 function removeActiveFromSiblings(section) {
  let nextSibling = section.nextElementSibling;
  nextSibling.classList.remove("active");
  while(nextSibling){
    nextSibling.classList.remove("active");
    nextSibling = nextSibling.nextElementSibling;
  }
  let previousSibling = section.previousElementSibling;
  previousSibling.classList.remove("active");
  while(previousSibling){
    previousSibling.classList.remove("active");
    previousSibling = previousSibling.previousElementSibling;
  }
 }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
(function(){
    let LinksContainer = "";
    for( let i=0 ; i < sections.length ; i++ ) {
        LinksContainer += `<li class="navbar-item"><a class="navbar-link" onclick="sectionScroll(${sections[i].offsetTop})">${sections[i].attributes[1].value}</a></li>` 
    }
    navbarLinks.innerHTML=LinksContainer;
})();

// Add class 'active' to section when near top of viewport

window.onscroll =function(){
for(let i=0 ; i<sections.length ; i++) {
  if(isInViewPort(sections[i])) {
    sections[i].classList.add("active");
    removeActiveFromSiblings(sections[i]);
    
  }
}

}

// Scroll to anchor ID using scrollTO event
function sectionScroll(offsetTop){
  window.scrollTo({
    top : offsetTop-100,
    left:0,
    behavior: 'smooth'
  })
}

/**
 * End Main Functions
*/









// -------------------- js for the design of the navbar --------------------------



const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector(".navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

// ------------------ end ------------------------//