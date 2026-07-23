// Mobil Menü

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Yukarı Çık Butonu

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.classList.add("show");
    }else{
        topBtn.classList.remove("show");
    }

});

if(topBtn){
    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });
}

// Header Efekti

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});

// Fade Animasyonu

const fades=document.querySelectorAll(".fade");

function reveal(){

    fades.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);