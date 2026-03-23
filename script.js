const locations = [
    "John O'groats", // +10
    "Edinburgh",     // +20
    "Newcastle",     // +30
    "Manchester",    // +40
    "Bristol",       // +50
    "Bath",          // Base (Standard)
    "London",        // +60
    "Penzance"       // +70
];

function updateClocks() {
    const listContainer = document.getElementById('location-list');
    listContainer.innerHTML = ''; // Clear existing
    
    const now = new Date();

    locations.forEach((city, index) => {
        let offsetMinutes;
        
        // Logical rule: Bath is index 5. 
        // Others are increments of 10 from the top (index 0 = +10)
        // Except Bath stays at the "current" time.
        if (city === "Bath") {
            offsetMinutes = 0;
        } else {
            // Index 0=10, 1=20, 2=30, 3=40, 4=50, 6=60, 7=70
            offsetMinutes = (index < 5) ? (index + 1) * 10 : index * 10;
        }

        const cityTime = new Date(now.getTime() + offsetMinutes * 60000);
        
        const timeString = cityTime.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        });

        const row = document.createElement('div');
        row.className = 'location-row';
        row.innerHTML = `
            <span class="location-name">${city}</span>
            <span class="time-val">${timeString}</span>
        `;
        listContainer.appendChild(row);
    });
}

// Update every second
setInterval(updateClocks, 1000);
updateClocks();
