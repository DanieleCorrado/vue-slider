const images = [
  {
      'image': 'img/01.webp',
      'title': "Marvel\\'s Spiderman Miles Morale",
      'text': 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      'image': 'img/02.webp',
      'title': 'Ratchet & Clank: Rift Apart',
      'text': 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      'image': 'img/03.webp',
      'title': 'Fortnite',
      'text': "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      'image': 'img/04.webp',
      'title': 'Stray',
      'text': 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      'image': 'img/05.webp',
      'title': "Marvel's Avengers",
      'text': "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  }
];

let slideIndex = 1;
showSlides(slideIndex);

// Controlli immagini precedente e successivo

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controlli thumbnail

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("demo");

  let title = document.getElementById("title");

  let description = document.getElementById("description");

  if (n > slides.length) {
    slideIndex = 1

  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
  
  title.innerHTML = dots[slideIndex-1].alt;
  description.innerHTML = images[slideIndex-1].text;
}