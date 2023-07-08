let personagem
let grama 

const tamanho = 64

let x = 64
let y = 64

let andarX= 0
let andarY= 0 

let velocidade = 64

let botao



function setup() {
  createCanvas(576, 576)
  
  personagem = loadImage('person.png')
  grama = loadImage ('grass.png')  
}

function draw() {
  background(220) 
  
  if(andarX < 0 ){
    andarX=0
     }
  if ( andarY < 0){
    andarY=0
  }
    if (andarX>tamanho*8){
      andarX=tamanho*8
    }
  
    if (andarY> tamanho*8) {
      andarY= tamanho*8
    }
    
  for(let i = 0; i < 9; i++) {
   
      for(let j = 0; j < 9; j++) 
    image (grama, x*i , y*j , tamanho, tamanho )
  }

  image (personagem,andarX,andarY, tamanho, tamanho)


if(andarX === tamanho*8 && andarY === tamanho*8){
  rect(200,128,256,256) 

  text( 'GANHOU',300,300 )
  
  botao= createButton('Reiniciar')
 botao.position( 200,350)
  
  botao.mousePressed(reiniciar)
  
  noLoop()
   }
}

  function keyPressed (){
 if(keyIsDown(RIGHT_ARROW)){
   andarX = andarX += velocidade
  }  
 if(keyIsDown(DOWN_ARROW)){
   andarY = andarY += velocidade
  } 
    if(keyIsDown(UP_ARROW)){
   andarY = andarY -= velocidade
  } 
if(keyIsDown(LEFT_ARROW)){
   andarX = andarX -= velocidade
  } 
  }
  

function reiniciar(){
  andarX = 0
  andarY = 0 
  botao.remove()
  loop()
}