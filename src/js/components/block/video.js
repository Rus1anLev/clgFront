let blockVideoContainer = $('.js-block-video-container')

function initBlockVideo() {
    blockVideoContainer.each(function () {
        let $container = $(this),
            $frame = $container.find('.js-block-video-frame'),
            $button = $container.find('.js-block-video-button'),
            $thumb = $container.find('.js-block-video-thumb')

        $button.on('click', function () {
            $thumb.fadeOut(400)
            $frame.attr('src', $button.data('frame') + "?autoplay=1")
        })
    })
}

export {initBlockVideo}