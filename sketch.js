var img;  
var img3;  

function setup()
{
    createCanvas(800,900);
    img = loadImage("airplane.png");  
    img2 = loadImage("shield.png");
    img3 = loadImage("bg.png");


}

function draw()
{
	background(img3);


    //비행기
    image(img, mouseX - 32, mouseY - 32);

    //쉴드
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img2, mouseX + Math.cos(timing*4*PI)*50 - 8, 
    mouseY + Math.sin(timing*4*PI)*50 - 8)



}