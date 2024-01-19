document.addEventListener('DOMContentLoaded', function () {
	var hoverElements = document.querySelectorAll('.hover');

	hoverElements.forEach(function (element) {
		element.addEventListener('mouseenter', function () {
			element.classList.add('flip');
		});

		element.addEventListener('mouseleave', function () {
			element.classList.remove('flip');
		});
	});
});
