import {addPlacemark, createMap, initYmap} from './ymap'
import helpers from "../helpers";

let $boutiquesMap = $('.js-boutiques-map'),
    $boutiquesList = $('.js-boutiques-list'),
    $boutiquesCity = $('.js-boutiques-city'),
    boutiquesMap


function centeredMap() {
    let centerAndZoom = ymaps.util.bounds.getCenterAndZoom(
        boutiquesMap.geoObjects.getBounds(),
        boutiquesMap.container.getSize(),
        boutiquesMap.options.get('projection')
    );

    if ( centerAndZoom.zoom === 23 ) {
        centerAndZoom.zoom = 12
    }

    boutiquesMap.setCenter(centerAndZoom.center, centerAndZoom.zoom)
}


function addMapItem($item) {
    let coords = $item.data('coords').split(', '),
        balloon = {
            balloonContent: `<div class="baloon" style="padding: 20px; white-space: nowrap">${$item.html()}</div>`
        },
        placemark = addPlacemark(coords, balloon)

    boutiquesMap.geoObjects.add(placemark)

    $item.on('click', function () {
        boutiquesMap.setCenter(coords, 16)
        // placemark.balloon.open()

        if(helpers.isMobile()) {
            helpers.scrollTo($boutiquesMap, 300, -100)
        }
    })
}

function initBoutiquesMap() {
    boutiquesMap = createMap($boutiquesMap.get(0), [55.704809, 37.597933], 5)

    addMapItems()

}

function removeMapItems() {
    $('.js-boutiques-map-item').off('click')
    boutiquesMap.geoObjects.removeAll()
}

function addMapItems() {
    let $listCurrent = $('.js-boutiques-list-current'),
        $mapItems = $listCurrent.find('.js-boutiques-map-item')

    $mapItems.each(function () {
        let $item = $(this)
        addMapItem($item)
    })
    centeredMap()
}

function switchCity() {
    let $select = $(this),
        id = $select.val(),
        $selectedList = $(`.js-boutiques-list[data-city=${id}]`)

    $boutiquesList.removeClass('js-boutiques-list-current')
    $selectedList.addClass('js-boutiques-list-current')

    removeMapItems()
    addMapItems()
}


function initBoutiques() {
    if ($boutiquesMap.length) {
        initYmap(initBoutiquesMap)

        $boutiquesCity.on('change', switchCity)
    }
}

export default initBoutiques