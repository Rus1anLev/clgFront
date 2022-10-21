import slick from 'slick-carousel'
import helpers from "../helpers";
import panzoom from "panzoom";

let $productGalleryThumb = $('.product__gallery-thumb'),
    $productGalleryPreview = $('.product__gallery-preview'),
    $productGalleryPreviewZoom = $('.product__gallery-preview--item--wrapper'),
    $productGalleryWindowWrapper = $('.product__gallery__window--wrapper'),
    $productGalleryWindowThumb = $('.product__gallery__window-thumb'),
    $productGalleryWindowBig = $('.product__gallery__window-big'),
    $productGalleryWindowBigClose = $('.product__gallery__window-big--close'),
    $productGalleryWindowBigZoomIn = $('.product__gallery__window-big--zoom--in'),
    $productGalleryWindowBigZoomOut = $('.product__gallery__window-big--zoom--out'),
    zoomInstance

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
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    vertical: false,
                    verticalSwiping: false,
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
        nextArrow: $('.product__gallery-preview--arrow--right'),

    });
}

function initWindowSliderThumb() {
    let countSlide = Math.floor($productGalleryWindowThumb.height() / 130);
    $productGalleryWindowThumb.slick({
        slidesToShow: countSlide,
        slidesToScroll: 1,
        asNavFor: '.product__gallery__window-big',
        dots: false,
        focusOnSelect: true,
        prevArrow: $('.product__gallery__window-thumb--arrow--up'),
        nextArrow: $('.product__gallery__window-thumb--arrow--down'),
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            // {
            //     breakpoint: 1008,
            //     settings: {
            //         slidesToShow: 3,
            //     }
            // }
        ]
    });
}

function initWindowSliderBig() {
    $productGalleryWindowBig.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.product__gallery__window-thumb',
        prevArrow: $('.product__gallery__window-big--arrow--left'),
        nextArrow: $('.product__gallery__window-big--arrow--right')
    });

    if(helpers.isMobile()) {
        // $productGalleryWindowBig.slick('slickSetOption', 'swipe', false)
        // $productGalleryWindowBig.slick('slickSetOption', 'draggable', false)
        // $productGalleryWindowBig.slick('slickSetOption', 'swipeToSlide', false)
    }
}

function openWindowGallery() {
    $productGalleryWindowWrapper.fadeIn(
        400,
        function () {
            initWindowSliderThumb()
            initWindowSliderBig()
            helpers.lockScroll(true, $productGalleryWindowWrapper, 'gallery-window')
            setTimeout(function () {
                $productGalleryWindowBig.slick('slickGoTo', $productGalleryPreview.slick('slickCurrentSlide'))
            }, 100)
            $(document).on('keyup', closeFromEscape)
        }
    )
}

function closeWindowGallery() {
    $productGalleryPreview.slick('slickGoTo', $productGalleryWindowBig.slick('slickCurrentSlide'))
    $productGalleryWindowWrapper.fadeOut(400, function () {
        helpers.lockScroll(false, $productGalleryWindowWrapper, 'gallery-window')
        $productGalleryWindowThumb.slick('unslick')
        $productGalleryWindowBig.slick('unslick')
        $(document).off('keyup', closeFromEscape)

        if(helpers.isMobile()) {
            zoomInsance.zoomTo(0, 0, 0.0001)
            zoomInsance.moveTo(0, 0)
            hideZoomButton(1)
        }
    })
}


function closeFromEscape(e) {
    if (e.key === "Escape") {
        closeWindowGallery()
    }
}

function handlerZoomIn() {
    zoomInsance.smoothZoom(0, 0, 1.75);
}

function handlerZoomOut() {
    zoomInsance.smoothZoom(0, 0, 0.5);
}

function hideZoomButton(scale) {
    if (scale === 3) {
        $productGalleryWindowBigZoomIn.addClass('is-hidden')

        if($productGalleryWindowBig.get(0).slick) {
            $productGalleryWindowBig.slick('slickSetOption', 'swipe', false)
            $productGalleryWindowBig.slick('slickSetOption', 'draggable', false)
            $productGalleryWindowBig.slick('slickSetOption', 'swipeToSlide', false)
        }
    }
    if (scale < 3) {
        $productGalleryWindowBigZoomIn.removeClass('is-hidden')

        if($productGalleryWindowBig.get(0).slick) {
            $productGalleryWindowBig.slick('slickSetOption', 'swipe', false)
            $productGalleryWindowBig.slick('slickSetOption', 'draggable', false)
            $productGalleryWindowBig.slick('slickSetOption', 'swipeToSlide', false)
        }
    }
    if (scale > 1) {
        $productGalleryWindowBigZoomOut.removeClass('is-hidden')

        if($productGalleryWindowBig.get(0).slick) {
            $productGalleryWindowBig.slick('slickSetOption', 'swipe', false)
            $productGalleryWindowBig.slick('slickSetOption', 'draggable', false)
            $productGalleryWindowBig.slick('slickSetOption', 'swipeToSlide', false)
            $productGalleryWindowBig.slick('slickSetOption', 'touchMove', false)
        }
    }
    if (scale === 1) {
        $productGalleryWindowBigZoomOut.addClass('is-hidden')

        if($productGalleryWindowBig.get(0).slick) {
            $productGalleryWindowBig.slick('slickSetOption', 'swipe', true)
            $productGalleryWindowBig.slick('slickSetOption', 'draggable', true)
            $productGalleryWindowBig.slick('slickSetOption', 'swipeToSlide', true)
            $productGalleryWindowBig.slick('slickSetOption', 'touchMove', true)
        }
    }
}

function initGalleryZoom() {
    if ($productGalleryWindowBig.length) {
        zoomInstance = panzoom($productGalleryWindowBig.get(0), {
            bounds: true,
            boundsPadding: 1,
            maxZoom: 3,
            minZoom: 1,
            zoomDoubleClickSpeed: 1,
            // beforeWheel: function(e) {
            //     // allow wheel-zoom only if altKey is down. Otherwise - ignore
            //     var shouldIgnore = !e.altKey;
            //     return shouldIgnore;
            // }
            beforeWheel: function(e) {
                setTimeout(function () {
                    hideZoomButton(zoomInstance.getTransform().scale)
                }, 300)
            },
            onTouch: function(e) {

            }
        })
        zoomInstance.on('transform', function(e) {
            hideZoomButton(e.getTransform().scale)
        });
    }

    window.zoomInsance = zoomInstance

    $productGalleryWindowBigZoomIn.click(handlerZoomIn)
    $productGalleryWindowBigZoomOut.click(handlerZoomOut)
    hideZoomButton(1)
}

function initProductSlider() {
    initSliderThumb()
    initSliderPreview()
    if(helpers.isMobile() && $productGalleryWindowBig.length) {
        initGalleryZoom()
    }

    $productGalleryPreviewZoom.click(openWindowGallery)
    $productGalleryWindowBigClose.click(closeWindowGallery)
}

export {initProductSlider}