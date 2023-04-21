// function menu toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});
// end

// function slideshow
// variabel
var slideIndex = 1;
showDivs(slideIndex);
//Function
function plusDivs(n) {
  showDivs((slideIndex += n));
}
//Validation
function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName('img-slideshow');
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = 'none';
  }

  imgList[slideIndex - 1].style.display = 'block';
}
//Slide speed
setInterval(() => {
  plusDivs(1);
}, 10000);
// end
