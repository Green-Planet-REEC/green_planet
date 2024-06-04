function showImages() {
    const year = document.getElementById('year').value;
    const imageContainer = document.getElementById('imageContainer');

    // Clear previous images
    imageContainer.innerHTML = '';

    // List of image names
    const images = [
        `${year}_dci.png`,
        `${year}_avgrainfall.png`,
        `${year}_climatedata.jpg`,
        `${year}_spi.png`,
        `${year}_climatelevelindicator.png`
    ];

    // Generate and display images
    images.forEach((imageName, index) => {
        const img = document.createElement('img');
        img.src = `images/${imageName}`;
        img.alt = imageName;

        if (index === 2 || index === 4) {
            const row = document.createElement('div');
            row.className = 'row';
            imageContainer.appendChild(row);
            row.appendChild(img);
        } else if (index === 3) {
            const row = document.querySelector('#imageContainer .row:last-child');
            row.appendChild(img);
        } else {
            imageContainer.appendChild(img);
        }
    });
}
