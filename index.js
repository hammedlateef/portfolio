//  mobile navition show and hide toggle

let showNav = document.querySelector(".show-nav");
let hideNav = document.querySelector(".fa-xmark");

showNav.addEventListener("click", () => {
    document.querySelector(".mobile-links").style.display = "block"
})

hideNav.addEventListener("click", () => {
    document.querySelector(".mobile-links").style.display = "none"
})

// document.querySelectorAll(".close-nav-with-body-click").addEventListener("click", () => {
//     document.querySelector(".mobile-links").style.display = "none";
//     console.log("i clicked hero");

// })

