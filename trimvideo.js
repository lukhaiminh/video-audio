const ffmpeg = require('ffmpeg');

const INPUT = './public/input/ronaldo.mp4';
const OUTPUT_PATH = './public/output/messi.mp4';

function trimVideo(filePath) {
  try {
    const process = new ffmpeg(filePath);
    process
      .then((video) =>
        video.setVideoStartTime(10).setVideoDuration(15).save(OUTPUT_PATH)
      )
      .then((file) => console.log('file: ', file));
  } catch (e) {
    console.log(e.code);
    console.log(e.msg);
  }
}


trimVideo(INPUT, 20, 12);