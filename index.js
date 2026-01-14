//  mobile navition show and hide toggle

let toggle = document.querySelector(".toggle-bar");
let hideBar= document.querySelector(".hambuger-cont ul")


toggle.addEventListener("click", () => {
    hideBar.classList.toggle("show")
})


// document.querySelectorAll(".close-nav-with-body-click").addEventListener("click", () => {
//     document.querySelector(".mobile-links").style.display = "none";
//     console.log("i clicked hero");

// })

