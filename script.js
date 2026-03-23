// Initialize the map centered on Bath, UK
const map = L.map('map').setView([51.3758, -2.3599], 14);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Placeholder data for Bath
const locations = [
    { name: "Bath Spa Station (Bus)", type: "bus", lat: 51.3776, lng: -2.3568 },
    { name: "Roman Baths Water Point", type: "water", lat: 51.3812, lng: -2.3595 },
    { name: "Milsom Street Shops", type: "shop", lat: 51.3846, lng: -2.3615 }
];

// Function to drop markers
function loadMarkers(filter = 'all') {
    // Clear existing markers logic would go here
    locations.forEach(loc => {
        if (filter === 'all' || loc.type === filter) {
            L.marker([loc.lat, loc.lng])
                .addTo(map)
                .bindPopup(`<b>${loc.name}</b><br>Type: ${loc.type}`);
        }
    });
}

function filterType(type) {
    console.log("Filtering for:", type);
    // Future: Clear map and reload specific markers
    loadMarkers(type);
}

// Initial load
loadMarkers();
