const items = document.querySelectorAll('.gallery-section__item');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__close');
const prevBtn = document.querySelector('.lightbox__prev');
const nextBtn = document.querySelector('.lightbox__next');

let currentIndex = 0;

// ustawienie indexów dla animacji
items.forEach((item, index) => {
  item.style.setProperty('--i', index);
});

// otwieranie lightboxa
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.style.display = 'flex';
  });
});

function showImage(index) {
  lightboxImage.src = items[index].dataset.full;
}

// zamykanie
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });

// przewijanie
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showImage(currentIndex);
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showImage(currentIndex);
});

// obsługa strzałek klawiatury
document.addEventListener('keydown', e => {
  if(lightbox.style.display === 'flex') {
    if(e.key === 'ArrowLeft') prevBtn.click();
    if(e.key === 'ArrowRight') nextBtn.click();
    if(e.key === 'Escape') closeBtn.click();
  }
});