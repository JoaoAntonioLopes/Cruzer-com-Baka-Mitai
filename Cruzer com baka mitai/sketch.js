function setup() {
  createCanvas(500, 400);
  trilha.setVolume(0.15);
  trilha.loop();
}



function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  verificaColisao();
  incluiPontos();
  marcaPontos();
}