const 	mobileButton = document.querySelector('#mobile-navigation'),
		navigation = document.querySelector('#navigation'),
		darkHide = document.querySelector('#dark-hide'),
		flash = document.querySelector('.flash');

		// Grab the navbar links
		const 	teamNav = document.querySelector('#team-nav'),
				methodNav = document.querySelector('#method-nav'),
				classesNav = document.querySelector('#classes-nav'),
				scheduleNav = document.querySelector('#schedule-nav');

		
		// Grab navigation tabs for highlighting active one
		let 	activeItem = window.location.pathname,
				navItems = [
					{
						navDOM: teamNav,
						navLocation: "/team"
					},
					{
						navDOM: methodNav,
						navLocation: "/method"
					},
					{
						navDOM: classesNav,
						navLocation: "/classes"
					},
					{
						navDOM: scheduleNav,
						navLocation: "/schedule"
					},
				];

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

	// Handle the logic for highlighting active tab
	// Remove class from all navs on reload
	for (let item of navItems){
		item.navDOM.classList.remove("selected-nav");
		
	// Highlighting the active navigation tab
		if (window.innerWidth >= 1130){
			if(activeItem === item.navLocation){
				item.navDOM.classList.add("selected-nav")
			}
		}
	}

});

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

