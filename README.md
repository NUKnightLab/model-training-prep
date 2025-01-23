# Training Prep

A Node.js application to resize images and prepare them for training.

## Project Structure

```
model-training-prep
├── src
│   ├── index.js          # Entry point of the application
│   ├── utils
│   │   └── resize.js     # Utility functions for image resizing
│   └── types
│       └── index.d.ts    # TypeScript definitions
├── original              # Folder containing original images
├── output                # Folder where resized images will be saved
├── package.json          # NPM configuration file
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/NUKnightLab/model-training-prep.git
   ```

2. Navigate to the project directory:
   ```
   cd model-training-prep
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage
1. Create a caption.txt file at the root of the project with the desired content for the text files.

2. Place your original images in the original folder.

3. Run the application to resize the images and create text files using the following command:
```
node src/index.js
```

Make sure to place your original images in the `original` folder. The resized images will be saved in the `output` folder, and a corresponding text file will be created for each image.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.