// Initialize map
var map = L.map('map').setView([39.8283, -98.5795], 4); // USA center

// Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example route markers
var locations = [
    { name: "New York", coords: [40.7128, -74.0060] },
    { name: "Chicago", coords: [41.8781, -87.6298] },
    { name: "Los Angeles", coords: [34.0522, -118.2437] }
];

locations.forEach(loc => {
    L.marker(loc.coords).addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>Service Available`);
});
