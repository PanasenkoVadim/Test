let slideIndex = 1;
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("hero-slider-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
setInterval(() => {
  plusSlides(1);
}, 10000);
function currentSlide(n) {
  showSlides((slideIndex = n));
}
