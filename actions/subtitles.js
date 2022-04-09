const ffmpeg = require("fluent-ffmpeg");
const OUTPUT_FOLDER_PATH = './public/output/';

function addSubtitle(filePath){
   const extensions = filePath.split('.');
   const ext = extensions[extensions.length - 1];
    return new Promise((resolve,reject)=>{
       ffmpeg(filePath)
       .outputOptions('-vf subtitles=./subtitle.srt')
       .save(`${OUTPUT_FOLDER_PATH}${Date.now()}.${ext}`)
       .on('end', ()=>{
          console.log('Done Add Subtitles')
          return resolve()
        })
        .on('err',(err)=>{
            return reject(err)
        })
    })
}
const INPUT = './public/input/demosub.mp4';
addSubtitle(INPUT);
