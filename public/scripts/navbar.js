const 	mobileButton = document.querySelector('#mobile-navigation'),
		navigation = document.querySelector('#navigation'),
		darkHide = document.querySelector('#dark-hide'),
		flash = document.querySelector('.flash');

// Refresh window on resize
window.onresize = function(){ location.reload(); }

window.addEventListener('load', () => {

	// HANDLE FLASH TIMEOUTS
	if(flash){
		setTimeout(()=>{
			flash.style.opacity = '0';
		}, 2000)
		setTimeout(()=>{
			flash.style.display = 'none';
		}, 4000)
	}

})

// HANDLE MOBILE NAVIGATION
mobileButton.addEventListener('click', () => {
	navToggle()
})

darkHide.addEventListener('click', () => {
	if(darkHide.style.opacity === '0.7'){
		navToggle()
	} 
})

function navToggle(){
	if(navigation.style.transform === "" || navigation.style.transform === "translateX(100vw)"){
		navigation.style.transform = "translateX(0)";
		darkHide.style.opacity = '0.7';
		darkHide.style.display = 'block';
	} else {
		navigation.style.transform = "translateX(100vw)";
		darkHide.style.opacity = '0';
		setTimeout(() => {
			darkHide.style.display = 'none';
		}, 500)
	}
}

