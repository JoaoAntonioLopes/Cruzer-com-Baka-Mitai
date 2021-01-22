//vars Ator
let yAtor = 373;
let xAtor = 100;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 25, 25);
}
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;  
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}
function verificaColisao(){
  
  for(i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimento, altura, xAtor, yAtor, 15)
    if(colisao){
      colidiu();
      if(meusPontos > 0){
        meusPontos--;         
        }
    }
  }
}
function colidiu(){
  retornaPosicaoInicial();
  somColisao.play();
}
function incluiPontos(){

  fill(51);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
  
}

function retornaPosicaoInicial(){
  yAtor = 370;
}

function marcaPontos(){
if(yAtor < 10){
    meusPontos++;
    retornaPosicaoInicial();
    somPonto.play();
  }  
}

function podeSeMover(){
  return yAtor < 366;
}