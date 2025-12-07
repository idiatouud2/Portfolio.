// Initialize Leaflet map
function initMap() {
const map = L.map('map').setView([40.7128, -74.0060], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '© OpenStreetMap contributors'
}).addTo(map);


L.marker([40.7128, -74.0060]).addTo(map)
.bindPopup('Moon & Tide Map Placeholder 🌊🌙')
.openPopup();
}


// Time-slider placeholder interaction
const slider = document.getElementById('time-slider');
if(slider){
slider.addEventListener('input', (e) => {
const val = e.target.value;
console.log(`Slider moved to: ${val}`);
// Later: update map layer for moon/tide data
});
}


initMap();
