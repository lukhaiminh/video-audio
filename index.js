const ffmpeg = require('ffmpeg');
const ffmpeg = require('fluent-ffmpeg');

// const INPUT = './public/input/video-less-100MB.mp4';
const OUTPUT_PATH = './public/output/out.mp4';
/*Update code by library ffmpeg and repair code to promise */
function trimVideo() {
  try {
    var process = new ffmpeg('./public/input/ronaldo.mp4');
    process.then(
      function (video) {
        video
          .setVideoStartTime(10)
          .setVideoDuration(15)
          .save('./public/output/ronaldo1.mp4', function (error, file) {
            if (!error) console.log('Video file: ' + file);
          });
      },
      function (err) {
        console.log('Error: ' + err);
      }
    );
  } catch (e) {
    console.log(e.code);
    console.log(e.msg);
  }
}
trimVideo();
/* code by callback function  function trimVideo(filePath, startingTime, duration) {
//   // TODO: Dat convert below func to Promise or async / await
//   ffmpeg.ffprobe(filePath, (err, _metaData) => {
//     if (err) {
//       throw new Error('file is not esxits');
//     }

//     ffmpeg()
//       .input(filePath)
//       .outputOptions([`-ss ${startingTime}`, `-t ${duration}`])
//       .output(OUTPUT_PATH)
//       .on('end', () => {
//         console.log('Done');
//       })
//       .on('error', (err) => console.log(err))
//       .run();
//   });
// }

// // function addSticker()

 trimVideo('./public/input/video-less-100MB.mp4', 10, 15);*/
