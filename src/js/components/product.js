import slick from 'slick-carousel'

let $productGalleryThumb = $('.product__gallery-thumb'),
    $productGalleryPreview = $('.product__gallery-preview')

function initSliderThumb() {
    $productGalleryThumb.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product__gallery-preview',
        dots: false,
        focusOnSelect: true,
        prevArrow: $('.product__gallery-thumb--arrow--up'),
        nextArrow: $('.product__gallery-thumb--arrow--down'),
        vertical: true,
        verticalSwiping:true,
        responsive: [
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    variableWidth:true,
                    vertical: false,
                    verticalSwiping:false,
                }
            },
            {
                breakpoint: 1304,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}

function initSliderPreview() {
    $productGalleryPreview.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.product__gallery-thumb',
        prevArrow: $('.product__gallery-preview--arrow--left'),
        nextArrow: $('.product__gallery-preview--arrow--right')
    });
}

function initProductSlider() {
    initSliderThumb()
    initSliderPreview()
}

export {initProductSlider}