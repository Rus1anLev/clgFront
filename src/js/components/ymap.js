const init = (initMap) => {
    let script = document.createElement('script');
    const lang = document.documentElement.lang === 'en' ? 'en_EN' : 'ru_RU';

    script.src = `https://api-maps.yandex.ru/2.1/?apikey=99f91afb-8db0-4a66-b863-0c9c380b92d5&lang=${lang}`;

    document.body.appendChild(script);

    script.onload = () => {
        ymaps.ready(function(){
            initMap()
        });
    }
}

export default init