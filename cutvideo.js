const ffmpeg = require('fluent-ffmpeg');

ffmpeg('/abc.mp4')
  .ffprobe(function(err,data) {
      
    const { duration } = data.format;
        console.log(duration);
        const startingTime = parseInt(duration/2);
        const clipDuration = 5;
    
        ffmpeg()
            .input(videoFile)
            .inputOptions([`-ss ${startingTime}`])
            .outputOptions([`-t ${clipDuration}`])
            .noAudio()
            .output('./end_result.mp4')
            .on('end',()=>console.log('Done'))
            .on('error',(err)=>console.log(err))
            .run();
    
  });