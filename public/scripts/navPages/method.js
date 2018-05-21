const 	xClose = document.querySelector('.x-close'),
		buttonClose = document.querySelector('.popup-close'),
		popupBackground = document.querySelector('.popup-background'),
		popup = document.querySelector('.popup'),
		reactivityMethod = document.querySelector('#reactivity-method'),
		socializationMethod = document.querySelector('#socialization-method'),
		anxietyMethod = document.querySelector('#anxiety-method'),
		welcomeHomeMethod = document.querySelector('#welcome-home-method'),
		ageDontMethod = document.querySelector('#age-dont-method'),
		upperclassmanMethod = document.querySelector('#upperclassman-method'),
		hoomanAndMeMethod = document.querySelector('#hooman-and-me-method');

let methodNames = [
	reactivityMethod, 
	socializationMethod, 
	anxietyMethod, 
	welcomeHomeMethod, 
	ageDontMethod, 
	upperclassmanMethod, 
	hoomanAndMeMethod
];

let closeOptions = [
	xClose,
	buttonClose
];

// DISPLAY POPUP
let displayPopup = () => {
	popupBackground.style.display = 'block';
	setTimeout(() => popupBackground.style.opacity = 1, 100);
}

let closePopup = () => {
	popupBackground.style.opacity = 0;
	setTimeout(() => popup.scrollTop = 0, 200);
	setTimeout(() => popupBackground.style.display = 'none', 200)
}

// Open with method names
for (let method of methodNames) {
	method.addEventListener('click', () => {
		displayPopup();	
	})
}

// Close with X and Close button
for(let option of closeOptions) {
	option.addEventListener('click', () =>{
		closePopup();	
	})	
}



