const 	classDescription = document.querySelectorAll('.classes-description-list'),
	 	buttons = document.querySelectorAll('.classes-button'),
	 	idSelectorArray = ['#welcome-home', '#age-dont-mean-a-thing', '#upperclassman', '#hooman-and-me', '#reactivity', '#socialization', '#anxiety'],
	 	descriptionContainers = document.querySelectorAll('.classes-description-container');

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