
const ffmpeg=require('ffmpeg');

function waterMark()
{
        let process = new ffmpeg('video/video1.mp4');
        process.then( (video)=> {
            console.log('The video is ready to be processed');
            let watermarkPath = 'video/watermark.png',
            newFilepath = 'video/video2_new.mp4',
            settings = {
                position          : "SW"      // Position: NE NC NW SE SC SW C CE CW
                , margin_nord     : null      // Margin nord
                , margin_sud      : null      // Margin sud
                , margin_east     : null      // Margin east
                , margin_west     : null      // Margin west
            };
            video
            .fnAddWatermark(watermarkPath, newFilepath, settings)}).then(()=>{console.log('Done')}).catch(error=>console.log('Error:'+error))
}
waterMark()