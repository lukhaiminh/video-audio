const ffmpeg = require('ffmpeg');

let OUTPUT_FOLDER_PATH = './public/output/';

function trimVideo(filePath, startTime, duration) {
  const extensions = filePath.split('.');
  const ext = extensions[extensions.length - 1];
  const process = new ffmpeg(filePath);
  process
    .then((video) =>
      video
        .setVideoStartTime(startTime)
        .setVideoDuration(duration)
        // .save(OUTPUT_FOLDER_PATH + 'out-video.' + ext)
        .save(`${OUTPUT_FOLDER_PATH}${Date.now()}.${ext}`)
    )
    .then((file) => console.log('file: ', file))
    .catch((err) => console.log(err));
}

const INPUT = './public/input/video-less-100MB.mp4';
trimVideo(INPUT, 20, 12);
