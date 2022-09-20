let $filterParamsHead = $('.filter__params-head'),
    $filterParamsList = $('.filter__params-list')

function closeAll() {
    $filterParamsHead.removeClass('is-open')
    $filterParamsList.slideUp(400)
}

function openList($list, $button) {
    closeAll()
    $list.addClass('is-open')
    $list.slideDown(400)
    $button.addClass('is-open')
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
        $list = $button.siblings('.filter__params-list')

    if ($button.hasClass('is-open')) {
        closeList($list, $button)
    } else {
        openList($list, $button)
    }
}

function handlerClickOut(e) {
    let $container = $('.filter__params-list.is-open').parent()
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