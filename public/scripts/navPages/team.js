const 	wendyInfo = document.querySelector('#wendy-info'),
		moiraInfo = document.querySelector('#moira-info'),
		erikaInfo = document.querySelector('#erika-info'),
		brandonInfo = document.querySelector('#brandon-info'),
		seeMoreButton = document.querySelectorAll('.see-more');

// Store the initial height of the teammate description
const wendyHeight = wendyInfo.clientHeight,
	  erikaHeight = erikaInfo.clientHeight,
	  moiraHeight = moiraInfo.clientHeight,
	  brandonHeight = brandonInfo.clientHeight;

// Store teammate ID: height as an object
	  teammateObject = {
	  	'wendy-info': {
	  		accessDOM: wendyInfo,
	  		'see-more-wendy': wendyHeight
	  	},
	  	'brandon-info': {
	  		accessDOM: brandonInfo,
	  		'see-more-brandon': brandonHeight
	  	},
	  	'erika-info': {
	  		accessDOM: erikaInfo,
	  		'see-more-erika': erikaHeight
	  	},
		'moira-info': {
			accessDOM: moiraInfo,
			'see-more-moira': moiraHeight
		}
	  };

let teamArray = [wendyInfo, brandonInfo, erikaInfo, moiraInfo];

// Add the teammate-info-content class to shrink the description height to 75px lines
for (let member of teamArray) {
	member.classList.add('teammate-info-content');
}

for (let button of seeMoreButton) {
	button.addEventListener('click', () => {
		let parentDom = button.parentElement.childNodes[3],
			thisParentId = parentDom.id,
			thisParentObj = teammateObject[thisParentId],
			seeMoreId = button.id,
			transitionMore = `${thisParentObj[seeMoreId]}px`,
			transitionLess = '75px';

		if(parentDom.clientHeight === 75){
			parentDom.style.height = transitionMore;
			
		} else {
			parentDom.style.height = transitionLess;
		}
	})
}

