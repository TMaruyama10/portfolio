

/* Navigation Menu */

let bar_icon = document.querySelector('.bar-icon');
var nav = document.querySelector('.nav');
var link = document.querySelector('.container-list');
var off_on = true;
var body = document.body;

bar_icon.addEventListener('click', function(){
	this.classList.toggle('active');

	if (off_on == true) {
		link.style.width = '100%';
		link.style.overflow = 'hidden';
		link.style.transition = '0.5s';
		body.style.overflow = 'hidden';

		nav.style.background = '#f1f4df';
		nav.style.transition = '0.5s';

		off_on = false;
	} else {

		off_on = true;
		link.style.width = '0%';
		link.style.overflow = 'hidden';
		link.style.transition = '0.5s';
		body.style.overflow = 'auto';

		nav.style.background = 'transparent';
		nav.style.transition = '0.5s';
	}
});