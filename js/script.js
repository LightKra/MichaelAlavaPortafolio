const buttonNavbar = document.getElementById("navbar__movil__icon");
const navbar = document.getElementsByClassName("navbar__container")[0];
let stateNavbar = false;
buttonNavbar.addEventListener("click",()=>{
    if(stateNavbar){
        navbar.style.width = "0px";
        navbar.style.transform = "translateX(-20px)";
        stateNavbar = false;
        console.log("cerrar")
    }else{
        navbar.style.width = "310px";
        navbar.style.transform = "translateX(0)"
        stateNavbar = true;
        console.log("abrir")
    }
});
/* 
if(screen.width>1024){
    navbar.style.width = "310px";
    navbar.style.transform = "translateX(0)"
}*/

window.onresize = ()=>{
    if(document.body.scrollWidth>1024){
        navbar.style.width = "310px";
        navbar.style.transform = "translateX(0)"
    }
    if(document.body.scrollWidth<1024){
        navbar.style.width = "0px";
        navbar.style.transform = "translateX(-20px)";
    }
}