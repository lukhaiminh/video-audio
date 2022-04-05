const ffmpeg = require('ffmpeg');

const OUTPUT_PATH = './public/output/out.mp4';

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

const INPUT = './public/input/video-less-100MB.mp4';
trimVideo(INPUT, 20, 12);
