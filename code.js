var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a0581833-1508-465d-9d64-6b375a1745b1","c6ca8e9b-03a5-464a-9946-d7a4cec2b52f","d6667f39-5296-4b41-b249-18c0ba8268f2","8923f2f3-a8d6-4ab8-9c47-85dbcd4008d8","b0fa07d5-a7f6-4573-a7f7-ffe42a2b655f","f907dddd-ffa1-408e-8a18-7cbb108fbdd2","b4e83207-a737-4b71-9b69-122a6599e21a","64fcc39d-4d02-4d35-8be1-4247bc935908","fa7ed0cd-5b1d-4397-9abc-0bdab60906d6","719e8f42-9e58-47f9-97f5-f6cd34608191"],"propsByKey":{"a0581833-1508-465d-9d64-6b375a1745b1":{"name":"1","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"YIMc6LWkjk9S941RPmsnKGSYIx2nlu7y","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/a0581833-1508-465d-9d64-6b375a1745b1.png"},"c6ca8e9b-03a5-464a-9946-d7a4cec2b52f":{"name":"2","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"qRviNOn79gkLbTT1L.jWkCCmGjfsIpq2","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/c6ca8e9b-03a5-464a-9946-d7a4cec2b52f.png"},"d6667f39-5296-4b41-b249-18c0ba8268f2":{"name":"3","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"d4Rqfhrq3pT69eGyJxcrXpQoLiXbB3Op","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/d6667f39-5296-4b41-b249-18c0ba8268f2.png"},"8923f2f3-a8d6-4ab8-9c47-85dbcd4008d8":{"name":"4","sourceUrl":null,"frameSize":{"x":380,"y":398},"frameCount":1,"looping":true,"frameDelay":12,"version":"OSLHr1Xu0n1v1KqyxA.AQPwvrBMjx4.A","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":398},"rootRelativePath":"assets/8923f2f3-a8d6-4ab8-9c47-85dbcd4008d8.png"},"b0fa07d5-a7f6-4573-a7f7-ffe42a2b655f":{"name":"alien1","sourceUrl":"assets/api/v1/animation-library/gamelab/9JYjie5F3_Lm0Aps_0hUm6YBP9UPp5ek/category_retro/retroship_02.png","frameSize":{"x":394,"y":333},"frameCount":1,"looping":true,"frameDelay":2,"version":"9JYjie5F3_Lm0Aps_0hUm6YBP9UPp5ek","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":333},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9JYjie5F3_Lm0Aps_0hUm6YBP9UPp5ek/category_retro/retroship_02.png"},"f907dddd-ffa1-408e-8a18-7cbb108fbdd2":{"name":"alien1_2","sourceUrl":"assets/api/v1/animation-library/gamelab/LPGD_.jjkbpO1YRVqOZcE0hYbvVGDDv9/category_retro/retroship_03.png","frameSize":{"x":394,"y":333},"frameCount":1,"looping":true,"frameDelay":2,"version":"LPGD_.jjkbpO1YRVqOZcE0hYbvVGDDv9","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":333},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LPGD_.jjkbpO1YRVqOZcE0hYbvVGDDv9/category_retro/retroship_03.png"},"b4e83207-a737-4b71-9b69-122a6599e21a":{"name":"alien3","sourceUrl":"assets/api/v1/animation-library/gamelab/Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q/category_retro/retroship_13.png","frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ne_Exd13wIXMaZMlMRodwiIjvSGER29Q/category_retro/retroship_13.png"},"64fcc39d-4d02-4d35-8be1-4247bc935908":{"name":"alien3_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png","frameSize":{"x":392,"y":392},"frameCount":1,"looping":true,"frameDelay":2,"version":"gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":392},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gcZWNcMX5xnMb9.sFAr7M7ntYsq_g.yA/category_retro/retroship_12.png"},"fa7ed0cd-5b1d-4397-9abc-0bdab60906d6":{"name":"alien2","sourceUrl":"assets/api/v1/animation-library/gamelab/KpCgRTKx03gokZbOx3UQ94LKooyuP6eo/category_retro/retroship_07.png","frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"KpCgRTKx03gokZbOx3UQ94LKooyuP6eo","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KpCgRTKx03gokZbOx3UQ94LKooyuP6eo/category_retro/retroship_07.png"},"719e8f42-9e58-47f9-97f5-f6cd34608191":{"name":"alien2_2","sourceUrl":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png","frameSize":{"x":385,"y":283},"frameCount":1,"looping":true,"frameDelay":2,"version":"g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":385,"y":283},"rootRelativePath":"assets/api/v1/animation-library/gamelab/g5oABvfMdI51LfKaIk8Ody01cBqBF_Gd/category_retro/retroship_08.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var parede = createSprite(398,200,3,500);
parede.shapeColor='white';

var parede2 = createSprite(2,200,3,500);
parede2.shapeColor='white';

var parede3 = createSprite(200,200,500,3);
parede3.shapeColor='white';

var parede4 = createSprite(200,315,500,3);
parede4.shapeColor='white';

var parede5 = createSprite(200,70,500,3);
parede5.shapeColor='white';

var plane;
plane = createSprite(195,370,20,20);
plane.setAnimation('1');
plane.scale='0.125';

var chegada = createSprite(200,5,80,10);
chegada.shapeColor='yellow';

var alien1;
alien1 = createSprite(60,310,20,20);
alien1.setAnimation('alien1');
alien1.scale='0.11';

var alien2;
alien2 = createSprite(340,195,20,20);
alien2.setAnimation('alien2');
alien2.scale='0.11';

var alien3;
alien3 = createSprite(60,70,20,20);
alien3.setAnimation('alien3');
alien3.scale='0.11';


var score1 = 0;
var score2 = 0;


var gameState = 'serve';
function draw() {
  background('lightblue');
  
  if (gameState == 'serve'){
    
    textSize(18);
    fill("green");
    text('{ Presione O para começar }',85,250);
    rebater();
    
    if (keyDown('o')){
      alien1.velocityX=+12;
      alien2.velocityX=-12;
      alien3.velocityX=+12;
      gameState = 'play';
    }
    
  }
  
  if (gameState == 'play') {
    
    fill('blue');
    text('Objetivos: ' +score2,20,370);
    fill("red");
    text('Derrotas: '  +score1,300,370);
    planeMove();
    rebater();
    touching();
    textSize('14');
    
    if (alien3.isTouching(parede)){
      alien3.setAnimation('alien3_1');
    }
    
    if (alien3.isTouching(parede2)){
      alien3.setAnimation('alien3');
    }
    
    if (alien2.isTouching(parede)){
      alien2.setAnimation('alien2');
    }
    
    if (alien2.isTouching(parede2)){
      alien2.setAnimation('alien2_2');
    }
    
    if (alien1.isTouching(parede)){
      alien1.setAnimation('alien1_2');
    }
    
    if (alien1.isTouching(parede2)){
      alien1.setAnimation('alien1');
    }
    
    
  }
  
  if (gameState == 'End') {
    
    alien1.velocityX=0;
    alien2.velocityX=0;
    alien3.velocityX=0;
    
    textSize(18);
    fill("red");
    text('Fim de jogo',150,190);
    
    textSize(18);
    fill("yellow");
    text('{ Presione I para ir novamente }',70,290);
    
    rebater();
    if (keyDown('I')){
      alien1.y=310;
      alien1.x=60;
      alien2.y=195;
      alien2.x=340;
      alien3.y=70;
      alien3.x=60;
      gameState = 'serve';
      score1=0;
      score2=0;
    }
  }
  
  if (gameState == 'Win'){
    alien1.velocityX=0;
    alien2.velocityX=0;
    alien3.velocityX=0;
   
    alien1.y=310;
    alien1.x=60;
    alien2.y=195;
    alien2.x=340;
    alien3.y=70;
    alien3.x=60;
   
   textSize(18);
   fill("blue");
   text('Voçê ganhou parabéns!!',100,200);
   
   textSize(18);
    fill("yellow");
    text('{ Presione I para ir novamente }',60,290);
   
   if (keyDown('I')){
      alien1.y=310;
      alien1.x=60;
      alien2.y=195;
      alien2.x=340;
      alien3.y=70;
      alien3.x=60;
      gameState = 'serve';
      score1=0;
      score2=0;
    }
  }
  
 drawSprites();
}
function touching(){
  
 if (plane.isTouching(alien1)||plane.isTouching(alien2)||plane.isTouching(alien3)) {
   plane.y=370;
   plane.x=195;
   score1=score1+1;
   playSound( "assets/category_hits/vibrant_game_hit_poof_dissolve_2_up.mp3",false);
 }
 
 if (plane.isTouching(chegada)) {
   plane.y=370;
   plane.x=195;
   score2=score2+1;
   playSound( "assets/category_explosion/air_explode_bonus_6.mp3");
 }
 
 if (score1 == 20){
   gameState = 'End';
   playSound( "assets/category_music/game_over_2.mp3",false);
 }
 
 if (score2 == 5){
   gameState = 'Win';
    playSound( "assets/category_music/level_up_brightly_1.mp3",false);
 }
 
}

function planeMove(){
  if (keyDown('up')) {
    plane.y=plane.y-3;
    plane.setAnimation('1');
  }
  
  if (keyDown('down')) {
    plane.y=plane.y+3;
    plane.setAnimation('2');
  }
  
  if (keyDown('right')) {
    plane.x=plane.x+3;
    plane.setAnimation('3');
  }
  
  if (keyDown('left')) {
    plane.x=plane.x-3;
    plane.setAnimation('4');
  }
}

function rebater(){
  createEdgeSprites();
  alien1.bounceOff(edges);
  alien2.bounceOff(edges);
  alien3.bounceOff(edges);
  plane.bounceOff(bottomEdge);
  plane.bounceOff(leftEdge);
  plane.bounceOff(rightEdge);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
