// BUTTONS
const	progressBtn = document.querySelector('#progress-button'),
		homeworkBtn = document.querySelector('#homework-button'),
		nextLessonBtn = document.querySelector('#next-lesson-button'),
		evaluationsBtn = document.querySelector('#evaluations-button'),
		vaccinationsBtn = document.querySelector('#vaccinations-button');

// CONTENT
const	progressContent = document.querySelector('#progress-content'),
		homeworkContent = document.querySelector('#homework-content'),
		nextLessonContent = document.querySelector('#next-lesson-content'),
		evaluationsContent = document.querySelector('#evaluations-content'),
		vaccinationsContent = document.querySelector('#vaccinations-content');

// ARRAY OF EVERYTHING
const 	profileStuff = [
			{
				button: progressBtn,
				content: progressContent
			},
			{
				button: homeworkBtn,
				content: homeworkContent
			},
			{
				button: nextLessonBtn,
				content: nextLessonContent
			},
			{
				button: evaluationsBtn,
				content: evaluationsContent
			},
			{
				button: vaccinationsBtn,
				content: vaccinationsContent
			}
		]

// CURRENT USER ID
const 	userId = document.querySelector('#user-id').innerText;

// GRAB ADMIN EDIT STUFF
const	adminEditBtn = document.querySelector('#admin-edit-btn'),
		adminSaveBtn = document.querySelector('#admin-save-btn'),
		adminCancelBtn = document.querySelector('#admin-cancel-btn'),
		adminDirections = document.querySelector('#admin-directions'),
		textAreas = document.querySelectorAll('.dropdown-message');

// CODE
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
			btn.childNodes[1].childNodes[3].classList.remove("blink");

			let idToStringArray = btn.id.split('-');
			idToStringArray.splice(idToStringArray.length-1, 1)

			if(idToStringArray.length > 1){
				idToStringArray[1] = idToStringArray[1].charAt(0).toUpperCase() + idToStringArray[1].slice(1, idToStringArray[1].length);
			}

			let blinkerKey = idToStringArray.join(''),
				url = `/profile/${userId}/${blinkerKey}`;

			fetch(url, {
				method: 'POST'
			})
			.then((res) => {
				console.log(res)
			})
			
		} else {
			setTimeout(() => btn.classList.remove('dropped-down-title'), 500)
		}
		content.style.height = (content.style.height === '0px') ? '228px' : '0px';

	});
}

// *********************** ADMIN EDIT ******************************
if(adminEditBtn){
	adminEditBtn.addEventListener('click', () => {

		adminEditBtn.style.display = "none";
		adminSaveBtn.style.display = "inline-block";
		adminCancelBtn.style.display = "inline-block";
		adminDirections.style.display = "block";

		for (let textArea of textAreas){
			textArea.disabled = false;
		}
	});
}

if(adminCancelBtn){
	adminCancelBtn.addEventListener('click', () => {

		adminEditBtn.style.display = "block";
		adminSaveBtn.style.display = "none";
		adminCancelBtn.style.display = "none";
		adminDirections.style.display = "none";

		for (let textArea of textAreas){
			textArea.disabled = true;
		}

	});
}
