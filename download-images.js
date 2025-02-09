const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    {
        url: 'https://source.unsplash.com/800x600/?professional,headshot,before-after',
        filename: 'before-after-1.jpg'
    },
    {
        url: 'https://source.unsplash.com/800x600/?business,headshot,before-after',
        filename: 'before-after-2.jpg'
    },
    {
        url: 'https://source.unsplash.com/800x600/?corporate,headshot,before-after',
        filename: 'before-after-3.jpg'
    },
    {
        url: 'https://source.unsplash.com/800x600/?professional,portrait',
        filename: 'headshot-1.jpg'
    },
    {
        url: 'https://source.unsplash.com/800x600/?business,portrait',
        filename: 'headshot-2.jpg'
    },
    {
        url: 'https://source.unsplash.com/800x600/?corporate,portrait',
        filename: 'headshot-3.jpg'
    }
];

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }

            const filepath = path.join(__dirname, 'images', filename);
            const fileStream = fs.createWriteStream(filepath);

            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${filename}`);
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => {});
                reject(err);
            });
        }).on('error', reject);
    });
};

async function downloadAllImages() {
    try {
        for (const image of images) {
            await downloadImage(image.url, image.filename);
        }
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
}

downloadAllImages();