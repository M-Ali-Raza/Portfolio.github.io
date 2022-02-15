let burger=document.querySelector(".burger");
let navbar=document.querySelector(".navbar");
let navBtn=document.querySelector(".navbar>ul");
burger.addEventListener("click",()=>{
    navbar.classList.toggle('navheight');
    navBtn.addEventListener("click",()=>{
        navbar.classList.remove('navheight');
    });
});