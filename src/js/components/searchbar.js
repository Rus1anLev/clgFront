import {closeBurgerWindow, closeBurgerMenu} from "./header"

let $header = $('.header'),
    $searchbar = $('.searchbar'),
    $searchbarBtn = $('.js-searchbar-btn'),
    $searchbarInput = $('.searchbar-input')

const closeSearchbar = () => {
    $header.removeClass('is-open')
    $searchbar.removeClass('is-open')
    $(document).off('mouseup', handlerClickOutSearchbar)
}

const openSearchbar = () => {
    $(document).on('mouseup', handlerClickOutSearchbar)
    $header.addClass('is-open')
    $searchbar.addClass('is-open')
}

function handlerClickOutSearchbar(e) {
    if (
        (!$searchbarInput.is(e.target) && $searchbarInput.has(e.target).length === 0) &&
        (!$searchbarBtn.is(e.target) && $searchbarBtn.has(e.target).length === 0)
    ) {
        closeSearchbar()
    }

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