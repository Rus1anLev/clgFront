import slick from 'slick-carousel'
import helpers from "../helpers";
import panzoom from "panzoom";

let $productGalleryThumb = $('.product__gallery-thumb'),
    $productGalleryPreview = $('.product__gallery-preview'),
    $productGalleryPreviewZoom = $('.product__gallery-preview--zoom'),
    $productGalleryWindowWrapper = $('.product__gallery__window--wrapper'),
    $productGalleryWindowThumb = $('.product__gallery__window-thumb'),
    $productGalleryWindowBig = $('.product__gallery__window-big'),
    $productGalleryWindowBigClose = $('.product__gallery__window-big--close'),
    $productGalleryWindowBigZoomIn = $('.product__gallery__window-big--zoom--in'),
    $productGalleryWindowBigZoomOut = $('.product__gallery__window-big--zoom--out'),
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
        }
    })

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
    let countSlide = Math.ceil($productGalleryWindowThumb.height() / 130);

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
            // {
            //     breakpoint: 1008,
            //     settings: {
            //         slidesToShow: 1,
            //         variableWidth: true,
            //         vertical: false,
            //         verticalSwiping: false,
            //     }
            // },
            // {
            //     breakpoint: 1008,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 1,
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
        nextArrow: $('.product__gallery__window-big--arrow--right'),
        draggable: false,
        swipe: false,
        swipeToSlide: false
    });
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
        zoomInsance.zoomTo(0, 0, 0.0001)
        zoomInsance.moveTo(0, 0)
        hideZoomButton(1)
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

function initGalleryZoom() {
    window.zoomInsance = zoomInstance

    $productGalleryWindowBigZoomIn.on('click', handlerZoomIn)
    $productGalleryWindowBigZoomOut.on('click', handlerZoomOut)
    hideZoomButton(1)
}

function hideZoomButton(scale) {
    if (scale === 3) {
        $productGalleryWindowBigZoomIn.addClass('is-hidden')
    }
    if (scale > 1) {
        $productGalleryWindowBigZoomOut.removeClass('is-hidden')
    }
    if (scale === 1) {
        $productGalleryWindowBigZoomOut.addClass('is-hidden')
    }
    if (scale < 3) {
        $productGalleryWindowBigZoomIn.removeClass('is-hidden')
    }
}

zoomInstance.on('zoomend', function(e) {
    hideZoomButton(e.getTransform().scale)
});


function initProductSlider() {
    initSliderThumb()
    initSliderPreview()
    initGalleryZoom()
    $productGalleryPreviewZoom.on('click', openWindowGallery)
    $productGalleryWindowBigClose.on('click', closeWindowGallery)
}

export {initProductSlider}