/**
 * Created by:
 * Class: PWA1
 * Goal: Goal9
 */

console.log("start canvas");

(function(){

    //establishes the canvas parameters on the stage
    var canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;

    //this will add the canvas to the DOM
    document.body.appendChild(canvas);

    //sets the variable equal to the canvas 2d
    var ctx = canvas.getContext('2d');

    //Array of numbers
    var charData = [98, 100, 82, 75];
    var maxBarHeight = 200;

    //Creates the new Image
    var img = new Image();

    //sets the src of the image
    img.src = 'images/bg.jpg';

    //Establishes the parameters of the the image to be loaded
    img.addEventListener('load', function(drawBars){
        //this draws the image onto the canvas
        ctx.drawImage(img,0,0,400,300);

        drawBars = charData;
        ctx.font = '14px Georgia';

        for(var i = 0; i < 4; i++){
            ctx.beginPath();
            ctx.fillStyle = 'rgba(100,200,200,0.75)';
            var height = maxBarHeight*charData[i]/100;
            ctx.rect(i*80+90, 270-height, 50, height);
            ctx.fill();

            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText(charData[i], i*80+90, 270-height, 50, height);

        }


        var drawChartText = function(){
            ctx.font = '20px Georgia';
            ctx.fillStyle = 'rgb(255,255,255)';
            ctx.fillText('TEST GRADES', 30, 30);

        };
        drawChartText();

        var xAxisData = ['Grade 1 ', 'Grade 2 ', 'Grade 3 ', 'Grade 4 '];

        ctx.font = '14px Georgia';
        ctx.fillStyle = 'rgb(0,0,0)';

        for(var ii = 0; ii < 4; ii++){
            ctx.fillText(xAxisData[ii], ii*80+95, 290);

        }


    });










})();