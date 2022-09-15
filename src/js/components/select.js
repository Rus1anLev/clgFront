import 'select2';

$(function () {
    const $selectEl = $('.select')
    if ($selectEl.length) {
        $selectEl.each(function() {
            let placeholder = $(this).attr('placeholder'),
                field = $(this)
            field.select2({
                placeholder,
                minimumResultsForSearch: -1,
                width: '100%',
                templateSelection: function (state) {
                    if (!state.id) {
                        return state.text;
                    }

                    return $(
                        `
                            <div class="select2-selection__placeholder select2-selection__placeholder-top">${placeholder}</div>
                            <div class="select2-selection__rendered-value">${state.text}</div>
                        `
                    );
                }
            });
        });
        $('.select2-selection__arrow').find('b').append(
            `<svg><use xlink:href="/images/sprites.svg#arrow-down"></use></svg>`
        )
    }
})