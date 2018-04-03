//Variables de especies

//ELEFANTES
var EMacho;
var EHembra;
var EHijo;
//Contador de hijos
var EHijos = 0;

//PAJAROS
var PMacho;
var PHembra;
var PHijo;

//JIRAFA
var JMacho;
var JHembra;

//Hojas 
var H1;
var H2; 
var H3;
var H4;



//Variables de imagenes
//Fondo 
var Fondo;

//Variables de sonido
//Canción del rey león 
var ReyLeon;
//Elefante
var Sele;
//Jirafa masticando
var MJira;
//Guarda el valor actual del tiempo de la canción
var TiempoC;

//VARIABLES DE DIRRECIÓN PAJAROS
//Variable de dirreción especie masculina, y
var dirMy = 1;
//Variable de dirreción especie femenina, y
var dirHy = 1;

//Variable que mueve el cuello y cabeza de la jirafa hembra
var l = 0;
//Variable contador de comidas de la jirafa
var Comidas = 0;

function preload()
{
  //IMAGENES
  //Imagen de fondo
  Fondo = loadImage('Imagenes/sabana-africana.jpg');
  
  //SONIDOS
  //Canción del rey león
  ReyLeon = loadSound('Sonido/El Rey León El círculo de la vida.mp3 ');
  //Elefante
  Sele = loadSound('Sonido/Efecto de Sonido - Elefante.mp3');
  //Jirafa masticando 
  MJira = loadSound('Sonido/Apple Bite Sound Effect (Royalty Free).mp3');
  
}

function setup() 
{
  createCanvas(1200,600);
  
  //Reproduce la canción del rey león
  ReyLeon.loop();
  
  //Crea las especies 
  EMacho = new Elefante(1);
  EHembra = new Elefante(2);
  
  PMacho = new Pajaro(1);
  PHembra = new Pajaro(2);
  
  JMacho = new Jirafa(1);
  JHembra = new Jirafa(2);
  
  H1 = new Hoja(1);
  H2 = new Hoja(2);
  H3 = new Hoja(3);
  H4 = new Hoja(4);
}

function draw() 
{
  //Color del cielo
  background(41,132,189);
  
  //Dibuja el fondo
  image(Fondo,0,0,1200,600);
  
   stroke(0);
  //Dibuja las especies
  //Elefante
  EMacho.dibujar();
  EHembra.dibujar();
  
  //Crea un hijo por medio de la distancia entre los elefantes macho y hembra
  if(dist(EMacho.x,EMacho.y,EHembra.x,EHembra.y) < 200 && EHijos == 0)
  {
    EHijo = new Elefante(3);
    EHijos++;
    Sele.play();
    //Guarda el valor actual del tiempo de la canción
    TiempoC = Sele.currentTime();
    if(TiempoC > 2)
    {
      Sele.stop(); 
    }
  }
  
  //Crea un solo hijo lefante
  if(EHijos != 0)
  {
    EHijo.dibujar();
    EHijo.moverse();
  }
  
   //Dibuja las especies
  
  PMacho.dibujar();
  PHembra.dibujar();
  
  JMacho.dibujar();
  JHembra.dibujar();
  
  //Mueve las especies
  //Elefante
  EMacho.moverse();
  EHembra.moverse();
  
  //Hace que se agarren de cola y trompa los elefantes luego de tener un hijo
  if(dist(EMacho.x,EMacho.y,EHembra.x,EHembra.y) < 200 && EHijos == 1)
  {
    EMacho.x = EMacho.x - 2;
    EHembra.x = EHembra.x -2;
    EHijo.x = EHijo.x -2;
  }
  
  //Mueve las especies
  PMacho.moverse();
  PHembra.moverse();
  
  JMacho.moverse();
  JHembra.moverse();
  
  //Cambia la posicion al presionar de la jirafa hembra
  if(mouseIsPressed)
  {
    l = mouseX;
    l = mouseY;
  }
    
  //Arbol 
  fill(150,75,0);
  //Triangulos parte inferior
  triangle(850,600,1000,600,910,550);
  //Tronco
  rect(900,300,50,300);
  //Rama izquierda
  triangle(900,300,950,300,800,200);
  //Rama deredcha
  triangle(900,300,950,300,1050,200);

  //Dibuja las hojas 
  //Hoja 1 de izquierda a derecha 
  H1.dibujar();
  //Hoja 2 de izquierda a derecha 
  H2.dibujar();
  //Hoja 3 de izquierda a derecha 
  H3.dibujar();
  //Hoja 4 de izquierda a derecha 
  H4.dibujar();
  
  //Hace que se la jirafa hembra las hojas
  if(dist(JHembra.x,JHembra.y,H1.x,H1.y) < 80 && Comidas == 3)
  {
    H1.morir();
    //Sonido de masticar
    MJira.play();
    Comidas ++;
  }
  //Hace que se la jirafa hembra las hojas
  if(dist(JHembra.x,JHembra.y,H2.x,H2.y) < 30 && Comidas == 2)
  {
    H2.morir();
    //Sonido de masticar
    MJira.play();
    Comidas ++;
  }
  //Hace que se la jirafa hembra las hojas
  if(dist(JHembra.x,JHembra.y,H3.x,H3.y) < 30 && Comidas == 1)
  {
    H3.morir();
    //Sonido de masticar
    MJira.play();
    Comidas ++;
  }
  //Hace que se la jirafa hembra las hojas
  if(dist(JHembra.x,JHembra.y,H4.x,H4.y) < 30 && Comidas == 0)
  {
    H4.morir();
    //Sonido de masticar
    MJira.play();
    Comidas ++;
  }
  
}

//ELEFANTE

function Elefante(_genero)
{
  //CARACTERISTICAS
  
  //Posición x, comando para generar un valor alearotio cada vez que se hace play
  this.x = random(0,width);
  
  //Posición y
  this.y = 420;
  
  //Genero
  this.genero = _genero;
  
  //Dibujar
  this.dibujar = function()
  {
    //Color segun el genero (Especie masculina)
    if(this.genero == 1)
    {
      fill(120);
    }
    //Color segun el genero (Especie femenina)
    if(this.genero == 2)
    {
      fill(190);
    }
    //Color si es un hijo
    if(this.genero == 3)
    {
      fill(240);
    }
    
    //TROMPA 
    //Punta
    triangle(this.x,this.y,this.x-5,this.y+25,this.x+5,this.y+20);
    //Codo
    beginShape();
     vertex(this.x-5,this.y+25);
     vertex(this.x+5,this.y+20);
     vertex(this.x+10,this.y+25);
     vertex(this.x+10,this.y+40);
    endShape(CLOSE);
    //Cuerpo
    beginShape();
     vertex(this.x+10,this.y+25);
     vertex(this.x+10,this.y+40);
     vertex(this.x+20,this.y+30);
     vertex(this.x+40,this.y-20);
     vertex(this.x+30,this.y-55);
    endShape(CLOSE);
  
    //PATAS 
    //Delantera anteior
    triangle(this.x+100,this.y+60,this.x+80,this.y+60,this.x+80,this.y+10);
    //Delantera posterior
    triangle(this.x+80,this.y+55,this.x+80,this.y+10,this.x+70,this.y+50);
    //Traseras 
    rect(this.x+140,this.y+20,45,40);
  
    //COLA
    //Cuerpo
    beginShape();
     vertex(this.x+190,this.y+20);
     vertex(this.x+185,this.y+25);
     vertex(this.x+200,this.y+45);
     vertex(this.x+200,this.y+35);
    endShape(CLOSE);
    //Punta
    beginShape();
     vertex(this.x+200,this.y+45);
     vertex(this.x+200,this.y+35);
     vertex(this.x+210,this.y+30);
     vertex(this.x+210,this.y+40);
    endShape(CLOSE);

    //CUERPO
    //Parte trasera
    beginShape();
     vertex(this.x+170,this.y-20);
     vertex(this.x+130,this.y+20);
     vertex(this.x+160,this.y+60);
     vertex(this.x+190,this.y+20);
    endShape(CLOSE);
    //Parte inferior
    triangle(this.x+70,this.y-10,this.x+160,this.y,this.x+100,this.y+60);
    //Parte superior
    beginShape();
     vertex(this.x+70,this.y-10);
     vertex(this.x+160,this.y);
     vertex(this.x+170,this.y-20);
     vertex(this.x+120,this.y-60);
    endShape(CLOSE);
  
    //CABEZA
    //Cara 
    beginShape();
     vertex(this.x+40,this.y-20);
     vertex(this.x+30,this.y-55);
     vertex(this.x+70,this.y-85);
     vertex(this.x+70,this.y-10);
    endShape(CLOSE);
    //Oreja trasera
    beginShape();
     vertex(this.x+70,this.y-85);
     vertex(this.x+30,this.y-55);
     vertex(this.x+60,this.y-90);
     vertex(this.x+105,this.y-100);
     vertex(this.x+95,this.y-85);
    endShape(CLOSE);
    //Oreja frontal
    beginShape();
     vertex(this.x+70,this.y-10);
     vertex(this.x+70,this.y-85);
     vertex(this.x+120,this.y-90);
     vertex(this.x+135,this.y-45);
     vertex(this.x+95,this.y+10);
    endShape(CLOSE);
  }
  
  //HABILIDADES
  
  //Moverse
  this.moverse = function()
  {
    //Rapidez segun el genero (Especie masculina)
    if(this.genero == 1)
    {
      this.x = this.x - (random(0.1,1.5));
      if(this.x <= -210)
      {
        this.x = width;
      }
    }
    //Rapidez segun el genero (Especie femenina)
    if(this.genero == 2)
    {
      this.x = this.x - (random(0.1,1));
      if(this.x <= -210)
      {
        this.x = width;
      }
    }
    //Rapidez si es hijo
    if(this.genero == 3)
    {
      this.x = this.x - (random(0.1,2));
      if(this.x <= -210)
      {
        this.x = width;
      }
    }
  }
}

//PAJARO

function Pajaro (_genero)
{
  //CARACTERISTICAS
  
  //Posición x, comando para generar un valor alearotio cada vez que se hace play
  this.x = random(0,width);
  
  //Posición y, comando para generar un valor alearotio cada vez que se hace play
  this.y = random(100,400);
  
  //Genero
  this.genero = _genero;
  
  //Dibujar
  this.dibujar = function()
  {
    //Color segun el genero (Especie masculina)
    if(this.genero == 1)
    {
      fill(34,139,34);
    }
    //Color segun el genero (Especie femenina)
    else
    {
      fill(127,255,0);
    }
    
    //Ala posterior
    triangle(this.x-15,this.y-10,this.x-30,this.y+10,this.x-40,this.y+10);
    //Ala anterior 
    triangle(this.x,this.y,this.x-40,this.y+10,this.x-35,this.y+35);
    //Cuerpo 
    beginShape();
     vertex(this.x-40,this.y+10);
     vertex(this.x-60,this.y+15);
     vertex(this.x-55,this.y+35);
     vertex(this.x-40,this.y+45);
     vertex(this.x-30,this.y+40);
    endShape(CLOSE);
    //Cola 
    triangle(this.x-30,this.y+40,this.x-40,this.y+45,this.x-20,this.y+65);
    //Pico
    triangle(this.x-65,this.y-5,this.x-80,this.y,this.x-60,this.y+5);
    //Cabeza
    beginShape();
     vertex(this.x-40,this.y+10);
     vertex(this.x-60,this.y+15);
     vertex(this.x-65,this.y-5);
     vertex(this.x-45,this.y-5);
    endShape(CLOSE);
  }
  
  //HABILIDADES
  
  //Moverse
  this.moverse = function()
  {    
    //Rapidez segun el genero (Especie masculina)
    if(this.genero == 1)
    {
      this.x = this.x - 3;
      this.y = this.y - 4 * dirMy;
      if(this.x <= 0 || this.x >= width)
      {
        this.x = width;
      }
      if(this.y <= 100 || this.y >= height-200)
      {
        dirMy = dirMy * -1;
      }
    }
    //Color segun el genero (Especie femenina)
    else
    {
      this.x = this.x - 4;
      this.y = this.y - 5 * dirHy;
      if(this.x <= 0 || this.x >= width)
      {
        this.x = width;
      }
       if(this.y <= 100 || this.y >= height-200)
      {
        dirHy = dirHy * -1;
      }
    }
  }
}

//JIRAFA

function Jirafa (_genero)
{
  //CARACTERISTICAS
  
  //Posición x, comando para generar un valor alearotio cada vez que se hace play
  this.x = random(0,400);
  
  //Posición y
  this.y = 310;
  
  //Genero
  this.genero = _genero;
  
  //Dibujar
  this.dibujar = function()
  {
    //Color segun el genero (Especie masculina)
    if(this.genero == 1)
    {
      fill(163,74,38);
    }
    //Color segun el genero (Especie femenina)
    else
    {
      fill(241,184,74);
    }
    
  //Cuello
  //Parte larga 
  beginShape();
   vertex(this.x-30+l,this.y-20+l);
   vertex(this.x-45+l,this.y-20+l);
   vertex(this.x-100,this.y+80);
   vertex(this.x-60,this.y+85);
  endShape(CLOSE);
  //Parte corta
  triangle(this.x-10+l,this.y+l,this.x-40+l,this.y-10+l,this.x-40+l,this.y+l);
  
  //Cabeza 
  //Oreja posterior
  triangle(this.x-55+l,this.y-40+l,this.x-30+l,this.y-30+l,this.x-45+l,this.y-20+l);
  //Oreja anterior
  beginShape();
   vertex(this.x-35+l,this.y-20+l);
   vertex(this.x-45+l,this.y-30+l);
   vertex(this.x-60+l,this.y-20+l);
   vertex(this.x-45+l,this.y-15+l);
  endShape(CLOSE);
  //Cuerno Posterior
  beginShape();
   vertex(this.x-30+l,this.y-20+l);
   vertex(this.x-45+l,this.y-30+l);
   vertex(this.x-30+l,this.y-47+l);
   vertex(this.x-25+l,this.y-47+l);
  endShape(CLOSE);
  //Cuerno anterior 
  beginShape();
   vertex(this.x-35+l,this.y-20+l);
   vertex(this.x-45+l,this.y-30+l);
   vertex(this.x-35+l,this.y-45+l);
   vertex(this.x-30+l,this.y-45+l);
  endShape(CLOSE);
  //Cara
  beginShape();
   vertex(this.x+l,this.y+l);
   vertex(this.x-30+l,this.y-30+l);
   vertex(this.x-35+l,this.y-30+l);
   vertex(this.x-40+l,this.y-10+l);
   vertex(this.x-35+l,this.y-5+l);
   vertex(this.x-3+l,this.y+7+l);
  endShape(CLOSE);
  
  //Patas y cola
  //Trasera posterior
  beginShape();
   vertex(this.x-170,this.y+150);
   vertex(this.x-200,this.y+160);
   vertex(this.x-210,this.y+220);
   vertex(this.x-190,this.y+275);
   vertex(this.x-200,this.y+220);
  endShape(CLOSE);
  //Cola 
  beginShape();
   vertex(this.x-200,this.y+140);
   vertex(this.x-190,this.y+170);
   vertex(this.x-210,this.y+190);
   vertex(this.x-215,this.y+210);
   vertex(this.x-225,this.y+220);
   vertex(this.x-225,this.y+200);
   vertex(this.x-215,this.y+180);
  endShape(CLOSE);
  //Trasera anterior
  beginShape();
   vertex(this.x-160,this.y+160);
   vertex(this.x-190,this.y+170);
   vertex(this.x-200,this.y+220);
   vertex(this.x-180,this.y+290);
   vertex(this.x-190,this.y+220);
  endShape(CLOSE);
  //Delantera posterior 
  beginShape();
   vertex(this.x-70,this.y+160);
   vertex(this.x-110,this.y+160);
   vertex(this.x-95,this.y+215);
   vertex(this.x-85,this.y+275);
   vertex(this.x-80,this.y+215);
  endShape(CLOSE);
  //Delantera anterior
  beginShape();
   vertex(this.x-60,this.y+170);
   vertex(this.x-100,this.y+170);
   vertex(this.x-85,this.y+225);
   vertex(this.x-75,this.y+290);
   vertex(this.x-70,this.y+225);
  endShape(CLOSE);
  
  //Cuerpo 
  //Parte 1 de dereha a izquierda 
  beginShape();
   vertex(this.x-100,this.y+80);
   vertex(this.x-60,this.y+85);
   vertex(this.x-60,this.y+170);
   vertex(this.x-100,this.y+170);
   vertex(this.x-110,this.y+100);
  endShape(CLOSE);
  //Parte 2 de derecha a izquierda
  beginShape();
   vertex(this.x-100,this.y+80);
   vertex(this.x-110,this.y+100);
   vertex(this.x-100,this.y+170);
   vertex(this.x-140,this.y+160);
   vertex(this.x-160,this.y+150);
   vertex(this.x-155,this.y+100);
  endShape(CLOSE);
  //Parte 3 de derecha a izquierda
  beginShape();
   vertex(this.x-160,this.y+160);
   vertex(this.x-155,this.y+100);
   vertex(this.x-180,this.y+110);
   vertex(this.x-200,this.y+140);
   vertex(this.x-190,this.y+170);
  endShape(CLOSE);
  }
  
  //HABILIDADES
  
  //Moverse
  this.moverse = function()
  {
    //Rapidez segun el genero (Especie masculina)
    if(this.genero == 1)
    {
      this.x = this.x + (random(0.1,1.5));
      if(this.x >= 830)
      {
        this.x = 830;
      }
    }
    //Color segun el genero (Especie femenina)
    else
    {
      this.x = this.x + (random(0.1,1));
      if(this.x >= 880)
      {
        this.x = 880;
      }
    }
  }
}

//HOJAS 

function Hoja(_Pos)
{
  //CARACTERISTICAS
  
  //posición
  this.pos = _Pos;
  
  //Vivir 
  this.vivo = 1;
  
  //Morir
  this.morir = function()
  {
    //Desaparece
    this.vivo = 0;
  }
  
  //Posición segun numero 
  //Hoja 1 de izquierda a derecha
  if(this.pos == 1)
  {
    this.x = 800;
    this.y = 210;
  }
  //Hoja 2 de izquierda a derecha
  if(this.pos == 2)
  {
    this.x = 830;
    this.y = 240;
  }
  //Hoja 3 de izquierda a derecha
  if(this.pos == 3)
  {
    this.x = 860;
    this.y = 270;
  }
  //Hoja 4 de izquierda a derecha
  if(this.pos == 4)
  {
    this.x = 890;
    this.y = 300;
  }
  
  //Dibujar
  this.dibujar = function()
  {
    if(this.vivo == 1)
    {
      noStroke();
      fill(109,163,49);
      ellipse(this.x,this.y,20,20);
      triangle(this.x-10,this.y,this.x+10,this.y,this.x,this.y+30);
    }
  }
}