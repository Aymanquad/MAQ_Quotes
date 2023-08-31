
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

const div = document.querySelector('.quotessection');

window.addEventListener('scroll' , (evt) =>{
    

    const scrollable = document.documentElement.scrollHeight - window.innerHeight - 200;
    const scrolled = window.scrollY ; 

    //console.log(scrollable);
    
    var speed = (div.scrollHeight)/1568 ;

    var scroll_stop = scrollable - 240 ;
    var i = 0 ;
    var count = 0 ; 

    if(window.scrollY > Math.ceil(scroll_stop)){
        do{

            // if( Math.ceil(scrolled) <= Math.ceil(scrollable)){                       
            //     window.scrollY -= 300;
            // }

            // window.scrollTo(0 , 1510);

            if(window.scrollY > Math.ceil(scroll_stop)  &&  div.scrollTop <  900){


                if( Math.ceil(scrolled) === Math.ceil(scrollable)){ 
                    console.log("nigga hit the end")
                }


                    i++;



                    x = window.scrollY - scroll_stop ;
                    // console.log(x);
                    // div.scrollTop = div.scrollTop + x + 10
                    speed = speed + 5 ;
                    div.scrollTo( { top : div.scrollTop + x + 1.885*speed , behavior : 'auto'});
                    window.scrollY = window.scrollY - x + 1  ;
                    if(window.scrollY > (Math.ceil(scroll_stop) + (x/2)  )){
                        console.log("worked")
                        window.scrollY = window.scrollY - (x/2) ;
                    }
                    
                    // div.scrollTop += 100;
                    if(i===1){break;}
                }
            else{
                    console.log("yo , didnt woscrrk ");
                    window.scrollY  = scrolled ; 
                    break;
            }

        }while(div.scrollTop <  900);
    }

}

    // if(Math.ceil(scrolled) === scrollable){
    
    // }
    
)








// var isSynced = false;

// el.addEventListener('scroll', syncScroll);

// function syncScroll() {
//   var mainPageHeight = document.body.clientHeight;
//   var viewportHeight = window.innerHeight;
//   var mainPageScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   var divTopOffset = div.offsetTop;
//   var divHeight = div.offsetHeight;
//   var divVisibleHeight = viewportHeight - (divTopOffset - mainPageScrollTop);

//   var shouldSyncScroll = !isSynced && mainPageScrollTop + viewportHeight >= mainPageHeight - divHeight;

//   if (shouldSyncScroll) {
//     div.scrollTop = div.scrollHeight - divVisibleHeight;
//     isSynced = true;
//   } else {
//     isSynced = false;
//   }
// }

















var controller = new ScrollMagic.Controller();
// var image = document.getElementById('myImage');
// var images = document.getElementsByClassName('cubes');
var images = document.querySelectorAll('#myImage');
var image1 = images[0];
var image2 = images[1];
var image3 = images[2];
var image4 = images[3];
var image5 = images[4];
var image6 = images[5];
var image7 = images[6];

let cube_angle = 0;


//------------------------------------ cube 1 ------------------------------------------//

var scene1 = new ScrollMagic.Scene({
    triggerElement: image1, // Trigger the scene when the image comes into view
    triggerHook: 'onEnter', // Trigger the scene when the top of the image reaches the top of the viewport
    duration: '180%' ,// Duration of the scene
    reverse : true 
})
.on('progress' , (e) =>{
    //console.log('1' , e.progress);

    if(e.progress >= 0.73100000){
       

        cube_angle -= (e.progress*7);
        image1.style.transform = `rotate(${cube_angle}deg)`;

        left = (e.progress * left) - (23 * e.progress) ; // Adjust the factor as per your preference
        top= (e.progress * (800 + top * 0.5  )); // Adjust the factor as per your preference

        image1.style.left = `${left}px`;
        image1.style.top = `${top}px`;
    }

    else{
        cube_angle += (e.progress*7);
        image1.style.transform = `rotate(${cube_angle}deg)`;

        var left = (e.progress + (823 * e.progress)); 
        var top = 700 + (e.progress * 100);

        image1.style.left = `${left}px`;
        image1.style.top = `${top}px`;
    }
})
.addTo(controller);






//------------------------------------ cube 2 ------------------------------------------//
cube_angle = 0;

var scene2 = new ScrollMagic.Scene({
    triggerElement: image2, // Trigger the scene when the image comes into view
    triggerHook: 'onEnter', // Trigger the scene when the top of the image reaches the top of the viewport
    duration: '180%' ,// Duration of the scene
    reverse : true 
})
.on('progress' , (e) =>{

    //console.log('2' , e.progress);

    if(e.progress >= 0.83100000){
        cube_angle -= (e.progress*5);
        image2.style.transform = `rotate(${cube_angle}deg)`;

        left = (e.progress * left) - (23 * e.progress) ; // Adjust the factor as per your preference
        top= (e.progress * (800 + top * 0.5  )); // Adjust the factor as per your preference

        image2.style.left = `${left}px`;
        image2.style.top = `${top}px`;
    }

    else{
        cube_angle += (e.progress*5);
        image2.style.transform = `rotate(${cube_angle}deg)`;

        var left = (e.progress + (1023 * e.progress)); 
        var top = 1300 + (e.progress * 100);

        image2.style.left = `${left}px`;
        image2.style.top = `${top}px`;
    }
})
.addTo(controller);







//------------------------------------ cube 3 ------------------------------------------//
cube_angle = 0;
var scene3 = new ScrollMagic.Scene({
    triggerElement: image3, // Trigger the scene when the image comes into view
    triggerHook: 1, // Trigger the scene when the top of the image reaches the top of the viewport
    duration: '180%' ,// Duration of the scene
    reverse : true 
})
.on('progress' , (e) =>{
    if(e.progress >= 0.93100000){
        cube_angle -= (e.progress*5.65);
        image3.style.transform = `rotate(${cube_angle}deg)`;

        left = (e.progress * left) - (23 * e.progress) ; // Adjust the factor as per your preference
        top= (e.progress * (1000 + top * 0.7  )); // Adjust the factor as per your preference

        image3.style.left = `${left}px`;
        image3.style.top = `${top}px`;
    }
    else{
        cube_angle += (e.progress*5);
        image3.style.transform = `rotate(${cube_angle}deg)`;
        var left = (e.progress + (723 * e.progress)); 
        var top = 1064 + (e.progress * 100);
        image3.style.left = `${left}px`;
        image3.style.top = `${top}px`;
    }
})
.addTo(controller);





//------------------------------------ cube 4 ------------------------------------------//
cube_angle = 0;
var scene4 = new ScrollMagic.Scene({
    triggerElement: image4, // Trigger the scene when the image comes into view
    triggerHook: 1, // Trigger the scene when the top of the image reaches the top of the viewport
    duration: '194%' ,// Duration of the scene
    reverse : true 
})
.on('progress' , (e) =>{
    if(e.progress >= 0.98100000){
        cube_angle -= (e.progress*5.65);
        image4.style.transform = `rotate(${cube_angle}deg)`;

        left = (e.progress * left) - (31 * e.progress) ; // Adjust the factor as per your preference
        top= (e.progress * (1500 + top * 0.9  )); // Adjust the factor as per your preference

        image4.style.left = `${left}px`;
        image4.style.top = `${top}px`;
    }
    else{
        cube_angle += (e.progress*4.99);
        image4.style.transform = `rotate(${cube_angle}deg)`;
        var left = (e.progress + (723 * e.progress)); 
        var top = 1520 + (e.progress * 100);
        image4.style.left = `${left}px`;
        image4.style.top = `${top}px`;
    }
})
.addTo(controller);



//------------------------------------ cube 5 (right) ------------------------------------------//
cube_angle = 0;
var scene5 = new ScrollMagic.Scene({
    triggerElement: image5, // Trigger the scene when the image comes into view
    triggerHook: 1, // Trigger the scene when the top of the image reaches the top of the viewport
    duration: '150%' ,// Duration of the scene
    reverse : true 
})
.on('progress' , (e) =>{
    if(e.progress >= 0.98100000){
        cube_angle += (e.progress*5.65);
        image5.style.transform = `rotate(${cube_angle}deg)`;

        right = (e.progress * right) - (31 * e.progress) ; // Adjust the factor as per your preference
        top= (e.progress * (1590 + top * 0.9  )); // Adjust the factor as per your preference

        image5.style.right = `${right}px`;
        image5.style.top = `${top}px`;
    }
    else{
        cube_angle -= (e.progress*4.99);
        image5.style.transform = `rotate(${cube_angle}deg)`;
        var right = (e.progress + (683 * e.progress)); 
        var top = 1490 + (e.progress * 190);
        image5.style.right = `${right}px`;
        image5.style.top = `${top}px`;
    }
})
.addTo(controller);






//------------------------------------ cube 6 (right) ------------------------------------------//
cube_angle = 0;
var scene6 = new ScrollMagic.Scene({
    triggerElement: image6, // Trigger the scene when the image comes into view
    triggerHook: 1, // Trigger the scene when the top of the image reaches the top of the viewport
    duration: '150%' ,// Duration of the scene
    reverse : true 
})
.on('progress' , (e) =>{
    if(e.progress >= 0.78100000){
        cube_angle += (e.progress*7.95);
        image6.style.transform = `rotate(${cube_angle}deg)`;

        right = (e.progress * right) - (31 * e.progress) ; // Adjust the factor as per your preference
        top= (e.progress * (1500 + top * 0.9  )); // Adjust the factor as per your preference

        image6.style.right = `${right}px`;
        image6.style.top = `${top}px`;
    }
    else{
        cube_angle -= (e.progress*7.99);
        image6.style.transform = `rotate(${cube_angle}deg)`;
        var right = (e.progress + (683 * e.progress)); 
        var top = 1090 + (e.progress * 190);
        image6.style.right = `${right}px`;
        image6.style.top = `${top}px`;
    }
})
.addTo(controller);






//------------------------------------ cube 6 (right) ------------------------------------------//
cube_angle = 0;
var scene7 = new ScrollMagic.Scene({
    triggerElement: image7, // Trigger the scene when the image comes into view
    triggerHook: 1, // Trigger the scene when the top of the image reaches the top of the viewport
    duration: '210%' ,// Duration of the scene
    reverse : true 
})
.on('progress' , (e) =>{
    if(e.progress >= 0.78100000){
        cube_angle += (e.progress*9.85);
        image7.style.transform = `rotate(${cube_angle}deg)`;

        right = (e.progress * right) - (30 * e.progress) ; // Adjust the factor as per your preference
        top= (e.progress * (1500 + top * 0.9  )); // Adjust the factor as per your preference

        image7.style.right = `${right}px`;
        image7.style.top = `${top}px`;
    }
    else{
        cube_angle -= (e.progress*9.99);
        image7.style.transform = `rotate(${cube_angle}deg)`;
        var right = (e.progress + (483 * e.progress)); 
        var top = 730 + (e.progress * 230);
        image7.style.right = `${right}px`;
        image7.style.top = `${top}px`;
    }
})
.addTo(controller);





// --------------       ice cubes to be downloaded at any cost -------------------    //
// https://pngtree.com/freepng/transparent-ice-cubes_5611265.html
// https://pngtree.com/freepng/transparent-ice-cubes-and-fresh-ice-crystals_5746096.html