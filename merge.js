const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs'); 
const { exit } = require('process');
filePath1='video/video1.mp4'
filePath2='video/video2.mp4'
fileOut=`video/${Date.now()}.mp4`
const readFilePromise = (filePath) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

 function pro(){
      ffmpeg(filePath1).input(filePath2).mergeToFile(fileOut)
    }
async function merge()
{
  let loadFile1=readFilePromise(filePath1).then(data=>console.log('Load success f1')).catch(err=>console.log(err))
  let loadFile2=readFilePromise(filePath2).then(data=>console.log('Load success f2')).catch(err=>console.log(err))
  let tmp=await Promise.all([loadFile1,loadFile2])
  //check isvalid
  let res=await pro()
  return res;
}

merge();


