const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const resizeImage = async (inputPath, outputPath) => {
    try {
        await sharp(inputPath)
            .resize(512, 512)
            .toFile(outputPath);

        const textFilePath = path.join(path.dirname(outputPath), `${path.basename(outputPath, path.extname(outputPath))}.txt`);
        fs.writeFileSync(textFilePath, `Resized image: ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`Error resizing image ${inputPath}:`, error);
    }
};

module.exports = resizeImage;