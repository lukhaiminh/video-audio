const ffmpeg = require('fluent-ffmpeg');
filePath1 = './public/input/video1.mp4';
filePath2 = './public/input/video2.mp4';
fileOut = `./public/output/`;

const mergePromise = (filePath1, filePath2, fileOut) => {
  return new Promise((resolve, reject) => {
    const extensions = filePath1.split('.');
    const ext = extensions[extensions.length - 1];

    const extensions1 = filePath2.split('.');
    const ext1 = extensions1[extensions1.length - 1];

    if (ext === ext1) {
      console.log('The extension is valid');
    } else {
      throw new Error('Input is not valid'); //the temporary solution for validity file input
    }

    ffmpeg()
      .input(filePath1)
      .input(filePath2)
      .mergeToFile(`${fileOut}${Date.now()}.${ext}`)
      .on('end', resolve(`${fileOut}${Date.now()}.${ext}`))
      .on('error', reject(err));
  });
};

function merge(filePath1, filePath2, fileOut) {
  mergePromise(filePath1, filePath2, fileOut)
    .then((file) => console.log(file))
    .catch((err) => console.log(err));
}
merge(filePath1, filePath2, fileOut);
