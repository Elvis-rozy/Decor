const btnHamburger =  document.querySelector("#btnHamburger");
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener("click", function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //Close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
          element.classList.remove('fade-in');
          element.classList.add('fade-out');
        })
    }
    else { //Open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
          element.classList.remove('fade-out');
          element.classList.add('fade-in');
        })
    }
});

var carouselIndex = 0;
var carouselImages = document.querySelectorAll('.hero__image');
function rotateCarousel() {
	carouselImages[carouselIndex].style.display = 'none';
	carouselIndex = (carouselIndex + 1) % carouselImages.length;
	carouselImages[carouselIndex].style.display = 'block';
	setTimeout(rotateCarousel, 5000);//set time delay here(in millise}
}
rotateCarousel();