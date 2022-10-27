import initYmap from './ymap'
import helpers from "../helpers";

function initB2bMap() {
    let b2bMapData = new ymaps.Map("b2bMap", {
        center: [55.704809, 37.597933],
        zoom: 13,
        controls: []
    })
    let b2bMapPlacemark = new ymaps.Placemark(
        [55.704809, 37.597933],
        {},
        helpers.ymapMapPin
    )
    b2bMapData.geoObjects.add(b2bMapPlacemark)

    b2bMapData.controls.add('zoomControl', {
        size: 'large',
    });
}

function initB2b() {
    initYmap(initB2bMap)
}

export {initB2b}