const ffmpeg = require('fluent-ffmpeg');
const filePath = './public/input/video1.mp4';
const fileOut = `./public/output/`;
//It is a temporary source for crop the videos
//the constraints is necessary for this program
const cropPromise = (filePath, width, heigh, x, y) => {
  return new Promise((resolve, reject) => {
    let tmpFile = `${fileOut}${Date.now()}.mp4`;
    ffmpeg()
      .input(filePath)
      .videoFilters(`crop=${width}:${heigh}:${x}:${y}`) //width,heigh,(x axis,y axis).Corner (top,left) coordinate starts at (x,y)
      .save(tmpFile)
      .on('end', resolve(tmpFile))
      .on('error', reject(err));
  });
};

function crop(filePath, width, heigh, x, y) {
  cropPromise(filePath, width, heigh, x, y)
    .then((file) => console.log('File :' + file))
    .catch((err) => console.log(err));
}
crop(filePath, 500, 500, 0, 0);
