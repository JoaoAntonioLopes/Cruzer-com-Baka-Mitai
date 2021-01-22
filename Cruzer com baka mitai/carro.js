
let xCarros = [600, 600, 600, 0, 0, 0];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 3, 2.5, 5, 2.3, 4.5];
let comprimento = 50;
let altura = 40;
function mostraCarro(){
  for(let i = 0; i< imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, altura);   
  }
}
// incrementar randomizer de velocidade
function movimentaCarro(){
  for(let i = 0; i < 3; i++){   
  xCarros[i] -= velocidadeCarros [i];
    if (xCarros[i] <= -50){
      xCarros[i] = 600;
    }
  }
  for(let i = 3; i < 6; i++){   
  xCarros[i] += velocidadeCarros [i];
    if (xCarros[i] >= 650){
      xCarros[i] = 0;
    }
  }
}
