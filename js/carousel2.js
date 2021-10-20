
// second
const gap2 = 16;

const carousel2 = document.getElementById("carousel2"),
  content2 = document.getElementById("content2"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2");

next2.addEventListener("click", e => {
  carousel2.scrollBy(width2 + gap2, 0);
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width2 + gap2), 0);
  if (carousel2.scrollLeft - width2 - gap2 <= 0) {
    prev2.style.display = "none";
  }
  if (!content.scrollWidth - width2 - gap2 <= carousel2.scrollLeft + width2) {
    next2.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth;
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth));
