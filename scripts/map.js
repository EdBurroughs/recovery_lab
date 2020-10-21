mapboxgl.accessToken = 'pk.eyJ1IjoidGVkMTk4MyIsImEiOiJja2cxaTJqNDcycnJnMnFzOGcyejZ1Mmd3In0.2zhswN_8VWp05BuqBesgCA';

const coords = [-2.9663, 53.661];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ted1983/ckgfj187q3pu619pebhbfdkj8',        
    center: coords,
    zoom: 15,
    interactive: false,
});

const popup = new mapboxgl.Popup({
        closeButton: false,
        className: 'popup',
    })
    .setHTML('<h3>The Recovery Lab<h3/><br><p>143c Cambridge Road</p><br><p>PR9 9RZ<p>');

const markerElement = document.createElement('div');
markerElement.id = 'marker';

const marker = new mapboxgl.Marker(markerElement)
    .setLngLat(coords)

marker.getElement().addEventListener('mouseenter', ()=> popup.addTo(map));
marker.getElement().addEventListener('mouseleave', ()=> popup.remove());

marker.setPopup(popup);
marker.addTo(map);




