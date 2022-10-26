import helpers from "../../helpers";

let $blockGalleryList = $('.js-block-gallery-list')

function initBlockGallerySlider() {
    $blockGalleryList.each(function () {
        let $slider = $(this),
            $progressBar = $slider.siblings('.block_gallery-progress').find('.progress')

        $slider.on('init', function(event, slick) {
            var calc = 100 / slick.slideCount;
            $progressBar.css('background-size', calc + '% 100%')
        });

        $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: false,
            prevArrow: $slider.siblings('.block_products_slider__slider--arrow--left'),
            nextArrow: $slider.siblings('.block_products_slider__slider--arrow--right'),
            slide: 'div',
            rows: 0,
            responsive: [
                {
                    breakpoint: 1008,
                    settings: {
                        slidesToShow: 1,
                        variableWidth:true,
                    }
                }
            ]
        });

        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            let calc = 100 / slick.slideCount * (nextSlide + 1);
            $progressBar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );
        });
    })
}

function initBlockGallery() {
    if( helpers.isMobile() ) {
        initBlockGallerySlider()
    }
}

export {initBlockGallery}