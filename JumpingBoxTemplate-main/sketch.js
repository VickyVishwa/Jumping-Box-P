var canvas;
var block1,block2,block3,block4;
var music;
var edges;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1=createSprite(100,550,200,30);
    block1.shapeColor="red";
    block2=createSprite(300,550,200,30);
    block2.shapeColor="black";
    block3=createSprite(500,550,200,30);
    block3.shapeColor="green";
    block4=createSprite(700,550,200,30);
    block4.shapeColor="blue"
    box=createSprite(random(200,750),50,25,25);
    box.shapeColor="white";
    box.velocityX=2;
    box.velocityY=-2;



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges);
    if(block1.isTouching(box)&&box.bounceOff(block1)){
      box.shapeColor="red";
      music.play();
    }
    if(block2.isTouching(box)&&box.bounceOff(block2)){
        box.shapeColor="black";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(block3.isTouching(box)&&box.bounceOff(block3)){
        box.shapeColor="green";
    } 
    if(block4.isTouching(box)&&box.bounceOff(block4)){
        box.shapeColor="blue";
    }
    drawSprites();



    //add condition to check if box touching surface and make it box
}
