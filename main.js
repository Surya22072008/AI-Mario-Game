function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
}

function setup(){
	createCanvas(650,400);
	video  = createCapture(VIDEO);
	video.size(600,300);
	poseNet=ml5.posenet(video,modelloaded);
	poseNet.on('pose',getposes)
}
function draw() {
	game()
	background("#D3D3D3");
if(noseX<300){
marioX=marioX-1;
}
if(noseX>300){
	marioX=marioX+1;
	}
	if(noseY<150){
	marioY=marioY-1;
		}
		if(noseY>150){
	marioY=marioY+1;
			}
image(img,marioX,marioY,40,70);
}
function modelloaded()
{
	console.log("Posenet is initialized ")
}
function getposes(results){
if(results.length>0){
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
	console.log("noseX = "+noseX+" noseY = "+noseY);
}
}





