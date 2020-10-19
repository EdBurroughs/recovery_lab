mapboxgl.accessToken = 'pk.eyJ1IjoidGVkMTk4MyIsImEiOiJja2cxaTJqNDcycnJnMnFzOGcyejZ1Mmd3In0.2zhswN_8VWp05BuqBesgCA';

const coords = [-2.9663, 53.661];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ted1983/ckgfj187q3pu619pebhbfdkj8',        center: coords,
    zoom: 15,
    center: coords
    //interactive: false,

    });

let popup = new mapboxgl.Popup({
        offset:[0,0]})
    .setText('popup text');

let markerElement = document.createElement('div');
markerElement.id = 'marker';

let marker = new mapboxgl.Marker(markerElement)
    .setLngLat(coords)

const element = marker.getElement();
element.id = 'marker';

element.addEventListener('mouseenter', ()=> popup.addTo(map));
element.addEventListener('mouseleave', ()=> popup.remove());

marker.setPopup(popup);
marker.addTo(map);




