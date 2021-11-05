var zombie , zombie2 , monster;
var player , player2;
var player_img , player2_img , zombie_img , zombie2_img , monster_img;

function preload(){
  monster_img = loadImage("monster.png");
  zombie_img = loadImage("zombie.png");
  zombie2_img = loadImage("zombie2.png");
  player_img = loadImage("player.png");
}

function setup(){
  canvas = createCanvas(1600,900);
  

  player = createSprite(650,200);
  player.addImage(player_img);
  player.scale = 0.5;

  monster = createSprite(1050,200);
  monster.addImage(monster_img);
  monster.scale = 0.3;

  zombie = createSprite(450,200);
  zombie.addImage(zombie_img);
  zombie.scale = 0.4;

  zombie2 = createSprite(850,200);
  zombie2.addImage(zombie2_img);
  zombie2.scale = 0.5; 
}

function draw(){
background("brown")

player.y = World.mouseY;
player.x = World.mouseX;

//zombie.y = player.y;
//zombie.x = player.x;
//monster.y = player.y;
//monster.x = player.x;
//zombie2.y = player.y;
//zombie2.x = player.x;



drawSprites()
}
