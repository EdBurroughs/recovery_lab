mapboxgl.accessToken = 'pk.eyJ1IjoidGVkMTk4MyIsImEiOiJja2cxaTJqNDcycnJnMnFzOGcyejZ1Mmd3In0.2zhswN_8VWp05BuqBesgCA';

const coords = [-2.9663, 53.661];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ted1983/ckgfj187q3pu619pebhbfdkj8',        center: coords,
    zoom: 15,
    center: coords,
    interactive: false,
});

const popup = new mapboxgl.Popup({
        offset:[-20,-20]})
    .setText('popup text');

const markerElement = document.createElement('div');
markerElement.id = 'marker';

const marker = new mapboxgl.Marker(markerElement)
    .setLngLat(coords)

marker.getElement().addEventListener('mouseenter', ()=> popup.addTo(map));
marker.getElement().addEventListener('mouseleave', ()=> popup.remove());

marker.setPopup(popup);
marker.addTo(map);




