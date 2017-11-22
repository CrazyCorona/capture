var video;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);
	video=createCapture(VIDEO);
	video.size(300,300);
	video.hide();
}

function draw() {

image(video,0,0,width,height);
}
