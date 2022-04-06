const ffmpeg = require('ffmpeg');

const OUTPUT_FOLDER_PATH = './public/output/';

function waterMark(inputFile, inputImage) {
  const extensions = inputFile.split('.');
  const ext = extensions[extensions.length - 1];
  const outFilePath = `${OUTPUT_FOLDER_PATH}watermark-${Date.now()}.${ext}`;

  new ffmpeg(inputFile)
    .then((video) => {
      console.log('The video is ready to be processed');

      // TODO: TEST SETTINGS & DESCRIBE settings
      const settings = {
        position: 'CW', // Position: NE NC NW SE SC SW C CE CW
        margin_nord: 10, // Margin nord
        margin_sud: 0, // Margin sud  // top
        margin_east: 5, // Margin east
        margin_west: 6 // Margin west
      };
      video.fnAddWatermark(inputImage, outFilePath, settings);
    })
    .then(() => {
      console.log('Done');
    })
    .catch((error) => console.log('Error:' + error));
}

waterMark(
  './public/input/video-less-100MB.mp4',
  './public/input/wartermark-img.png'
);
