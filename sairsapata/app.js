const mobile_nav =document.querySelector(".mobile-nav-btn");
const nav_header =document.querySelector(".header");

const togglenavbar = () =>{
   nav_header.classList.toggle("active")
}



mobile_nav.addEventListener("click",()=>togglenavbar());


const navbar = document.getElementById("nav");
// const topLink = document.getElementById("top-link");

//fixed nav bar
window.addEventListener("scroll",function () {
 const scrollHeight = window.pageYOffset;
 const navHeight =   navbar.getBoundingClientRect().height;
 if(scrollHeight > navHeight){navbar.classList.add("fixed-nav");
}
else{navbar.classList.remove("fixed-nav");}});
const navHeight =navbar.getBoundingClientRect().height;


// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.getElementById("nav");

//   window.addEventListener("scroll", function () {
//     const scrollHeight = window.pageYOffset;
//     const navHeight = navbar.getBoundingClientRect().height;

//     if (scrollHeight > navHeight) {
//       navbar.classList.add("fixed-nav");
//     } else {
//       navbar.classList.remove("fixed-nav");
//     }
//   });



//Swiper

document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".review-content", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});


//GALEERY
    const myImage = document.getElementById("myImage");
    
    myImage.addEventListener("click", function() {
        window.location.href = "kalam.html";
    });

    const uImage = document.getElementById("uImage");
    
    uImage.addEventListener("click", function() {
        window.location.href = "neelum.html";
    });

    const hunzaImg = document.getElementById("hunzaImg");
    
    hunzaImg.addEventListener("click", function() {
        window.location.href = "hunza.html"; 
    });
    const kashmirimg = document.getElementById("kashmirimg");
    
    kashmirimg.addEventListener("click", function() {
        window.location.href = "kashmir.html";
    });
  
    
    //footer
// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the current year element
const currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = currentYear;
