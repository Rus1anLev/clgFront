import {closeBurgerWindow, closeBurgerMenu} from "./header"

let $header = $('.header'),
    $searchbar = $('.searchbar'),
    $searchbarBtn = $('.js-searchbar-btn')

const closeSearchbar = () => {
    $header.removeClass('is-open')
    $searchbar.removeClass('is-open')
}

const openSearchbar = () => {
    $header.addClass('is-open')
    $searchbar.addClass('is-open')
}

function handlerSwitcherSearchbar() {
    closeBurgerWindow('all')
    closeBurgerMenu()

    if( $searchbar.hasClass('is-open') ) {
        closeSearchbar()
    } else {
        openSearchbar()
    }
}

function initSearchbar() {
    $searchbarBtn.on('click', handlerSwitcherSearchbar)
}

export {
    initSearchbar,
    closeSearchbar
};