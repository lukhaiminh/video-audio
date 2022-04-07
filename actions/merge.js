const errors = require('bluebird/js/release/errors');
const ffmpeg = require('fluent-ffmpeg');
filePath1 = './public/input/video1.mp4';
filePath2 = './public/input/video2.mp4';
//you can input file nth
const fileOut = `./public/output/`;
const mergePromise = (...arguements) => {
  return new Promise((resolve, reject) => {
    if (arguements.length === 0) {
      throw new Error('There are no data input');
    }
    const extensions = arguements[0].split('.');
    const ext = extensions[extensions.length - 1];
    let parseFile = [];
    let extension = '';
    for (i = 1; i < arguements.length; i++) {
      parseFile = arguements[i].split('.');
      extension = parseFile[parseFile.length - 1];
      if (extension != ext) {
        throw new Error('Input is not valid');
      }
    }
    const FFmpeg = ffmpeg();
    for (i in arguements) {
      FFmpeg.input(arguements[i]);
    }
    FFmpeg.mergeToFile(`${fileOut}${Date.now()}.${ext}`)
      .on('end', resolve(`${fileOut}${Date.now()}.${ext}`))
      .on('error', reject(err));
  });
};

function merge(...arguements) {
  mergePromise(...arguements)
    .then((file) => console.log(file))
    .catch((err) => console.log(err));
}
merge(filePath1, filePath2);
