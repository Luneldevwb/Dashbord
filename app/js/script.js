const setColorMode = () => {
	localStorage.getItem('ColorMode') == 'dark' ? setDarkMode() : setLightMode();
};

const setDarkMode = () => {
	document.querySelector('body').classList = 'dark';
};

const setLightMode = () => {
	document.querySelector('body').classList = 'light';
};

setColorMode();

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for(let i = 0; i < radioButtons.length; i++){
	radioButtons[i].addEventListener('click', Event => {
		if (document.getElementById('dark').checked) {
			localStorage.setItem('colorMode', 'dark');
			setDarkMode();
		} 
		else {
			localStorage.setItem('colorMode', 'light');
			setLightMode();
		}
	});

}
