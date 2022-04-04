var ffmpeg = require('fluent-ffmpeg');
var binpath=require('@ffmpeg-installer/ffmpeg')
var path=require('path')
var fs=require('fs');



const ConvertFileTo_TS = () => {
  let exam1 = new Promise((resolve, reject) => {
    ffmpeg('video/video1.mp4') //add your first video path
      .setFfmpegPath(binpath.path)
      .format('mp4')//option
      .on('end', () => {
        resolve()
        console.log('ts file created')
      })
      .on('error', err => {
        console.error(err);
      })
      .save('./file1.ts');
  });
  let exam2 = new Promise((resolve, reject) => {
    ffmpeg('video/video2.mp4') //add your secound video path
      .setFfmpegPath(binpath.path)
      .format('mp4')
      .on('end', () => {
        resolve()
        console.log('ts2 file created')
      })
      .on('error', err => {
        console.error(err);
      })
      .save('./file2.ts');
  })
  return Promise.all([exam1, exam2]);//an array with n file ts of n vid
}

const mergeSingleTsFile = () => {//merge all the file ts 
return new Promise((resolve, reject) => {
  let v1 = "file1.ts" //.ts file path
  let v2 = "file2.ts" //.ts file path
  ffmpeg.setFfmpegPath(path.join(__dirname, './ffmpeg/bin/ffmpeg.exe')); 
  ffmpeg.setFfprobePath(path.join(__dirname, './ffmpeg/bin/ffprobe.exe'));
  ffmpeg({ source: v1 })
  .input(v2)
  .on('end', () => {
      resolve()
      console.log("merge is done")
  })
  .on('error', (err) => console.log('Error', err))
  .mergeToFile("final.ts")
})
}
//--
const deletedFile=()=>
{
let pro1 =new Promise((resolve,reject)=>
{
  fs.stat('file1.ts', function (err, stats) {
    console.log(stats);//here we got all information of file in stats variable
  
    if (err) {
        return console.error(err);
    }
  
    fs.unlink('file1.ts',function(err){
          if(err) return console.log(err);
          console.log('file deleted successfully');
    });  
  });
});
  //--
  let pro2= new Promise((resolve,reject)=>{
  fs.stat('file2.ts', function (err, stats) {
  console.log(stats);//here we got all information of file in stats variable

  if (err) {
      return console.error(err);
  }

  fs.unlink('file2.ts',function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
  });  
});
  });

  let pro3= new Promise((resolve,reject)=>{
    fs.stat('final.ts', function (err, stats) {
    console.log(stats);//here we got all information of file in stats variable
  
    if (err) {
        return console.error(err);
    }
  
    fs.unlink('final.ts',function(err){
          if(err) return console.log(err);
          console.log('file deleted successfully');
    });  
  });
    });
  return Promise.all([pro1,pro2,pro3])
}





const finalVideo = () => {
return new Promise((resolve, reject) => {
  function startDecode() {
    var infs = fs.createReadStream('final.ts');
    ffmpeg(infs)
      .save('output.mp4'); //add a path to save video
    console.log('Decoding');
  }
  startDecode();
  resolve()
});
}


function checksize()
{
  let stats = fs.statSync(File_path)
  let fileSizeInBytes = stats.size;
  console.log('Checking size of video')
  if (fileSizeInBytes==0)
  return 0
  return 1
}

//check file whether empty or not
function startDecoding() {
// generate a function to check file
  ConvertFileTo_TS().then(res => {
  console.log('to ts function run')
  mergeSingleTsFile().then(vid => {
  console.log('tss to one function run')
  finalVideo().then(com => {
      console.log('Final Video Processing')
  }).then(del=>{
    deletedFile()
    console.log('delete redundant files')
  })
  })
})
}
startDecoding()