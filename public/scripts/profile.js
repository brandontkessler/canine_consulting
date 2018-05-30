// BUTTONS
const	progressBtn = document.querySelector('#progress-button'),
		homeworkBtn = document.querySelector('#homework-button');

// CONTENT
const	progressContent = document.querySelector('#progress-content'),
		homeworkContent = document.querySelector('#homework-content');

// ARRAY OF EVERYTHING
const 	profileStuff = [
			{
				button: progressBtn,
				content: progressContent
			},
			{
				button: homeworkBtn,
				content: homeworkContent
			}
		]

window.onload = () => {
	for(let item of profileStuff){
		item.content.style.height = '0px';
		item.content.style.display = 'block';
	}
}


for (let item of profileStuff) {
	let btn = item.button,
		content = item.content;

	item.button.addEventListener('click', () => {

		if(btn.classList.length === 1){
			btn.classList.add('dropped-down-title');
		} else {
			setTimeout(() => btn.classList.remove('dropped-down-title'), 500)
			
		}
		content.style.height = (content.style.height === '0px') ? '228px' : '0px';

	});
}

