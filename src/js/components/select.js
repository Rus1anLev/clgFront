import 'select2';

$(function () {
    const $selectEl = $('.select')
    if ($selectEl.length) {
        
        $selectEl.each(function() {
            if($(this).hasClass('select-city')) {
                return;
            }
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

    const $selectCity = $('.select-city')

    if ($selectCity.length) {
        $selectCity.each(function() {
            let placeholder = $(this).attr('placeholder'),
                field = $(this)
            field.select2({
                placeholder,
                minimumResultsForSearch: 2,
                width: '100%',
                templateResult: (state) => {
                    return $('<div class="pseudo-radio">'+state.text+'</div>')
                },
                templateSelection: function (state) {
                    if (!state.id) {
                        return state.text;
                    }

                    return $(
                        `
                        <div class="city-box">
								<div class="city-box-head">
									<div class="city-box-head--label menu-item">${placeholder}</div>
									<div class="city-box-head__current">
										<div class="city-box-head__current-text menu-item">${state.text}</div>
										<div class="city-box-head__current-icon">
											<svg>
												<use xlink:href="./images/sprites.svg#arrow-down"></use>
											</svg>
										</div>
									</div>
								</div>
							</div>
                        `
                    );
                }
            });
        });
        // $('.select2-selection__arrow').find('b').append(
        //     `<svg><use xlink:href="/images/sprites.svg#arrow-down"></use></svg>`
        // )
    }

})