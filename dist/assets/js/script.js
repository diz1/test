//   Должен был быть скрипт для поиска селектов на странице и добавлению им своей стрелочки
//  По факту просто добавляет стиль элементу

function setAppearance () {
	var input = document.querySelectorAll('.form__input');
	for (var i = 0; i < input.length; i++) {
		for (var j = 0; j < input[i].classList.length; j++) {
			if (input[i].classList.item(j) == 'removeAppearance') {
				input[i].style.webkitAppearance = 'none';
			}
		}
	}
}

setAppearance(); // убирает стандартную стрелочку у селектов

setOutline();

function setOutline () {
	var input = document.querySelectorAll('.form__input');
	console.log(input);
	for (i = 0; i < input.length; i++) {
		if (input[i].type == 'radio') {
			input[i].addEventListener('click', function (e) {
				// while (e.target.checked && this.parentNode.style.borderBottom == '') {
				// 	this.parentNode.style.borderBottom = '1px solid #5A61ED';
				// }
				switch (this.parentNode.style.borderBottom == '') {
					case true:
						this.parentNode.style.borderBottom = '1px solid #5A61ED';
						console.log(1)
						break
					case false:
						this.parentNode.style.borderBottom = '';
						console.log(2)
						break
					default:
						this.parentNode.style.borderBottom = '1px solid #5A61ED';
						console.log(3)
				}
			});
		}
	}
}