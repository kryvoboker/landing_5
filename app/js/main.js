$(function () {

	$('.header__slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	});

	AOS.init();

});

// Для поиска (показать поиск)
document.querySelector('#search-icon').onclick = function () {
	this.classList.add('active');
	const searchIcons = document.querySelector('.header__icons').classList.add('active');
	const searchButton = document.querySelector('.header__search-button').classList.add('active');
	const searchInput = document.querySelector('.header__search-input').classList.add('active');
};
// Для поиска (убрать поиск при произвольном клике)
document.querySelector('#disable-fon').onclick = function () {
	const active = document.querySelectorAll('.active');
	if (active.length > 0) {
		for (let i = 0; i < active.length; i++) {
			const e = active[i];
			if (e.classList.contains('active')) {
				e.classList.remove('active');
			}
		}
	}
};
// Для поиска (убрать поиск при произвольном клике)
document.querySelector('#disable-content').onclick = function () {
	const active = document.querySelectorAll('.active');
	if (active.length > 0) {
		for (let i = 0; i < active.length; i++) {
			const e = active[i];
			if (e.classList.contains('active')) {
				e.classList.remove('active');
			}
		}
	}
};

filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	// Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

// Кнопка "Загрузить еще"
$(function loadMore() {
	var k = 6;
	document.querySelector('#loadMore').onclick = function () {
		const f = document.querySelectorAll('.projects__item--display--none');
		if (f.length != 0) {
			for (let i = 0; i < f.length; i++) {
				const element = f[i];
				if (i < k) {
					element.classList.remove('projects__item--display--none');
				}
			}
		}
		$('#loadMore').blur(); // автоматом снимаем фокус с кнопки
	};
});

window.addEventListener('DOMContentLoaded', function () {
	var videos = document.querySelectorAll('.video');
	var text = document.querySelector('.presentation__inner');
	videos.forEach(function (video) {
		video.addEventListener('click', function () {
			if (video.classList.contains('ready')) {
				return;
			}
			text.classList.add('ready');
			video.classList.add('ready');
			var resource = video.dataset.src;
			video.insertAdjacentHTML('afterbegin', '<iframe src="' + resource + '" title="YouTube video player" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>')
		});
	});

});

$(function () {

	$('.posts__slider').slick({
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		autoplay: false,
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

});


