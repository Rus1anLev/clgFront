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
	$burgerBg.fadeIn(400)
	$headerBurgerBtn.addClass('is-open')
	$header.addClass('is-open')
	openBurgerWindow('main')
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

let $megaMenuItem = $('.js-mega-menu-item'),
	$megaMenuWindow = $('.mega-menu__window')

function MegaMenuClose() {
	$header.removeClass('is-open')
	$megaMenuItem.removeClass('is-open')
	$megaMenuWindow.removeClass('is-open')
}

function MegaMenuOpen() {
	let $btn = $(this),
		target = $btn.data('mega-menu-dropdown')
	$header.addClass('is-open')
	$btn.addClass('is-open')
	$(`[data-mega-menu-dropdown="${target}"]`).addClass('is-open')
}

function initMegaMenu() {
	$megaMenuItem.on('mouseenter', MegaMenuOpen)
	$megaMenuItem.on('mouseleave', MegaMenuClose)
	$megaMenuWindow.on('mouseenter', MegaMenuOpen)
	$megaMenuWindow.on('mouseleave', MegaMenuClose)
}

function destroyMegaMenu() {
	$megaMenuItem.off('mouseenter', MegaMenuOpen)
	$megaMenuItem.off('mouseleave', MegaMenuClose)
	$megaMenuWindow.off('mouseenter', MegaMenuOpen)
	$megaMenuWindow.off('mouseleave', MegaMenuClose)
	$("[data-mega-menu-dropdown]").removeClass('is-open')
}

function init() {
	initBurger()
	initMegaMenu()
}

function destroy() {
	destroyBurger()
	destroyMegaMenu()
}

export default {
	init,
	destroy
};
