const 	classDescription = document.querySelectorAll('.classes-description-list'),
	 	buttons = document.querySelectorAll('.classes-button'),
	 	idSelectorArray = ['#welcome-home', '#age-dont-mean-a-thing', '#upperclassman', '#hooman-and-me', '#reactivity', '#socialization', '#anxiety'],
	 	descriptionContainers = document.querySelectorAll('.classes-description-container'),
	 	closeObedience = document.querySelector('.obedience-popup-close'),
	 	closeBehavior = document.querySelector('.behavior-popup-close');

// VARIABLES FOR FORM POPUP HANDLING
const 	openPopupButton = document.querySelector("#trainer-contact"),
		cancelButton = document.querySelector(".contact-form-cancel"),
		popupForm = document.querySelector(".contact-popup-background");

// VARIABLES FOR PRICES POPUP HANDLING
const 	openPricesPopupBtn = document.querySelector("#pricing"),
		pricesPopupBackground = document.querySelector(".prices-popup-background"),
		pricesPopupClose = document.querySelector(".prices-popup-close");

// GRAB INTRO BLURB THAT HAS DIRECTIONS
const 	windowBlurb = document.querySelector('#window-size-blurb');

// HANDLE JS FOR HOVERING OVER CLASS PACKAGES
if(window.innerWidth > 816){
	for (let button of buttons){
		let thisId = extractId(button),
			thisInfo = document.querySelector(`#${thisId}`),
			liArray = thisInfo.childNodes[1].childNodes,
			thisContainer = thisInfo.parentNode;

		button.addEventListener('mouseover', () => {
			setTimeout(() => {
				buttons.forEach(oneButton => oneButton.className = 'classes-button');
				idSelectorArray.forEach(selector => document.querySelector(selector).style.display = 'none');
				descriptionContainers.forEach(container => container.style.display = 'none')
				thisContainer.style.display = 'block';
				thisInfo.style.display = 'block';
				button.className += ' selected-button';
			}, 100)
			setTimeout(addBlack(liArray), 500);
		})
	}	
}

function extractId(button){
	return button.innerText.split(' ').join('-').split("'").join('').toLowerCase()
}

function addBlack(array){
	for (let element of array){
		if(element.nodeName === 'LI'){
			element.style.color = 'black'	
		}
	}
}

// OPEN/CLOSE FORM POPUP
openPopupButton.addEventListener('click', () => popupForm.style.display = "block")

cancelButton.addEventListener('click', () => popupForm.style.display = "none")

document.querySelector('*').addEventListener('click', (e) => {
	if(e.target === popupForm){
		popupForm.style.display = "none"
	}
})

// OPEN/CLOSE PRICES POPUP
openPricesPopupBtn.addEventListener('click', () => pricesPopupBackground.style.display = "block")

pricesPopupClose.addEventListener('click', () => pricesPopupBackground.style.display = "none")

document.querySelector('*').addEventListener('click', (e) => {
	if(e.target === pricesPopupBackground){
		pricesPopupBackground.style.display = "none"
	}
})


// HANDLE MOBILE/SMALL SCREEN
if(window.innerWidth <= 816) {
	classPopups();
	contactFormPopup();
}

function classPopups(){
	windowBlurb.innerText = "Click on ";

	for(let button of buttons){
		let thisId = extractId(button),
			thisInfo = document.querySelector(`#${thisId}`),
			liArray = thisInfo.childNodes[1].childNodes,
			thisContainer = thisInfo.parentNode;
			thisBG = thisInfo.parentNode.parentNode

		button.addEventListener('click', () => {
			thisBG.classList.add('classes-popup-background')
			setTimeout(() => {
				thisContainer.style.display = 'block';
				thisInfo.style.display = 'block';
			}, 100)
		})

		// CLOSE CLASSES POPUP
		closeObedience.addEventListener('click', () => {
			thisBG.classList.remove('classes-popup-background')
			thisContainer.style.display = 'none';
			thisInfo.style.display = 'none';
		})

		closeBehavior.addEventListener('click', () => {
			thisBG.classList.remove('classes-popup-background')
			thisContainer.style.display = 'none';
			thisInfo.style.display = 'none';
		})

		document.querySelector('*').addEventListener('click', (e) => {
			if(e.target === thisBG){
				thisBG.classList.remove('classes-popup-background')
				thisContainer.style.display = 'none';
				thisInfo.style.display = 'none';
			}
		})
	}
}

