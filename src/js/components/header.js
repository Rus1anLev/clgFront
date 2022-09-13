let $header = $('.header'),
	$headerBurgerBtn = $('.header-burger'),
	$burgerOpenBtn = $('.js-burger-open'),
	$burgerCloseBtn = $('.js-burger-close'),
	$burgerBg = $('.burger-bg')

function openBurgerWindow(window) {
	let targetWindow = $(`[data-burger="${window}"]`)
	targetWindow.find('.burger__window-nav').scrollTop(0)
	targetWindow.addClass('is-open')
}

function closeBurgerWindow(window) {
	if( window === 'all' ) {
		$("[data-burger]").removeClass('is-open')
	} else {
		$(`[data-burger="${window}"]`).removeClass('is-open')
	}
}

function openBurgerMenu() {
	$headerBurgerBtn.addClass('is-open')
	$header.addClass('is-open')
	openBurgerWindow('main')
	setTimeout(function () {
		$burgerBg.fadeIn(100)
	}, 400)
}

function closeBurgerMenu() {
	$burgerBg.fadeOut(400)
	$headerBurgerBtn.removeClass('is-open')
	$header.removeClass('is-open')
	closeBurgerWindow('all')
}

function handlerBurgerButton() {
	if ($headerBurgerBtn.hasClass('is-open')) {
		closeBurgerMenu()
	} else {
		openBurgerMenu()
	}
}

function handlerBurgerOpen() {
	let target = $(this).data('open-burger')
	openBurgerWindow(target)
}
function handlerBurgerClose() {
	let target = $(this).data('close-burger')
	closeBurgerWindow(target)
}

function initBurger() {
	$headerBurgerBtn.on('click', handlerBurgerButton)
	$burgerBg.on('click', closeBurgerMenu)
	$burgerOpenBtn.on('click', handlerBurgerOpen)
	$burgerCloseBtn.on('click', handlerBurgerClose)
}

function destroyBurger() {
	$headerBurgerBtn.off('click', handlerBurgerButton)
	$burgerBg.off('click', closeBurgerMenu)
	$burgerOpenBtn.off('click', handlerBurgerOpen)
	$burgerCloseBtn.off('click', handlerBurgerClose)
	closeBurgerMenu()
	closeBurgerWindow('all')
}

function init() {
	initBurger()
}

function destroy() {
	destroyBurger()
}

export default {
	init,
	destroy
};
