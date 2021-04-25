/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function () {

	var bodyEl = document.body,
		content = document.querySelector('.content-wrap'),
		openbtn = document.getElementById('open-button'),
		closebtn = document.getElementById('close-button'),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener('click', toggleMenu);
		if (closebtn) {
			closebtn.addEventListener('click', toggleMenu);
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener('click', function (ev) {
			var target = ev.target;
			if (isOpen && target !== openbtn) {
				toggleMenu();
			}
		});
	}

	function toggleMenu() {
		const burgerBlock = document.querySelector('.header__burger');
		if (isOpen) {
			classie.remove(bodyEl, 'show-menu');
			classie.remove(burgerBlock, 'active-opacity');
		}
		else {
			classie.add(bodyEl, 'show-menu');
			classie.add(burgerBlock, 'active-opacity');
		}
		isOpen = !isOpen;
	}

	init();

})();