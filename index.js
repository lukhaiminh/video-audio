const ffmpeg = require('fluent-ffmpeg');
const videoFile = './expressjs.mp4';
ffmpeg.ffprobe(videoFile,(err,metaData)=>{
    const {duration} = metaData.format;
    console.log(duration);
    // tính ở thời điểm giây thứ 25
    const startingTime = parseInt(duration*25/120);
    const clipDuration = 19;
    ffmpeg()
        .input(videoFile)
        .outputOptions([`-ss ${startingTime}`,`-t ${clipDuration}`])
         .output('./end7_result.mp4')
        .on('end',()=>console.log('Done'))
        .on('error',(err)=>console.log(err))
        .run();
})