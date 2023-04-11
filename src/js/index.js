// Popup
let popup = document.querySelector('.popup-nav');
let openPopupButton = document.getElementById('popup-nav_open');
let closePopupButton = document.getElementById('popup-nav_close');
let darknes = document.getElementById('darkness');

// Offers
let offer = document.getElementById('offers-img');

// Popup events
openPopupButton.addEventListener('click', () => {
  popup.classList.add('popup-nav_active')
})

closePopupButton.addEventListener('click', () => {
  popup.classList.remove('popup-nav_active')
})

// Smooth links
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    popup.classList.remove('popup-nav_active')
  });
};

// Scroll anim
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0], rootMargin: '190px', };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

document.addEventListener("DOMContentLoaded", () => {
  darkness.classList.add('darkness_none')
})
