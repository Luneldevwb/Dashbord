const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for(let i = 0; i < radioButtons.length; i++){
	radioButtons[i].addEventListener('click', Event => {
		if (document.getElementById('dark').checked) {
			(document.querySelector('body').classList = 'dark');
		} 
		else {document.querySelector('body').classList = 'light';}
	});

}
