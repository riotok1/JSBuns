var indexSlide = 1;
showSlides(indexSlide);

// Next/previous controls
function plusSlides(n) {
  showSlides(indexSlide += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(indexSlide = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("sliderItem");
  var dots = document.getElementsByClassName("bullit");
  if (n > slides.length) {indexSlide = 1}
  if (n < 1) {indexSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[indexSlide-1].style.display = "block";
  dots[indexSlide-1].className += " active";
}

/*--------------------------*/
var slideIndex = 1;
slideShow(slideIndex);

function dobSlider(n){
  slideShow(slideIndex += n);
}

function currentSlides(n){
  slideShow(slideIndex = n);
}

function slideShow (n) {
  var i;
  var mySlides = document.getElementsByClassName('mySlides');
  var dot = document.getElementsByClassName('dot');
  if(n > mySlides.length){slideIndex = 1}
  if(n < 1){slideIndex = mySlides.length}
  for(i = 0; i < mySlides.length; i++){
    mySlides[i].style.display = 'none';
  }
  for(i = 0; i < dot.length; i++){
    dot[i].className = dot[i].className.replace(" active", "");
  }
  mySlides[slideIndex - 1].style.display = 'block';
  dot[slideIndex - 1].className += " active";
}