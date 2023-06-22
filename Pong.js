//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 13;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raio = dBolinha / 2;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let lRaquete = 10;
let hRaquete = 90;

//variaveis da raquete
let xRaqueteCPU = 585;
let yRaqueteCPU = 150;

//variaveis do meu placar
let meuPlacar = 0;
let placarOponente = 0;

let chanceDeErrar = 0;

//sons do jogo (inclusive voce perdeu! haha)
//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrarBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaçaoBolinha();
  moverRaquete();
  colisaoMinhasRaquetes(xRaquete, yRaquete);
  colisaoMinhasRaquetes(xRaqueteCPU, yRaqueteCPU);
  verificaColisaoBorda();
  mostraRaquete(xRaqueteCPU, yRaqueteCPU);
  incluiPlacar();
  marcarPontos();
  movimentaçaoRaqueteCpu();
}

//Na programação, esta verificação, o "se", é escrito com if
// fazer alguma coisa na programação sempre estara dentro de {}  

//Funções de aparecer alguma formula.

function mostrarBolinha(){
    circle(xBolinha,yBolinha,dBolinha); 
};

function mostraRaquete(x, y){
    rect(x, y, lRaquete, hRaquete);
}

//função de movimentaçao
function movimentaçaoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
};

function moverRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
};

//funções de verificação
function verificaColisaoBorda(){
if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1}
  
if (yBolinha + raio > height || yBolinha - raio < 0){
  velocidadeYBolinha *= -1}
};

function colisaoMinhasRaquetes(x, y) {
    colidiu = collideRectCircle(x,y,lRaquete, hRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
      raquetada.play();
    }
};

function movimentaçaoRaqueteCpu(){
  velocidadeYRaqueteCpu = yBolinha - yRaqueteCPU - lRaquete / 2 - 30;
  yRaqueteCPU += velocidadeYRaqueteCpu
  calculaChanceDeErrar();
};
function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(147,112,219));
    rect(150, 10, 40, 20);
    fill(255);
    text(meuPlacar, 170, 26);
    fill(color(147,112,219));
    rect(450, 10, 40, 20);
    fill(255);
    text(placarOponente, 470, 26);
}
function marcarPontos(){
  if (xBolinha > 590){
    meuPlacar += 1
    ponto.play();
  }
  if (xBolinha < 10){
    placarOponente += 1
    ponto.play();
  }
}

function calculaChanceDeErrar() {
  if (placarOponente >= meuPlacar) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
