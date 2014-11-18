var img;  
var img5;  

function setup()
{
    createCanvas(1800,1800);
    img = loadImage("1Mercury.png");  
    img2 = loadImage("2Venus.png");
    img3 = loadImage("3earth.png");
    img4 = loadImage("4moon.png");
    img5 = loadImage("bg.png");
    img6 = loadImage("sun.png");
    img7 = loadImage("6Jupiter.png");
    img8 = loadImage("7Saturn.png");
    img9 = loadImage("8Uranus.png");
}

function draw()
{
	background(img5);

    image(img6, 900 - 256 ,900 - 256);



    //지구
    image(img3, mouseX - 32, mouseY - 32);

    //달
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img4, mouseX + Math.cos(timing*4*PI)*50 - 8, 
    mouseY + Math.sin(timing*4*PI)*50 - 8)



}