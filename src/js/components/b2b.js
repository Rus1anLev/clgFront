import {addPlacemark, createMap, initYmap} from './ymap'

let $b2bLocationMap = $('.js-b2b-location-map')

function initB2bMap() {
    let b2bMapData = createMap($b2bLocationMap.get(0), [55.704809, 37.597933])
    let b2bMapPlacemark = addPlacemark([55.704809, 37.597933])
    b2bMapData.geoObjects.add(b2bMapPlacemark)
}

function initB2b() {
    if ($b2bLocationMap.length) {
        initYmap(initB2bMap)
    }
}

export default initB2b