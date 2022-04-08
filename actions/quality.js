const ffmpeg = require('fluent-ffmpeg');
const filePath = './public/input/video1.mp4';
const fileOut = `./public/output/`;
const editQuality = (filePath, inp) => {
  return new Promise((resolve, reject) => {
    let tmpFile = `${fileOut}${Date.now()}.mp4`;
    ffmpeg()
      .input(filePath)
      .videoBitrate(inp)
      .save(tmpFile)
      .on('end', resolve(tmpFile))
      .on('error', reject(err));
  });
};
function quality(filePath, inp) {
  editQuality(filePath, inp)
    .then((file) => console.log('File :' + file))
    .catch((err) => console.log(err));
}
quality(filePath, 1000);
