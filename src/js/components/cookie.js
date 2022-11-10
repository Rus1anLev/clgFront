let $cookie = $('.js-cookie'),
    $cookieBtn = $('.js-cookie-btn'),
    $cookieTextMore = $('.js-cookie-text--more'),
    $cookieTextMoreBtn = $('.js-cookie-text--more-btn')


function openCookie() {
    $cookie.show(0)
}

function closeCookie() {
    $cookie.fadeOut(400)
    setCookie('cookie-agree', 1, 30)
}

function handlerCookieBtn() {
    closeCookie()
}

function handlerCookieTextMore() {
    $cookieTextMoreBtn.addClass('is-open')
    $cookieTextMore.addClass('is-open')
    $cookieTextMoreBtn.off('click', handlerCookieTextMore)
}

function initCookie() {
    let isCookieAgree = getCookie('cookie-agree')
    if (!isCookieAgree) {
        openCookie()
        $cookieBtn.on('click', handlerCookieBtn)
        $cookieTextMoreBtn.on('click', handlerCookieTextMore)
    }
}

export default initCookie