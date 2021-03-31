document.addEventListener('DOMContentLoaded', function () {
	let buttonMenu = document.querySelector('.icon-menu');
	let menu = document.querySelector('.main-menu');
	buttonMenu.addEventListener('click', function () {
		let spanFirst = document.getElementById('icon-menu__1');
		let spanSecond = document.getElementById('icon-menu__2');
		let spanThird = document.getElementById('icon-menu__3');

		spanSecond.classList.toggle('hidden-span');
		spanFirst.classList.toggle('rotate-span');
		spanThird.classList.toggle('opposite-span');
		menu.classList.toggle('show-menu');
	});
});
