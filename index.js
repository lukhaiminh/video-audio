const ffmpeg = require('fluent-ffmpeg');

// const INPUT = './public/input/video-less-100MB.mp4';
const OUTPUT_PATH = './public/output/out.mp4';

function trimVideo(filePath, startingTime, duration) {
  // TODO: Dat convert below func to Promise or async / await
  ffmpeg.ffprobe(filePath, (err, _metaData) => {
    if (err) {
      throw new Error('file is not esxits');
    }

    ffmpeg()
      .input(filePath)
      .outputOptions([`-ss ${startingTime}`, `-t ${duration}`])
      .output(OUTPUT_PATH)
      .on('end', () => {
        console.log('Done');
      })
      .on('error', (err) => console.log(err))
      .run();
  });
}

// function addSticker()

trimVideo('./public/input/video-less-100MB.mp4', 10, 15);
