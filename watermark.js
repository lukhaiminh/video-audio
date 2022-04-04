var ffmpeg=require('ffmpeg');

function waterMark()
{
    try {
        var process = new ffmpeg('video/video1.mp4');
        process.then(function (video) {
            console.log('The video is ready to be processed');
            let watermarkPath = 'video/watermark.png',
            newFilepath = 'video/video1_new.mp4',
            settings = {
                position        : "SW"      // Position: NE NC NW SE SC SW C CE CW
                , margin_nord     : null      // Margin nord
                , margin_sud      : null      // Margin sud
                , margin_east     : null      // Margin east
                , margin_west     : null      // Margin west
            };
            video
            .fnAddWatermark(watermarkPath, newFilepath, settings, function (error, file) {
                if (!error){
                    console.log('New video file: ' + file +' completed');}
                else 
                console.log('Error' +error)
            })
                }, function (err) {
                    console.log('Error: ' + err);
                }); 
    }
    catch (e) {
        console.log(e.code);
        console.log(e.msg);
    }

}

waterMark()