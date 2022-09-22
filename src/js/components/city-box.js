let $cityBoxHead = $('.city-box-head'),
    $cityBoxList = $('.city-box__list'),
    $cityBoxHeadCurrentText = $('.city-box-head__current-text'),
    $cityBoxListRadio = $cityBoxList.find('input')


function handlerClickOut(e) {
    let $container = $('.city-box')
    if (
        !$container.is(e.target) && $container.has(e.target).length === 0
    ) {
        closeAll()
        $('body').off('mouseup', handlerClickOut)
    }
}

function closeAll() {
    $cityBoxHead.removeClass('is-open')
    $cityBoxList.slideUp(400)
}

function openList($list, $button) {
    closeAll()
    $list.slideDown(400)
    $button.addClass('is-open')
    let offset = $list.offset(),
        width = $list.width(),
        windowWidth = $(window).width()

    if ( (offset.left + width) > windowWidth ) {
        $list.css('right', 0)
    }

    setTimeout(function () {
        $('body').on('mouseup', handlerClickOut)
    }, 100)
}

function closeList($list, $button) {
    $list.slideUp(400)
    $button.removeClass('is-open')
}

function handlerCityBoxList() {
    let $button = $(this),
        $list = $button.siblings('.city-box__list')

    if ($button.hasClass('is-open')) {
        closeList($list, $button)
    } else {
        openList($list, $button)
    }
}

function handlerCityBoxSelect() {
    let text = $(this).siblings('.radio-text').text()
    $cityBoxHeadCurrentText.text(text)
}

function initCityBox() {
    $cityBoxHead.on('click', handlerCityBoxList)
    $cityBoxListRadio.on('change', handlerCityBoxSelect)
}

export {
    initCityBox
}