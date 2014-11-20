var img;  
var img3;  
var count;
var count2;
var count3;

var score=0;

var bn=100;
var bID = 0;
var c=[];
var bX=[];
var bY=[];
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
    count3=0;
    for(var  i = 0 ; i < bn ; i++){
        c[i]=0;
    }
}

function draw()
{
    background(0);
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
    //적 비행기2
     drawBairplane2(600,count2*2);
     count2=count2+1;
     if(count2>900){
    count2=0;
    }

    //적 비행기3
     drawBairplane3(300,count3*0.8);
     count3=count3+1;
     if(count3>900){
    count3=0;
    }
    fill(255,0,0);
    ellipse(300,count3*0.8,200,200);

    word();
    word2();
    
    fill(255,255,0);
    for(var i = 0 ; i < bn ; i++){

        if(c[i]>0){
            c[i]+=5;
            ellipse(bX[i],bY[i]-c[i],5,10);
            if(dist(30,count,bX[i],bY[i]-c[i])<100){
                count =-500;
                c[i]=0;
                score +=20;
            }
            if(dist(600,count2*2,bX[i],bY[i]-c[i])<100){
                count2 =-500;
                c[i]=0;
                score +=30;
            }
            if(dist(300,count3*0.8,bX[i],bY[i]-c[i])<100){

                count3 =-500;
                c[i]=0;
score +=120;

            }

        }
        if(bY[i]-c[i]<0){
            c[i]=0;
        }
    }

    console.log("Score:"+score);
}


function drawBairplane(x,y) {
    image(img4,x,y);
}

function drawBairplane2(x,y) {
    image(img5,x,y);
}

function drawBairplane3(x,y) {
    image(img6,x,y);
}

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

function mouseClicked(){

    bX[bID]=mouseX;
    bY[bID]=mouseY-70;
    c[bID]=1;
    bID++;
    if(bID >= bn){
        bID = 0;
    }

}

function dist(bx,by,ex,ey){
    var d;
    d = sqrt(pow((bx-ex),2)+pow((by-ey),2));
    return d;
}