let $accordionBtn = $('.accordion-heading')

function handlerAccordionBtn() {
    let $btn = $(this),
        $parent = $btn.parents('.accordion'),
        $siblings = $parent.find('.accordion-heading').not($btn)

    $siblings.removeClass('is-open')
    $siblings.siblings('.accordion-content').slideUp(400)

    $btn.toggleClass('is-open')
    $btn.siblings('.accordion-content').slideToggle(400)
}

function initAccordion() {
    $accordionBtn.on('click', handlerAccordionBtn)
}

export {
    initAccordion
}