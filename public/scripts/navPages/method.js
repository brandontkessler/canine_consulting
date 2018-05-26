const 	xClose = document.querySelector('.x-close'),
		buttonClose = document.querySelector('.popup-close');

const	popupBackground = document.querySelector('.popup-background'),
		popup = document.querySelector('.popup');

const	reactivityMethod = document.querySelector('#reactivity-method'),
		socializationMethod = document.querySelector('#socialization-method'),
		anxietyMethod = document.querySelector('#anxiety-method'),
		welcomeHomeMethod = document.querySelector('#welcome-home-method'),
		ageDontMethod = document.querySelector('#age-dont-method'),
		upperclassmanMethod = document.querySelector('#upperclassman-method'),
		hoomanAndMeMethod = document.querySelector('#hooman-and-me-method'),
		behaviorButton = document.querySelector('#behavior-button'),
		obedienceButton = document.querySelector('#obedience-button');

const 	reactivityContent = document.querySelector('#reactivity-popup-content'),
		socializationContent = document.querySelector('#socialization-popup-content'),
		anxietyContent = document.querySelector('#anxiety-popup-content'),
		welcomeHomeContent = document.querySelector('#welcome-home-popup-content'),
		ageDontContent = document.querySelector('#age-dont-popup-content'),
		upperclassmanContent = document.querySelector('#upperclassman-popup-content'),
		hoomanAndMeContent = document.querySelector('#hooman-and-me-popup-content'),
		behaviorContent = document.querySelector('#behavior-popup-content'),
		obedienceContent = document.querySelector('#obedience-popup-content');

let methods = [
	{
		button: reactivityMethod,
		content: reactivityContent
	},
	{
		button: socializationMethod,
		content: socializationContent
	},
	{
		button: anxietyMethod,
		content: anxietyContent
	},
	{
		button: welcomeHomeMethod,
		content: welcomeHomeContent
	},
	{
		button: ageDontMethod,
		content: ageDontContent
	},
	{
		button: upperclassmanMethod,
		content: upperclassmanContent
	},
	{
		button: hoomanAndMeMethod,
		content: hoomanAndMeContent
	},
	{
		button: obedienceButton,
		content: obedienceContent
	},
	{
		button: behaviorButton,
		content: behaviorContent
	},

];

let closeOptions = [
	xClose,
	buttonClose
];

// DISPLAY POPUP FUNCTIONS
let displayPopup = () => {
	popupBackground.style.display = 'block';
	setTimeout(() => popupBackground.style.opacity = 1, 100);
}

let closePopup = () => {
	popupBackground.style.opacity = 0;
	setTimeout(() => popup.scrollTop = 0, 200);
	setTimeout(() => popupBackground.style.display = 'none', 200)
	setTimeout(() => {
		for(let method of methods) {
			method.content.style.display = "none"
		}
	}, 199)
}

// Open with method names
for (let method of methods) {
	method.button.addEventListener('click', () => {
		method.content.style.display = "block"
		displayPopup();	
	})
}

// Close with X and Close button
for(let option of closeOptions) {
	option.addEventListener('click', () =>{
		closePopup();	
	})	
}



