/* Small progressive enhancements for the navigation and newsletter form. */
(function () {
	'use strict';

	var menuButton = document.querySelector('.menu-toggle');
	var navigation = document.querySelector('.main-navigation');

	if (menuButton && navigation) {
		menuButton.addEventListener('click', function () {
			var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
			menuButton.setAttribute('aria-expanded', String(!isOpen));
			navigation.classList.toggle('is-open', !isOpen);
		});

		navigation.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				menuButton.setAttribute('aria-expanded', 'false');
				navigation.classList.remove('is-open');
			});
		});
	}

	var newsletterForm = document.querySelector('.newsletter-form');
	var formMessage = document.querySelector('.form-message');
	if (newsletterForm && formMessage) {
		newsletterForm.addEventListener('submit', function (event) {
			event.preventDefault();
			var emailField = newsletterForm.querySelector('input[type="email"]');
			if (emailField && emailField.checkValidity()) {
				formMessage.textContent = 'Thank you for subscribing!';
				newsletterForm.reset();
			}
		});
	}
}());
