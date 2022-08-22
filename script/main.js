
const hamburger = document.querySelector(".header__hamburger")
const navMenu = document.querySelector(".header__menu")

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active')
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/*----------------Acciones de login--------------*/
const signUpButton = document.querySelector("#signUp");
const signInButton = document.querySelector("#signIn");
const container = document.querySelector("#login-container");


signUpButton.addEventListener("click",()=>{
    container.classList.toggle("right-panel-active")
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active")
});