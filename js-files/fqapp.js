header = document.querySelector('header');
const faders = document.querySelectorAll('.imgcontainer');
const slider = document.querySelector('.content');
const div_slide = document.querySelector('.def');

// -------------------------------- hamburger stuff -------------------------------- //

 

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// ----------------------------------------------------- -------------------------------- //

slider.addEventListener("scroll" , () => {
    header.classList.toggle("scrolled" , slider.scrollTop>0);
});

 


const appearOptions = {threshold : 0 ,  rootMargin : "0px 0px -146px 0px" };

const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("appear");
        }
        else{
            entry.target.classList.remove('appear');
        }
    });
}, appearOptions);

faders.forEach(fader => {
    observer1.observe(fader);
});

 
 

const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show' );
        }
        else{
            entry.target.classList.remove('show');
        }
    });
},);

observer2.observe(div_slide);