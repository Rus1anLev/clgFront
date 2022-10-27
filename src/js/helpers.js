import * as bodyScrollLock from 'body-scroll-lock';

let vars = {};

vars.path = "/"

vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.isMobile = () => innerWidth < 1008;
vars.isIE = () => vars.$html.hasClass('is-browser-ie');
vars.isIOS = () => vars.$html.hasClass('is-os-ios');
vars.winWidth = window.innerWidth;
vars.ymapMapPin = {
	iconLayout: 'default#image',
	iconImageHref: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9InBhdGgtMS1vdXRzaWRlLTFfNzIzXzM1NjI2IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI1IiB5PSIzIiB3aWR0aD0iMzgiIGhlaWdodD0iNDMiIGZpbGw9ImJsYWNrIj4KPHJlY3QgZmlsbD0id2hpdGUiIHg9IjUiIHk9IjMiIHdpZHRoPSIzOCIgaGVpZ2h0PSI0MyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0LjM4OTcgNDQuMDA4M0MyNy4wMTM3IDQyLjc1NzcgNDIgMzUuMDI2NyA0MiAyMS41ODI1QzQyIDExLjg3MiAzMy45NDExIDQgMjQgNEMxNC4wNTg5IDQgNiAxMS44NzIgNiAyMS41ODI1QzYgMzUuMDI2NyAyMC45ODYzIDQyLjc1NzcgMjMuNjEwMyA0NC4wMDgzQzIzLjg2MiA0NC4xMjgyIDI0LjEzOCA0NC4xMjgyIDI0LjM4OTcgNDQuMDA4M1pNMjMuOTk5NyAyOS4yNjQ1QzI4LjI2MDIgMjkuMjY0NSAzMS43MTQgMjUuODcxMiAzMS43MTQgMjEuNjg1M0MzMS43MTQgMTcuNDk5MyAyOC4yNjAyIDE0LjEwNiAyMy45OTk3IDE0LjEwNkMxOS43MzkyIDE0LjEwNiAxNi4yODU0IDE3LjQ5OTMgMTYuMjg1NCAyMS42ODUzQzE2LjI4NTQgMjUuODcxMiAxOS43MzkyIDI5LjI2NDUgMjMuOTk5NyAyOS4yNjQ1WiIvPgo8L21hc2s+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjQuMzg5NyA0NC4wMDgzQzI3LjAxMzcgNDIuNzU3NyA0MiAzNS4wMjY3IDQyIDIxLjU4MjVDNDIgMTEuODcyIDMzLjk0MTEgNCAyNCA0QzE0LjA1ODkgNCA2IDExLjg3MiA2IDIxLjU4MjVDNiAzNS4wMjY3IDIwLjk4NjMgNDIuNzU3NyAyMy42MTAzIDQ0LjAwODNDMjMuODYyIDQ0LjEyODIgMjQuMTM4IDQ0LjEyODIgMjQuMzg5NyA0NC4wMDgzWk0yMy45OTk3IDI5LjI2NDVDMjguMjYwMiAyOS4yNjQ1IDMxLjcxNCAyNS44NzEyIDMxLjcxNCAyMS42ODUzQzMxLjcxNCAxNy40OTkzIDI4LjI2MDIgMTQuMTA2IDIzLjk5OTcgMTQuMTA2QzE5LjczOTIgMTQuMTA2IDE2LjI4NTQgMTcuNDk5MyAxNi4yODU0IDIxLjY4NTNDMTYuMjg1NCAyNS44NzEyIDE5LjczOTIgMjkuMjY0NSAyMy45OTk3IDI5LjI2NDVaIiBmaWxsPSIjNzM2MDM1Ii8+CjxwYXRoIGQ9Ik0yNC4zODk3IDQ0LjAwODNMMjQuODE5OSA0NC45MTFMMjQuODIgNDQuOTExTDI0LjM4OTcgNDQuMDA4M1pNMjMuNjEwMyA0NC4wMDgzTDI0LjA0MDUgNDMuMTA1NUwyNC4wNDA1IDQzLjEwNTVMMjMuNjEwMyA0NC4wMDgzWk00MSAyMS41ODI1QzQxIDI3LjkwODggMzcuNDc1MyAzMi45NTU5IDMzLjQ5OTggMzYuNjMzOUMyOS41MzA4IDQwLjMwNTkgMjUuMjI5OSA0Mi41MDAxIDIzLjk1OTUgNDMuMTA1NUwyNC44MiA0NC45MTFDMjYuMTczNiA0NC4yNjU4IDMwLjY3NzggNDEuOTY5MyAzNC44NTggMzguMTAyQzM5LjAzMTUgMzQuMjQwOSA0MyAyOC43MDA0IDQzIDIxLjU4MjVINDFaTTI0IDVDMzMuNDExMSA1IDQxIDEyLjQ0NjIgNDEgMjEuNTgyNUg0M0M0MyAxMS4yOTc3IDM0LjQ3MTIgMyAyNCAzVjVaTTcgMjEuNTgyNUM3IDEyLjQ0NjIgMTQuNTg4OSA1IDI0IDVWM0MxMy41Mjg4IDMgNSAxMS4yOTc3IDUgMjEuNTgyNUg3Wk0yNC4wNDA1IDQzLjEwNTVDMjIuNzcwMSA0Mi41MDAxIDE4LjQ2OTIgNDAuMzA1OSAxNC41MDAyIDM2LjYzMzlDMTAuNTI0NyAzMi45NTU5IDcgMjcuOTA4OCA3IDIxLjU4MjVINUM1IDI4LjcwMDQgOC45Njg0OSAzNC4yNDA5IDEzLjE0MiAzOC4xMDJDMTcuMzIyMiA0MS45NjkzIDIxLjgyNjQgNDQuMjY1OCAyMy4xOCA0NC45MTFMMjQuMDQwNSA0My4xMDU1Wk0yMy45NTk1IDQzLjEwNTVDMjMuOTYzNSA0My4xMDM2IDIzLjk3ODEgNDMuMDk4MiAyNCA0My4wOTgyQzI0LjAyMTkgNDMuMDk4MiAyNC4wMzY1IDQzLjEwMzYgMjQuMDQwNSA0My4xMDU1TDIzLjE4IDQ0LjkxMUMyMy43MDM5IDQ1LjE2MDYgMjQuMjk2MSA0NS4xNjA2IDI0LjgxOTkgNDQuOTExTDIzLjk1OTUgNDMuMTA1NVpNMzAuNzE0IDIxLjY4NTNDMzAuNzE0IDI1LjMwMjMgMjcuNzI0NiAyOC4yNjQ1IDIzLjk5OTcgMjguMjY0NVYzMC4yNjQ1QzI4Ljc5NTcgMzAuMjY0NSAzMi43MTQgMjYuNDQgMzIuNzE0IDIxLjY4NTNIMzAuNzE0Wk0yMy45OTk3IDE1LjEwNkMyNy43MjQ2IDE1LjEwNiAzMC43MTQgMTguMDY4MiAzMC43MTQgMjEuNjg1M0gzMi43MTRDMzIuNzE0IDE2LjkzMDUgMjguNzk1NyAxMy4xMDYgMjMuOTk5NyAxMy4xMDZWMTUuMTA2Wk0xNy4yODU0IDIxLjY4NTNDMTcuMjg1NCAxOC4wNjgyIDIwLjI3NDggMTUuMTA2IDIzLjk5OTcgMTUuMTA2VjEzLjEwNkMxOS4yMDM2IDEzLjEwNiAxNS4yODU0IDE2LjkzMDUgMTUuMjg1NCAyMS42ODUzSDE3LjI4NTRaTTIzLjk5OTcgMjguMjY0NUMyMC4yNzQ4IDI4LjI2NDUgMTcuMjg1NCAyNS4zMDIzIDE3LjI4NTQgMjEuNjg1M0gxNS4yODU0QzE1LjI4NTQgMjYuNDQgMTkuMjAzNiAzMC4yNjQ1IDIzLjk5OTcgMzAuMjY0NVYyOC4yNjQ1WiIgZmlsbD0id2hpdGUiIG1hc2s9InVybCgjcGF0aC0xLW91dHNpZGUtMV83MjNfMzU2MjYpIi8+Cjwvc3ZnPgo=',
	iconImageSize: [48, 48],
	iconImageOffset: [-24, -48],
};

/**
* Очистить текст от спецсимволов
* @param {string} text Обязательное, строка для очистки
* @returns {string} Очищенная строка
*/
vars.clearText = (text) => {
	return text.trim().replace(/\s+/g, ' ');
};

/**
* Создать куки запись
* @param {string} name Обязательное, название записи
* @param {string} value Обязательное, значение записи
* @param {string} days Обязательное, время для жизни
*/
vars.setCookie = (name, value, days) => {
	let expires = '';

	if (days) {
		let date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = `; expires=${date.toUTCString()}`;
	}

	document.cookie = `${name}=${value || ''}${expires}; path=/`;
};

window.setCookie = vars.setCookie

/**
* Получить куки запись
* @param {string} name Обязательное, название записи
*/
vars.getCookie = (name) => {
	let nameEQ = `${name}=`;
	let ca = document.cookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];

		while (c.charAt(0) === ' ') {
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}

	return null;
};

window.getCookie = vars.getCookie

/**
* Удалить куки запись
* @param {string} name Обязательное, название записи
*/
vars.eraseCookie = (name) => {
	document.cookie = `${name}=; Max-Age=-99999999;`;
};

let dataScrollLocks;
/**
* Блокирует скролл страницы
* Необходим для использования модальных окон
* @param {boolean} state Обязательное
* @param {string} element Обязательное, элемент которому нужно разрешить скролл
* @param {string} name Необязательное, ключ,
* чтобы была возможность открывать окно поверх другого окна
*/
vars.lockScroll = (state, $element, name) => {
	const element = $element.get(0) ? $element.get(0) : $element;

	if (typeof dataScrollLocks === 'undefined') {
		dataScrollLocks = new Set();
	}

	let scrollLocks = dataScrollLocks;

	if (state) {
		if (typeof name === 'string') {
			scrollLocks.add(name);
		}

		bodyScrollLock.disableBodyScroll(element, {
			reserveScrollBarGap: true,
		});

		setImmediate(() => {
			vars.$html.addClass('is-lock-scroll');
		});
	} else {
		if (typeof name === 'string') {
			scrollLocks.delete(name);
		}

		bodyScrollLock.enableBodyScroll(element);

		if (!scrollLocks.size) {
			bodyScrollLock.clearAllBodyScrollLocks();

			vars.$html.removeClass('is-lock-scroll');
		}
	}
};

/**
* Скролл до элемента
* @param {string} $container Обязательное, элемент к которому нужно скроллить
* @param {string|number} time Необязательное, время скролла
* @param {string|number} offset Необязательное, смещение скролла может быть + или -
*/
vars.scrollTo = ($container, time = 500, offset = 0) => {
	vars.$html.css('scroll-behavior', 'initial');
	$('html, body').stop().animate({
		scrollTop: `${$container.offset().top + parseInt(offset, 10)}`,
	}, parseInt(time, 10));

	setTimeout(() => {
		vars.$html.css('scroll-behavior', '');
	}, parseInt(time, 10) + 100);
};

let scrollDiv;

/**
* Получить размер скроллбара если он есть
* @returns {number} размер скроллбара
*/
vars.getScrollbarWidth = () => {
	const width = window.innerWidth - vars.$html.get(0).clientWidth;

	if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
		return width;
	}

	// Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it
	if (!scrollDiv) {
		scrollDiv = document.createElement('div');
		scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
		document.body.appendChild(scrollDiv);
	}

	return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

/**
* Узнать есть доступен ли ховер
* @returns {boolean}
*/
function hasHoverSupport() {
	let hoverSupport;

	if (vars.isIE && vars.getScrollbarWidth()) {
		// On touch devices scrollbar width is usually 0
		hoverSupport = true;
	} else if (vars.isMobile()) {
		hoverSupport = false;
	} else if (window.matchMedia('(any-hover: hover)').matches || window.matchMedia('(hover: hover)').matches) {
		hoverSupport = true;
	} else if (window.matchMedia('(hover: none)').matches) {
		hoverSupport = false;
	} else {
		hoverSupport = typeof vars.$html.ontouchstart === 'undefined';
	}

	return hoverSupport;
}

if (!hasHoverSupport()) {
	vars.$html.removeClass('has-hover').addClass('no-hover');
} else {
	vars.$html.removeClass('no-hover').addClass('has-hover');
}

/**
* Переопределение доступности ховера
*/
function resize() {
	setTimeout(() => {
		if (vars.winWidth !== window.innerWidth) {
			if (!hasHoverSupport()) {
				vars.$html.removeClass('has-hover').addClass('no-hover');
			} else {
				vars.$html.removeClass('no-hover').addClass('has-hover');
			}

			vars.winWidth = window.innerWidth;
		}
	}, 300);
}

vars.$window.on('resize', resize);

export default vars;
