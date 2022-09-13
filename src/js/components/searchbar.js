import {closeBurgerWindow, closeBurgerMenu} from "./header"

let $header = $('.header'),
    $searchbar = $('.searchbar'),
    $searchbarBtn = $('.js-searchbar-btn')

const closeSearchbar = () => {
    $header.removeClass('is-open')
    $searchbar.removeClass('is-open')
}

function handlerSwitcherSearchbar() {
    closeBurgerWindow('all')
    closeBurgerMenu()
    $header.toggleClass('is-open')
    $searchbar.toggleClass('is-open')
}

function initSearchbar() {
    $searchbarBtn.on('click', handlerSwitcherSearchbar)
}

export {
    initSearchbar,
    closeSearchbar
};