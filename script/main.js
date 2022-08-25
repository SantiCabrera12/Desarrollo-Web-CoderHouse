
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
const container = document.querySelector(".container"),
        pwShowHide  = document.querySelectorAll(".showHidePw"),
        pwFields  = document.querySelectorAll(".password"),
        signUp  = document.querySelector(".signup-link"),
        login  = document.querySelector(".login-link");
    

        //Mostrar/ocultar contraseña e icono
        pwShowHide.forEach(eyeIcon =>{
            eyeIcon.addEventListener("click", ()=>{
                pwFields.forEach(pwField =>{
                    if(pwField.type === "password"){
                        pwField.type = "text"

                        pwShowHide.forEach(icon =>{
                            icon.classList.replace("uil-eye-slash","uil-eye")
                        })
                    }else{
                        pwField.type = "password"

                        pwShowHide.forEach(icon =>{
                            icon.classList.replace("uil-eye","uil-eye-slash")
                        })
                    }
                })
            })
        })


        //Codigo para mostrar el formulario de registro 
        signUp.addEventListener("click", ()=>{
            container.classList.add("active")
        })
        login.addEventListener("click", ()=>{
            container.classList.remove("active")
        })