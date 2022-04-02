const ffmpeg = require('fluent-ffmpeg');
const videoFile = './expressjs.mp4';
ffmpeg.ffprobe(videoFile,(err,metaData)=>{
    const { duration } = metaData.format;
    console.log(duration);
    const startingTime = parseInt(duration /2 );
    const clipDuration = 10;

    ffmpeg()
        .input(videoFile)
      
        
        .outputOptions([`-ss 4`,`-t 7`])
    
        .output('./end01_result.mp4')
        .on('end',()=>console.log('Done'))
        .on('error',(err)=>console.log(err))
        .run();
})