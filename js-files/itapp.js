const appearOptions = {threshold : 0 ,  rootMargin : "0px 0px -100px 0px" };


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
}, appearOptions);
   
const hiddenels = document.querySelectorAll('.hidden');
const hiddenels1 = document.querySelectorAll('.hidden1');
const hiddenels2 = document.querySelectorAll('.hidden2');

hiddenels.forEach((el) => {observer.observe(el)});
hiddenels1.forEach((el) => {observer.observe(el)});
hiddenels2.forEach((el) => {observer.observe(el)});




// -------------header stuff ------------
header = document.querySelector('header');

window.addEventListener("scroll" , () => {
    header.classList.toggle("scrolled" , pageYOffset>0);
})


// -------------------------------- hamburger stuff -------------------------------- //

 

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


// ----------------------------------------------------- -------------------------------- //