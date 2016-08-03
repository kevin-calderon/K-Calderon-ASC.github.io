var gameOver = false;
var blobbyBoy;

function setup() {
	createCanvas(600,600);
	blobbyBoyImg = loadImage("blobby-boy.png");
	blobbyBoy = createSprite(300, 500);
	blobbyBoy.addImage(blobbyBoyImg);
	blobbyBoy.scale = .1;
	background(0);
	fill(0,255,0);
	rect(0,500,600,100);
	camera.on();
}

var blobbyBoyMovements = function() {
	if(keyWentDown("d")){
		blobbyBoy.position.x += 1;
		camera.position.x = blobbyBoy.position.x ;
	}
}

function draw() {
	drawSprites();
	if(gameOver === false) {
		blobbyBoyMovements();
	}
}