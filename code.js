// HTML/CSS Slideshow
var slideIndex = 1;
showhtmlSlides(slideIndex);

function plushtmlSlides(n) {
    showhtmlSlides(slideIndex += n);
  }

function showhtmlSlides(n) {
    var i;
    var slides = document.getElementsByClassName("htmlSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  };

// JS Slideshow
showjsSlides(slideIndex);

function plusjsSlides(n) {
    showjsSlides(slideIndex += n);
  }

function showjsSlides(n) {
    var i;
    var slides = document.getElementsByClassName("jsSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

//   Woodworking Slideshow
showwwSlides(slideIndex);

function pluswwSlides(n) {
    showwwSlides(slideIndex += n);
  }

function showwwSlides(n) {
    var i;
    var slides = document.getElementsByClassName("wwSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

// Drawing Slideshow
showdrawingSlides(slideIndex);

function plusdrawingSlides(n) {
    showdrawingSlides(slideIndex += n);
  }

function showdrawingSlides(n) {
    var i;
    var slides = document.getElementsByClassName("drawingSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

// Grounds Slideshow
showgroundsSlides(slideIndex);

function plusgroundsSlides(n) {
    showgroundsSlides(slideIndex += n);
  }

function showgroundsSlides(n) {
    var i;
    var slides = document.getElementsByClassName("groundsSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

// Sketchup Slideshow
showsketchupSlides(slideIndex);

function plussketchupSlides(n) {
    showsketchupSlides(slideIndex += n);
  }

function showsketchupSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sketchupSlide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }