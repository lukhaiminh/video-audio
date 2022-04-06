const ffmpeg = require('fluent-ffmpeg');
filePath1='video/video1.mp4'
filePath2='video/video2.mp4'
fileOut=`video/${Date.now()}.mp4`

const tmp = () => {
  return new Promise((resolve, reject) => {
    ffmpeg().input(filePath1)
    .input(filePath2)
    .mergeToFile(fileOut)
    .on('end', function() {
      resolve('Done')
    })
    .on('error', function(err) {
      reject(err)
    })
  })
}

tmp().then(res=>console.log(res)).catch(err=>console.log(err))
  


