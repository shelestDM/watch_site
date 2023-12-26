let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");
let slides = document.querySelectorAll(".slide");

let count = 0;

left.addEventListener("click", () => {
  count++;
  MoveSlides(count);
  console.log('lef');
});

right.addEventListener("click", () => {
  count--;
  MoveSlides(count);
  console.log('right');
});


function MoveSlides(iterator) {
  if (iterator === slides.length-1) {
    count = 0;
  } else if (iterator < 0) {
    count = slides.length - 2;
  }
  TranslateSlides();
}

function TranslateSlides() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(calc( ${-count * 100}%))`;
  });
}


