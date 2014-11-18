var img;  
var img3;  
var count;
var count2;


function setup()
{
    createCanvas(800,900);
    img = loadImage("airplane.png");  
    img2 = loadImage("shield.png");
    img3 = loadImage("bg.png");
    img4 = loadImage("Bairplane1.png");
    img5 = loadImage("Bairplane2.png");
    img6 = loadImage("Bairplane3.png");
    count=0;
    count2=0;


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
    /*//적 비행기2
     drawBairplane2(30*0.8,count2);
     count2=count2+1;
     if(count2>900){
    count2=0;
    }*/
    word();
    word2();
}


function drawBairplane(x,y) {
    image(img4);
}

/*function drawBairplane2(x,y) {
    ellipse(50,50,50,50);
}*/
function word(){
    fill(0);
    textSize(36);
    textFont("Helvetica");
    text("1P  48400", 10, 40);

}
function word2(){
    fill(0);
    textSize(36);
    textFont("Helvetica");
    text("CREDIT:8", 600, 870);
}