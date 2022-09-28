let $filterParamsHead = $('.filter__params-head'),
    $filterParamsList = $('.filter__params-list--wrapper'),
    $filterParamsListPrice = $('.filter__params-list--price'),
    $filterCheckbox = $('.js-filter-checkbox'),
    $filterParamsCurrentCheckbox = $('.filter__params-current--checkbox')

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

    if ((offset.left + width) > windowWidth) {
        $list.css('right', 0)
    }

    setTimeout(function () {
        $('body').on('mousedown', handlerClickOut)
    }, 100)
}

function closeList($list, $button) {
    $list.removeClass('is-open')
    $list.slideUp(400)
    $button.removeClass('is-open')
}

function handlerList() {
    let $button = $(this).parent(),
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
        $('body').off('mousedown', handlerClickOut)
    }

}

function initPriceSlider() {

    $filterParamsListPrice.each(function () {
        let $item = $(this),
            $track = $item.find('.filter__params-list--price--track'),
            $filterPriceInput = $item.find('.js-filter-price-input'),
            $filterPriceInputMin = $item.find('.js-filter-price-input--min'),
            $filterPriceInputMax = $item.find('.js-filter-price-input--max'),
            $filterParamsCurrentPrice = $item.parents('.filter__params-item').find('.filter__params-current--price'),
            $filterParamsCurrentPriceLabel = $filterParamsCurrentPrice.find('.filter__params-current--label')

        $track.slider({
            range: true,
            min: $track.data('min'),
            max: $track.data('max'),
            values: [$track.data('min'), $track.data('max')],
            slide: function (event, ui) {
                $filterPriceInputMin.val(ui.values[0]);
                $filterPriceInputMax.val(ui.values[1]);
                checkPriceCurrent()
            }
        })

        $filterPriceInput.keyup(function () {
            this.style.width = ((this.value.length + 1) * 8) + 'px';
            $track.slider("option", "values", [$filterPriceInputMin.val(), $filterPriceInputMax.val()])
            checkPriceCurrent()
        })

        function removePriceCurrent() {
            $filterPriceInputMin.val($track.data('min'))
            $filterPriceInputMax.val($track.data('max'))
            $track.slider("option", "values", [$track.data('min'), $track.data('max')])
            $filterParamsCurrentPrice.removeClass('is-active')
            $filterParamsCurrentPriceLabel.text('')
        }

        function addPriceCurrent(currentText) {
            $filterParamsCurrentPriceLabel.text(currentText)
            $filterParamsCurrentPrice.addClass('is-active')
        }

        function checkPriceCurrent() {
            if (+$filterPriceInputMin.val() === +$track.data('min') && (+$filterPriceInputMax.val() === +$track.data('max'))) {
                removePriceCurrent()
            } else {
                let currentPriceString = ''

                if ( +$filterPriceInputMin.val() !== +$track.data('min') ) {
                    currentPriceString += `от ${$filterPriceInputMin.val()} `
                }

                if ( +$filterPriceInputMax.val() !== +$track.data('max') ) {
                    currentPriceString += `до ${$filterPriceInputMax.val()} `
                }
                addPriceCurrent(currentPriceString)
            }

        }

        $filterParamsCurrentPrice.on('click', function () {
            removePriceCurrent()
        })
    })
}

function setCurrentParams(countCurrentParams, $filterParamsCurrentCheckbox) {
    let $label = $filterParamsCurrentCheckbox.find('.filter__params-current--label');
    if (countCurrentParams) {
        $filterParamsCurrentCheckbox.addClass('is-active')
        $label.text(countCurrentParams)
    } else {
        $filterParamsCurrentCheckbox.removeClass('is-active')
        $label.text('')
    }
}

function getCountCurrentParams($item) {
    return $item.find('.js-filter-checkbox:checked').length
}

function handlerCheckbox() {
    let $checkbox = $(this),
        $item = $checkbox.parents('.filter__params-item'),
        countCurrentParams = getCountCurrentParams($item),
        $filterParamsCurrentCheckbox = $item.find('.filter__params-current--checkbox')

    setCurrentParams(countCurrentParams, $filterParamsCurrentCheckbox)
}

function removeAllItem($item) {
    let $checkboxes = $item.find('.js-filter-checkbox:checked')

    $checkboxes.each(function () {
        this.checked = false
    })
}

function handlerCurrentParam() {
    let $currentParam = $(this),
        $item = $currentParam.parents('.filter__params-item')


    removeAllItem($item)
    setCurrentParams(0, $currentParam)
    closeAll()
}

function initFilter() {
    $filterParamsHead.on('click', '.filter__params-name', handlerList)
    $filterCheckbox.on('change', handlerCheckbox)
    $filterParamsCurrentCheckbox.on('click', handlerCurrentParam)
    initPriceSlider()
}

export {
    initFilter
}