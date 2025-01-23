const fs = require('fs');
const path = require('path');
const resizeImage = require('./utils/resize');

const inputDir = path.join(__dirname, '../original');
const outputDir = path.join(__dirname, '../output');
const captionFilePath = path.join(__dirname, '../caption.txt');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Read text content from caption.txt
const textContent = fs.readFileSync(captionFilePath, 'utf-8');

// Function to resize images and create text files
const processImages = async () => {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file);
        const textFilePath = path.join(outputDir, `${path.parse(file).name}.txt`);

        // Resize image
        await resizeImage(inputFilePath, outputFilePath);

        // Create text file
        fs.writeFileSync(textFilePath, textContent);
    }

    console.log('Processing complete.');
};

processImages();