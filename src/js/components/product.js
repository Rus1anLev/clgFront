import slick from 'slick-carousel'
import helpers from "../helpers";

let $productGalleryThumb = $('.product__gallery-thumb'),
    $productGalleryPreview = $('.product__gallery-preview'),
    $productGalleryWindow = $('.product__gallery__window'),
    $productGalleryWindowThumb = $('.product__gallery__window-thumb'),
    productGalleryWindowBig = $('.product__gallery__window-big')

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


function initWindowSliderThumb() {
    let countSlide = Math.ceil($productGalleryWindowThumb.height() / 130) + 1;

    $productGalleryWindowThumb.slick({
        slidesToShow: countSlide,
        slidesToScroll: 1,
        asNavFor: '.product__gallery__window-big',
        dots: false,
        focusOnSelect: true,
        prevArrow: $('.product__gallery__window-thumb--arrow--up'),
        nextArrow: $('.product__gallery__window-thumb--arrow--down'),
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
function initWindowSliderBig() {
    productGalleryWindowBig.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.product__gallery__window-thumb',
        prevArrow: $('.product__gallery__window-big--arrow--left'),
        nextArrow: $('.product__gallery__window-big--arrow--right')
    });
}

function initProductSlider() {
    initSliderThumb()
    initSliderPreview()
    initWindowSliderThumb()
    initWindowSliderBig()
    helpers.lockScroll(true, $productGalleryWindow, 'gallery-window')
}

export {initProductSlider}