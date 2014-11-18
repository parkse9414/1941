var img;  
var img3;  
var count;

function setup()
{
    createCanvas(800,900);
    img = loadImage("airplane.png");  
    img2 = loadImage("shield.png");
    img3 = loadImage("bg.png");
    img4 = loadImage("Bairplane.jpg");
    count=0;

}

function draw()
{
	background(img3);


    //비행기
    image(img, mouseX - 76, mouseY - 62);

    //쉴드
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img2, mouseX + Math.cos(timing*4*PI)*100 - 15, 
    mouseY + Math.sin(timing*4*PI)*100 - 14)

    //적 비행기

    drawBairplane(30,count);
     count=count+1;
     if(count>900){
    count=0;

}


function drawBairplane(x,y) {
    image(img4);
}