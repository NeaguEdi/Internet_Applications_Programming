function showBigImage(img) {
  var bigImg = document.getElementById("bigImg");
  bigImg.src = img.src;
  var allImages = document.querySelectorAll(".gallery img");
  allImages.forEach(image => image.classList.remove("selected"));
  img.classList.add("selected");
}

function slide() {
  const bigImg = document.getElementById("bigImg");
  const thumbs = Array.from(document.querySelectorAll(".gallery img"));
  const currentIndex = thumbs.findIndex(img => img.src === bigImg.src);
  const nextIndex = (currentIndex + 1) % thumbs.length;
  bigImg.src = thumbs[nextIndex].src;

  thumbs.forEach(img => img.classList.remove("selected"));
  thumbs[nextIndex].classList.add("selected");

  console.log("next: " + nextIndex);
}

function prev() {
  const bigImg = document.getElementById("bigImg");
  const thumbs = Array.from(document.querySelectorAll(".gallery img"));
  const currentIndex = thumbs.findIndex(img => img.src === bigImg.src);
  const prevIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
  bigImg.src = thumbs[prevIndex].src;

  thumbs.forEach(img => img.classList.remove("selected"));
  thumbs[prevIndex].classList.add("selected");

  console.log("prev: " + prevIndex);
}

function updateImage() {
  const bigImg = document.getElementById("bigImg");
  const thumbs = Array.from(document.querySelectorAll(".gallery img"));
  const selected = document.querySelector(".gallery img.selected");

  if (selected) {
    bigImg.src = selected.src;
  }
}