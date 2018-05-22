//Variables de estado 
var estado = 0;

var ini = 1;
var ins = 2;
var nvl = 3; 
var fin = 4;

//Variables para que el juego funcione
var mic;
var x = 0;
var maxV = 3;
var maxV2 = 7;

//Variables del juego
var pun = 0;
var persona;
var seg;

//Variables de archivos
var yoshiIMG;
var hongoIMG;
var nubeIMG;
var cubo;
var huevo;
var fantasmaIMG;
var muro;
var tipogra;

//Variables de especies "arreglos"
var hongos = [];
var nubes = [];
var hongosJ = [];
var nubesJ = [];
var fantasmas = [];

function preload()
{
  //Carga las imagenes
  yoshiIMG = loadImage('archi/yoshi.png');
  hongoIMG = loadImage('archi/hongo.png');
  nubeIMG = loadImage('archi/nube.png');
  cubo = loadImage('archi/cubo.png');
  huevo = loadImage('archi/huevo.png');
  fantasmaIMG = loadImage('archi/fantasma.png');
  muro = loadImage('archi/muro.jpg');
  tipogra = loadFont('archi/Watchword_thin_demo.otf');
}

function setup() 
{
  //Crea la visualización del juego segun el tamaño de la pantalla
  createCanvas(windowWidth, windowHeight);
  
  //El estado del juego comienza en 0 (introducción)
  estado = ini;
  
  //Crea la entrada de audio
  mic = new p5.AudioIn();
  //Inicia el microfono
  mic.start();
  
  //Crea el arreglo de hongos
  for(var i = 0; i < 11; i ++)
  {
    hongos[i] = new hongo();
  }
  
  //Crea el arreglo de nubes
  for(var i = 0; i < 5; i ++)
  {
    nubes[i] = new nube();
  }
  
  //Crea el arreglo de hongos del juego
  for(var i = 0; i <6; i ++)
  {
    hongosJ[i] = new hongo();
  }
  
  //Crea el arreglo de nubes del juego
  for(var i = 0; i < 7; i ++)
  {
    nubesJ[i] = new nube();
  }
  
  //Crea el arreglo de fantasmas
  for(var i = 0; i < 3; i ++)
  {
    fantasmas[i] = new fantasma();
  }
  
  //Crea el personaje 
  personaje = new yoshi();
}

function draw() 
{ 
  //Crea la introducción
  if(estado == ini)
  {
    background(0,191,255);

    //Crea la lluvia de hongos
    for(var i = 0; i < hongos.length; i ++)
    {
      hongos[i].dibujar();
      hongos[i].mover();
    }
    
    //Crea las nubes
    for(var i = 0; i < nubes.length; i ++)
    {
      nubes[i].dibujar();
      nubes[i].mover();
    }
    
    //Crea la imagen de yoshi en la parte inferrior izquierda de la pantalla 
    image(yoshiIMG,0, windowHeight-350,200,350);
    
    //Crea los textos centrados
    fill(255);
    textAlign(CENTER);
    textSize(60);
    textFont('Watchword Thin Demo');
    text("MEDIOS INTERACTIVOS", width/2, height/2);
    textSize(40);
    text("Iván Matheo", width/2, height/2+60);
  }
  
  if(estado == ins)
  {
    background(0);
    
    //Crea el titulo centrado
    fill(255);
    textAlign(CENTER);
    textSize(60);
    textFont('Watchword Thin Demo');
    text("INSTRUCCIONES", width/2, height/7);
    
    //Imagenes
    image(yoshiIMG,width/12,(height/7)*2,150,200);
    image(hongoIMG,width/12,(height/7)*5,150,150);
    image(fantasmaIMG,width/2,(height/7)*1.5,150,150);
    image(huevo,width/2,(height/7)*3.5,150,300);
    
    //Textos
    textSize(40);
    textFont('Watchword Thin Demo');
    textAlign(LEFT);
    text("Este eres tu", width/4,(height/5)*2);
    text("Esto te hace correr más rapido", width/4,(height/7)*6);
    text("Este te quiere matar :(",(width/3)*2,(height/7)*2.5);
    text("Con esto ganas",(width/3)*2,(height/7)*4.5);
  }
  
  if(estado == nvl)
  {
    background(0,191,255);
    
    //Crea la lluvia de hongos
    for(var i = 0; i < nubesJ.length; i ++)
    {
      nubesJ[i].dibujar();
      nubesJ[i].moverJ();
    }
    
    //Crea la lluvia de hongos
    for(var i = 0; i < hongosJ.length; i ++)
    {
      hongosJ[i].dibujar();
      hongosJ[i].moverJ();
    }
    
    //Crea los fantasmas
    for(var i = 0; i < fantasmas.length; i ++)
    {
      fantasmas[i].dibujar();
      fantasmas[i].mover();
    }
    
    personaje.dibujar();
    personaje.mover();
    personaje.salta();
    
    //Crea el piso 
    image(muro,0,height-50,50,50);
    image(muro,50,height-50,50,50);
    image(muro,100,height-50,50,50);
    image(muro,150,height-50,50,50);
    image(muro,200,height-50,50,50);
    image(muro,250,height-50,50,50);
    image(muro,300,height-50,50,50);
    image(muro,350,height-50,50,50);
    image(muro,400,height-50,50,50);
    image(muro,450,height-50,50,50);
    image(muro,500,height-50,50,50);
    image(muro,550,height-50,50,50);
    image(muro,600,height-50,50,50);
    image(muro,650,height-50,50,50);
    image(muro,700,height-50,50,50);
    image(muro,750,height-50,50,50);
    image(muro,800,height-50,50,50);
    image(muro,850,height-50,50,50);
    image(muro,900,height-50,50,50);
    image(muro,950,height-50,50,50);
    
    //Cuando el personaje come un hongo es mas rapido
    for (var j = 0; j < hongosJ.length; j = j+1) 
    {
      if (personaje.x > hongosJ[j].x
      && personaje.x +200 < hongosJ[j].x + 100
      && personaje.y > hongosJ[j].y
      && personaje.y + 100 < hongosJ[j].y + 100) 
      {
        hongosJ.splice(j, 1);
        x += map(rotationX,-90,90,-maxV2,maxV2);
      }
    }
    
    //Cuando el personaje toca un fantasma muere
    for (var j = 0; j < fantasma.length; j = j+1) 
    {
      if (personaje.x > fantasmas[j].x
      && personaje.x +200 < fantasmas[j].x + 100
      && personaje.y > fantasmas[j].y
      && personaje.y + 100 < fantasmas[j].y + 100) 
      {
        personaje.morir();
      }
    }
    
    //Crea el huevo cando el minuto esta en el segundo 55
    if(seg  >= 55)
    {
      image(huevo,width-150,height-350,150,350);
      if(dist(personaje.x,personaje.y,huevo.x,huevo.y) < 150)
      {
        estado = fin;
      }
    }
  }
  if(estado == fin)
  {
    //Crea los textos centrados
    fill(255);
    textAlign(CENTER);
    textSize(60);
    textFont('Watchword Thin Demo');
    text("¡Ganaste!", width/2, height/2);
  }
  //Guarda los valores de X segun la posición del ipad
  x += map(rotationX,-90,90,-maxV,maxV);
  
  //Guarda el valor del segundo actual 
  seg = second();
}

function touchStarted()
{
  if(estado == ini)
  {
    estado = ins;
  }
  else if(estado == ins)
  {
    estado = nvl;
  }
  else if(estado == fin)
  {
    estado = ini;
  }
}

//ESPECIES

//Hongos 
function hongo()
{
  //Crea dos valores aleatorios para las posiciones 
  this.x = random(0, width-100);
  this.y = random(height, -height);
  
  //Dibuja la imagen del hongo
  this.dibujar = function()
  {
    image(hongoIMG,this.x,this.y,100,100);
  }
  
  //Movimiento de los hongos
  this.mover = function()
  {
    this.y = this.y + 5;
    
    //Cuando los hongos alcanzan la parte mas baja de la pantalla se les asigna un nuevo valor X y Y
    if(this.y >= height)
    {
      this.x = random(0, width-100);
      this.y = random(height, -height);
    }
  }
  
   //Movimiento de los hongos en el juego
  this.moverJ = function()
  {
    this.y = this.y + 1;
    
    //Cuando los hongos alcanzan la parte mas baja de la pantalla se les asigna un nuevo valor X y Y
    if(this.y >= height)
    {
      this.x = random(0, width-100);
      this.y = random(height, -height);
    }
  }
}

//Nubes 
function nube()
{
  //Crea un valor aleatorio para las nubes en la posición X y Y
  this.x = random(0, width-80);
  this.y = random(0,height/4);
  
  //Dibuja la imagen de la nube
  this.dibujar = function()
  {
    image(nubeIMG,this.x,this.y,120,80);
  }
  
  //Movimiento de las nubes
  this.mover = function()
  {
    this.x = this.x + random(-2,2);
  }
  
  //Movimiento de las nubes en el juego
  this.moverJ = function()
  {
    this.x = this.x + random(2,4);
    if(this.x > width)
    {
      this.x = 0;
    }
  }
  
}

//Yoshi 
function yoshi()
{
  //Crea un valor aleatorio para las nubes en la posición X y Y
  this.x = random(0, width-80);
  this.y = 450;
  var vivo = 0;
  
  //Dibuja la imagen de la nube
  this.dibujar = function()
  {
    if(vivo == 0)
    {
      image(yoshiIMG,this.x,this.y,100,200);
    }
  }
  
  //Mueve el personaje de derecha a izquierda
  this.mover = function()
  {
    this.x = this.x + x;
    if(this.x > 900)
    {
      this.x = 900;
    }
    if(this.x < 0)
    {
      this.x = 0;
    }
  }
  
  //Hace saltar al personaje
  this.salta = function()
  {
    //Variable que recibe el valor del volumen del microfono
    var vol = mic.getLevel();
    //Se multiplica el valor del volumen para permitir la visualización
    vol += vol * 1000;
    
    print(vol);
    
    //Hace saltar al personaje 
    this.y = this.y - vol;
    this.y = this.y + 20;
    print(this.y);
  }
  
  //Mata al personaje
  this.morir = function()
  {
    vivo = 1;
  }
}

//fantasmas 
function fantasma()
{
  this.x = random(100, width-100);
  this.y = random(200, height-100);
  this.dirX = 1;
  this.dirY = 1;

  this.dibujar = function() 
  {
    image(fantasmaIMG,this.x,this.y,100,100);
  }

  this.mover = function() {
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;

    if (this.x <= 100 || this.x >= width-100) {
      this.dirX = this.dirX*-1
    }
    if (this.y <= 100 || this.y >= height-200) {
      this.dirY = this.dirY*-1
    }
  }
}


