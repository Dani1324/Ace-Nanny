// AOS animation library
AOS.init({
  offset: 300,
  duration: 1100,
});

// Menu
$( document ).ready(function() {
  $( ".hamburger" ).on('click', function() {
      $(".menu").toggleClass("menu--open");
    });
});

// Add smooth scrolling to all links
$("a#ciao").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
      // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }
});


// Effects at scroll
const pageheight = document.body.scrollHeight;
let header = document.getElementsByClassName('.header');
let bubble1 = document.getElementById('parallax-bg-1');
let bubble2 = document.getElementById('parallax-bg-2');
let bubble3 = document.getElementById('parallax-bg-3');
let bubble4 = document.getElementById('parallax-bg-4');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  const height = document.body.scrollHeight;

  if (value < pageheight) {
    bubble1.style.top = value * 0.015 + 'vh';
    bubble2.style.top = value * 0.045 + 'vh';
    bubble3.style.top = value * 0.025 + 'vh';
    bubble4.style.top = value * 0.0605 + 'vh';
  }

  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  var iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent);

  if (width > 1025) {
    if(document.documentElement.scrollTop > 40){
      $(".header").css("background-color", "rgba(255, 255, 255, 1)");
      $(".header").css("padding", "0.7vw 10vw 0vw 10vw");
      $(".header").css("border-bottom", "0.07vw solid rgba(35, 36, 42, 0.05)");
    }
    else {
      $(".header").css("background-color", "rgba(255, 255, 255, 0)");
      $(".header").css("padding", "1.2vw 10vw 0.5vw 10vw");
      $(".header").css("border-bottom", "0vw solid rgba(35, 36, 42, 0.05)");
    }
  }
  else {
    if(document.documentElement.scrollTop > 20){
      $(".header").css("background-color", "rgba(255, 255, 255, 1)");
      $(".header").css("padding", "1.5vh 10vw 1.5vh 10vw");
      $(".header").css("border-bottom", "0.17vw solid rgba(35, 36, 42, 0.05)");
    }
    else {
      $(".header").css("background-color", "rgba(255, 255, 255, 0)");
      $(".header").css("padding", "2.5vh 10vw 2.5vh 10vw");
      $(".header").css("border-bottom", "0vw solid rgba(35, 36, 42, 0.05)");
    }
  }
})


// Language popup
$(".language-popup, .languages").hover(function(){
  $(".language-popup").css("display", "block");
}, function() {
  $(".language-popup").css("display", "none");
})
