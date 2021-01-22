//vars imagens e sons
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let trilha;
let somPonto;
let somColisao;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro-1b.png");
  imagemCarro5 = loadImage("imagens/carro-2b.png");
  imagemCarro6 = loadImage("imagens/carro-3b.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  trilha = loadSound("sons/Yakuza 0_5_Kiwami - Baka Mitai (Kazuma Kiryu).mp3");
  somPonto = loadSound("sons/very-nice.mp3");
  somColisao = loadSound("sons/roblox-death-sound_1.mp3");
}
