let $filterParamsHead = $('.filter__params-head'),
    $filterParamsList = $('.filter__params-list--wrapper')

function closeAll() {
    $filterParamsHead.removeClass('is-open')
    $filterParamsList.slideUp(400)
}

function openList($list, $button) {


    closeAll()
    $list.addClass('is-open')
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
    $list.removeClass('is-open')
    $list.slideUp(400)
    $button.removeClass('is-open')
}

function handlerList() {
    let $button = $(this),
        $list = $button.siblings('.filter__params-list--wrapper')

    if ($button.hasClass('is-open')) {
        closeList($list, $button)
    } else {
        openList($list, $button)
    }
}

function handlerClickOut(e) {
    let $container = $('.filter__params-list--wrapper.is-open').parent()
    if (
        !$container.is(e.target) && $container.has(e.target).length === 0
    ) {
        closeAll()
        $('body').off('mouseup', handlerClickOut)
    }

}

function initFilter() {
    $filterParamsHead.on('click', handlerList)
}

export {
    initFilter
}