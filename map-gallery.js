// This file defines your gallery structure since the browser cannot scan folders
const galleryData = {
    "New Year Celebration": [
        "party1.jpg",
        "video1.mp4"
    ],
    "Winter Party": [
        "snow.jpg",
        "dance.mp4"
    ],
    "Summer Fun": [
        "beach.jpg",
        "surfing.mp4"
    ]
};

// Function to render the gallery
function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    for (const [folderName, files] of Object.entries(galleryData)) {
        // Create Folder Header
        const folderSection = document.createElement('div');
        folderSection.className = 'folder-section';
        folderSection.innerHTML = `<h2 style="margin-top:20px;">📁 ${folderName}</h2>`;
        
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
        grid.style.gap = '15px';

        files.forEach(fileName => {
            const filePath = `gallery/${folderName}/${fileName}`;
            const isVideo = fileName.toLowerCase().endsWith('.mp4');
            const item = document.createElement('div');
            item.style.textAlign = 'center';
            
            // Render Image or Video
            if (isVideo) {
                item.innerHTML = `<video src="${filePath}" style="width:100%; border-radius:8px;" controls></video>`;
            } else {
                item.innerHTML = `<img src="${filePath}" style="width:100%; border-radius:8px;" alt="${fileName}">`;
            }

            // Download Link
            item.innerHTML += `<a href="${filePath}" download style="display:block; font-size:12px; margin-top:5px; color:#007bff; text-decoration:none;">Download</a>`;
            
            grid.appendChild(item);
        });

        folderSection.appendChild(grid);
        container.appendChild(folderSection);
    }
}

// Run the function
renderGallery();
