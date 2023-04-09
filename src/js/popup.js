let popup = document.querySelector('.popup-nav');
let openPopupButton = document.getElementById('popup-nav_open');
let closePopupButton = document.getElementById('popup-nav_close'); 

openPopupButton.addEventListener('click', () => {
	popup.classList.add('popup-nav_active')
})

closePopupButton.addEventListener('click', () => {
	popup.classList.remove('popup-nav_active')
})