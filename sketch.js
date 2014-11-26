var img;  
var img3;  
var count;
var count2;
var count3;
var count4;
var count5;
var count6;

var score=0;

var bn=100;
var bID = 0;
var c=[];
var bX=[];
var bY=[];
function preload() {
  soundFormats('wav', 'ogg');
  soundFile = loadSound('a.wav');
}

function setup()
{
    createCanvas(800,900);
    img = loadImage("airplane.png");  
    img2 = loadImage("shield.png");
    img3 = loadImage("bg2.png");
    img4 = loadImage("Bairplane1.png");
    img5 = loadImage("Bairplane2.png");
    img6 = loadImage("Bairplane3.png");
    img7 = loadImage("crowd.png");
    img8 = loadImage("g.png");
    img9 = loadImage("1p.png");
    count=0;
    count2=0;
    count3=0;
    count4=0;
    count5=0;
    count6=0;
    for(var  i = 0 ; i < bn ; i++){
        c[i]=0;
    }
}

function draw()
{
    /*background(0);

    background(img3);*/
    drawBackground(400,count4);
    count4=count4+1;
    if(count4>900){
        count4=0;
    }
    drawCroud(400,count6);
    count6=count6+1;
    if(count6>900){
        count6=0;
    }


    


    //비행기
    image(img, mouseX - 76, mouseY - 62);

    //쉴드
    var duration = 4500;
    var timing = (new Date()%duration)/duration;
    image(img2, mouseX + Math.cos(timing*4*PI)*100 - 15, 
        mouseY + Math.sin(timing*4*PI)*100 - 14)

    //적 비행기
    drawBairplane(80,count*3);
    count=count+1;
    if(count>900){
        count=0;
    }
    
    //적 비행기2
    drawBairplane2(650,count2*5);
    count2=count2+1;
    if(count2>900){
        count2=0;
    }

    //적 비행기3
    drawBairplane3(400,count3*2);
    count3=count3+1;
    if(count3>900){
        count3=0;
    }
    
    //적 비행기4
    drawBairplane4(300,300+count6*2);
    count6=count6+1;
    if(count6>900){
        count6=0;
    }
    noStroke();
    noFill();
    ellipse(80,count,200,200);
    noStroke();
    noFill();
    ellipse(650,count2*2,200,200);
    noStroke();
    noFill();
    ellipse(400,count3*0.8,200,200);
    word();
    word2();
    drawGa();
    drawPa();

    fill(255,255,0);
    for(var i = 0 ; i < bn ; i++){

        if(c[i]>0){
            c[i]+=5;
            ellipse(bX[i],bY[i]-c[i],10,20);
            if(dist(80,count*3,bX[i],bY[i]-c[i])<100){
                count =-500;
                c[i]=0;
                score +=20;
            }
            if(dist(650,count2*5,bX[i],bY[i]-c[i])<100){
                count2 =-500;
                c[i]=0;
                score +=30;
            }
            if(dist(400,count3*2,bX[i],bY[i]-c[i])<100){

                count3 =-500;
                c[i]=0;
                score +=120;

            }
            if(dist(300,300+count6*2,bX[i],bY[i]-c[i])<100){

                count6 =-500;
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
function drawBackground(x,y){
    image(img3,x-img3.width/2,y-img3.height/2);

}


function drawBairplane(x,y) {
    image(img4,x-img4.width/2,y-img4.height/2);
}

function drawBairplane2(x,y) {
   image(img5,x-img5.width/2,y-img5.height/2);
}

function drawBairplane3(x,y) {
    image(img6,x-img6.width/2,y-img6.height/2);
}
function drawBairplane4(x,y) {
    image(img4,x-img4.width/2,y-img4.height/2);
}
function drawCroud(x,y){
    image(img7,x-img7.width/2,y-img7.height/2);
}

function word(){
    fill(0);
    textSize(36);
    textFont("Helvetica");
    text("1P : "+score, 200, 40);
}

function word2(){
    fill(0);
    textSize(36);
    textFont("Helvetica");
    text("CREDIT:8", 600, 870);
}

function mouseClicked(){
    soundFile.play();

    bX[bID]=mouseX;
    bY[bID]=mouseY-70;
    c[bID]=1;
    bID++;
    if(bID >= bn){
        bID = 0;
    }

}
function drawGa(){
    image(img8,10,100);
}
function drawPa(){
    image(img9,10,870);
}


function dist(bx,by,ex,ey){
    var d;
    d = sqrt(pow((bx-ex),2)+pow((by-ey),2));
    return d;
}