//Variables de cancion
//Cancion Emoji VIP
var Emoji;
//Variable de creación (Boton play)
var C = 0;
//Variable que guarda el valor que tiene el tiempo de la canción
var TiempoC;

//Imagenes 
//Imagen albun 
var A;
//Imagen espacio
var B;

//Color cuadro negro
var CN = 255;

//Representaciones graficas segun la canción
//EMOJI
//Corazón 1. Parte izquierda en movimiento
//Color
var CCo = 255;
//Corazón central estatico
var CE = 0;
//Fila 1 de arriba hacia abajo
var xCo1 = 80;
var yCo1a = -140;
var yCo1b = -240;
var yCo1c = -340;
var yCo1d = -440;
//Fila 2 de arriba hacia abajo
var xCo2 = 40;
var yCo2a = -180;
var yCo2b = -280;
var yCo2c = -380;
var yCo2d = -480;
var yCo2e = -580;
var yCo2f = -680;
var yCo2g = -780;
//Fila 3 de arriba hacia abajo
var xCo3 = 40;
var yCo3a = -320;
var yCo3b = -420;
var yCo3c = -520;
var yCo3d = -620;
var yCo3e = -720;
var yCo3f = -820;
var yCo3g = -920;
//Fila 4 de arriba hacia abajo
var xCo4 = 80;
var yCo4a = -260;
var yCo4b = -360;
var yCo4c = -460;
var yCo4d = -560;
var yCo4e = -660;
//Fila 5 de arriba hacia abajo
var xCo5 = 120;
var yCo5a = -300;
var yCo5b = -400;
var yCo5c = -500;
//Cuadrado inferior
var xCo6 = 160;
var yCo6a = -340;

var tCo = 40;

//Corazón 2. Parte central y movimiento segun la amplitud
//Variables de amplitud 
var amp;
var nivel;


//Filtro que representa grafcamente la frecuencia de sonido 
var Hz;
var filter, filterHz;

//Cargar las canciones
function preload()
{
  //Canción
  //Emoji VIP de Pegboard Nerds
  Emoji = loadSound('Música/Pegboard Nerds - Emoji VIP [Monstercat Official Music Video].mp3');
  
  //Imagenes
  A = loadImage('Imagenes/4782dd9cb90503f8de4e2ab851daa256.jpg');
  B = loadImage('Imagenes/galaxia,-universo-180834.jpg');
}

function setup() 
{
  createCanvas(800, 900);
  //Cambiar angulo PI a grados 
  angleMode(DEGREES);
  
  //Carga la amplitud
   amp = new p5.Amplitude();
  
  //Cuadricula de apoyo para los botones
  noFill();
  stroke(0);
  var x = 0;
  var y = 30;
  for(var columna = 0; columna < 3; columna ++)
  {
      rect(x,y,50,50);
      x = x + 50;
  }
  
  //Carga el filtro
  filter = new p5.LowPass();
  Hz = new p5.FFT();
}

function draw() 
{
  background(0);
  
  //Imagenes
  //Imagen espacio 
  image(B,0,0,800,900);
  //Imagen de albun
  image(A,600,0,200,200);
  
  //Corazón representativo de Pegboard Nerds
    fill(CCo,0,0);
  
  //Si la canción es activada crea el corazón en movimiento
  if(C == 1)
  {
    //Fila 1 de arriba hacia abajo (Movimiento de fila 1)
    //Cuadrado 1 de izquierda a derecha
    rect(xCo1,yCo1a,tCo,tCo);
    yCo1a = yCo1a + 5;
    if(yCo1a > 140)
    {
      yCo1a = 140;
    }
    //Cuadrado 2 de izquierda a derecha
    rect(xCo1+40,yCo1b,tCo,tCo);
    yCo1b = yCo1b + 5;
    if(yCo1b > 140)
    {
      yCo1b = 140;
    }
    //Cuadrado 3 de izquierda a derecha
    rect(xCo1+120,yCo1c,tCo,tCo);
    yCo1c = yCo1c + 5;
    if(yCo1c > 140)
    {
      yCo1c = 140;
    }
    //Cuadrado 4 de izquierda a derecha
    rect(xCo1+160,yCo1d,tCo,tCo);
    yCo1d = yCo1d + 5;
    if(yCo1d > 140)
    {
      yCo1d = 140;
    }
    
    //Fila 2 de arriba hacia abajo
    //Cuadrado 1 de izquierda a derecha
    rect(xCo2,yCo2a,tCo,tCo);
    yCo2a = yCo2a + 5;
    if(yCo2a > 180)
    {
      yCo2a = 180;
    }
    //Cuadrado 2 de izquierda a derecha
    rect(xCo2+40,yCo2b,tCo,tCo);
    yCo2b = yCo2b + 5;
    if(yCo2b > 180)
    {
      yCo2b = 180;
    }
    //Cuadrado 3 de izquierda a derecha
    rect(xCo2+80,yCo2c,tCo,tCo);
    yCo2c = yCo2c + 5;
    if(yCo2c > 180)
    {
      yCo2c = 180;
    }
    //Cuadrado 4 de izquierda a derecha
    rect(xCo2+120,yCo2d,tCo,tCo);
    yCo2d = yCo2d + 5;
    if(yCo2d > 180)
    {
      yCo2d = 180;
    }
    //Cuadrado 5 de izquierda a derecha
    rect(xCo2+160,yCo2e,tCo,tCo);
    yCo2e = yCo2e + 5;
    if(yCo2e > 180)
    {
      yCo2e = 180;
    }
    //Cuadrado 6 de izquierda a derecha
    rect(xCo2+200,yCo2f,tCo,tCo);
    yCo2f = yCo2f + 5;
    if(yCo2f > 180)
    {
      yCo2f = 180;
    }
    //Cuadrado 7 de izquierda a derecha
    rect(xCo2+240,yCo2g,tCo,tCo);
    yCo2g = yCo2g + 5;
    if(yCo2g > 180)
    {
      yCo2g = 180;
    }
    
    //Fila 3 de arriba hacia abajo
    //Cuadrado 1 de izquierda a derecha
    rect(xCo3,yCo3a,tCo,tCo);
    yCo3a = yCo3a + 5;
    if(yCo3a > 220)
    {
      yCo3a = 220;
    }
    //Cuadrado 2 de izquierda a derecha
    rect(xCo3+40,yCo3b,tCo,tCo);
    yCo3b = yCo3b + 5;
    if(yCo3b > 220)
    {
      yCo3b = 220;
    }
    //Cuadrado 3 de izquierda a derecha
    rect(xCo3+80,yCo3c,tCo,tCo);
    yCo3c = yCo3c + 5;
    if(yCo3c > 220)
    {
      yCo3c = 220;
    }
    //Cuadrado 4 de izquierda a derecha
    rect(xCo3+120,yCo3d,tCo,tCo);
    yCo3d = yCo3d + 5;
    if(yCo3d > 220)
    {
      yCo3d = 220;
    }
    //Cuadrado 5 de izquierda a derecha
    rect(xCo3+160,yCo3e,tCo,tCo);
    yCo3e = yCo3e + 5;
    if(yCo3e > 220)
    {
      yCo3e = 220;
    }
    //Cuadrado 6 de izquierda a derecha
    rect(xCo3+200,yCo3f,tCo,tCo);
    yCo3f = yCo3f + 5;
    if(yCo3f > 220)
    {
      yCo3f = 220;
    }
    //Cuadrado 7 de izquierda a derecha
    rect(xCo3+240,yCo3g,tCo,tCo);
    yCo3g = yCo3g + 5;
    if(yCo3g > 220)
    {
      yCo3g = 220;
    }
    
    //Fila 4 de arriba hacia abajo
    //Cuadrado 1 de izquierda a derecha
    rect(xCo4,yCo4a,tCo,tCo);
    yCo4a = yCo4a + 5;
    if(yCo4a > 260)
    {
      yCo4a = 260;
    }
    //Cuadrado 2 de izquierda a derecha
    rect(xCo4+40,yCo4b,tCo,tCo);
    yCo4b = yCo4b + 5;
    if(yCo4b > 260)
    {
      yCo4b = 260;
    }
    //Cuadrado 3 de izquierda a derecha
    rect(xCo4+80,yCo4c,tCo,tCo);
    yCo4c = yCo4c + 5;
    if(yCo4c > 260)
    {
      yCo4c = 260;
    }
    //Cuadrado 4 de izquierda a derecha
    rect(xCo4+120,yCo4d,tCo,tCo);
    yCo4d = yCo4d + 5;
    if(yCo4d > 260)
    {
      yCo4d = 260;
    }
    //Cuadrado 5 de izquierda a derecha
    rect(xCo4+160,yCo4e,tCo,tCo);
    yCo4e = yCo4e + 5;
    if(yCo4e > 260)
    {
      yCo4e = 260;
    }
    
    //Fila 5 de arriba hacia abajo
    //Cuadrado 1 de izquierda a derecha
    rect(xCo5,yCo5a,tCo,tCo);
    yCo5a = yCo5a + 5;
    if(yCo5a > 300)
    {
      yCo5a = 300;
    }
    //Cuadrado 2 de izquierda a derecha
    rect(xCo5+40,yCo5b,tCo,tCo);
    yCo5b = yCo5b + 5;
    if(yCo5b > 300)
    {
      yCo5b = 300;
    }
    //Cuadrado 3 de izquierda a derecha
    rect(xCo5+80,yCo5c,tCo,tCo);
    yCo5c = yCo5c + 5;
    if(yCo5c > 300)
    {
      yCo5c = 300;
    }
    
    //Cuadrado inferior
    rect(xCo6,yCo6a,tCo,tCo);
    yCo6a = yCo6a + 5;
    if(yCo6a > 340)
    {
      yCo6a = 340;
    }
  
    //Guarda el valor actual del tiempo de la canción
    TiempoC = Emoji.currentTime();
    //Condicional que regresa el fondo del canvas a negro y crea el corazol central que varia su tamaño segun la amplitud
    if(TiempoC > 6)
    {
      //Rectangulo negro
      stroke(CN);
      fill(CN);
      CN = CN - 10;
      if(CN == 0)
      {
        CN = 0;
      }
      rect(0,0,800,900);
      noStroke();
      
      //Corazón central estatico
      fill(CE,0,0);
       CE = CE + 1;
      if(CE > 255)
       {
         CE = 255;
       }
      //Rectangulo izquierdo fila 1 
      rect(200,250,150,75);
      //Rectangulo derecho fila 1 
      rect(425,250,150,75);
      //Rectangulo fila 2 y 3
      rect(125,325,525,150);
      //Rectangulo fila 4
      rect(200,475,375,75);
      //Rectangulo fila 5
      rect(275,550,225,75);
      //Cuadrado inferior
      rect(350,625,75,75);
    }
    
    //Condicional que hace aparecer el corazón 2 
    if(TiempoC > 8)
    {
      //Corazón centarl, movimiento segun la amplitud
      //Guarda el nivel de amplitud actual
      nivel = amp.getLevel();
      nivel = map(nivel, 0.0, 1.0, 0, 600);
      nivel = nivel*0.4;
      
      //Construcción del corazón en sentido contrario a las manesillas del reloj
      //Esquina superior izquierda
      fill(255,105,180);
      
      beginShape()
       vertex(261.5-nivel,325-nivel);
       vertex(261.5-nivel,375-nivel);
       vertex(211.5-nivel,375-nivel);
       vertex(211.5-nivel,475+nivel);
       vertex(261.5-nivel,475+nivel);
       vertex(261.5-nivel,525+nivel);
       vertex(311.5-nivel,525+nivel);
       vertex(311.5-nivel,575+nivel);
       vertex(361.5-nivel,575+nivel);
       vertex(361.5-nivel,625+nivel);
       vertex(411.5+nivel,625+nivel);
       vertex(411.5+nivel,575+nivel);
       vertex(461.5+nivel,575+nivel);
       vertex(461.5+nivel,525+nivel);
       vertex(511.5+nivel,525+nivel);
       vertex(511.5+nivel,475+nivel);
       vertex(561.5+nivel,475+nivel);
       vertex(561.5+nivel,375-nivel);
       vertex(511.5+nivel,375-nivel);
       vertex(511.5+nivel,325-nivel);
       vertex(411.5+nivel,325-nivel);
       vertex(411.5+nivel,375-nivel);
       vertex(361.5-nivel,375-nivel);
       vertex(361.5-nivel,325-nivel);
      endShape(CLOSE);
    }
  }
  
  //Botones
  //Boton pause
  fill(255);
  rect(13,40,10,30);
  rect(27,40,10,30);
  //Boton stop
  rect(55,35,40,40);
  fill(255,0,0);
  ellipse(75,55,30,30);
  //Boton play
  fill(255);
  triangle(110,40,110,70,140,55);
  
  //Volumen segun la posición del mouse
  Emoji.setVolume(map(mouseY, 900, 0, 0.0, 1.0));
  
  //Filtro de frecuencia
  // Mapea la frecuencia más grave (10Hz) a la más aguda (22050Hz) que los humanos escuchan los humanos 
  filterHz = map (710, 0, 256, 10, 22050);
  //Crea el filtro
  filter.set(filterHz);

  // Dibuja cada lugar en el análisis de espectro 
  var spectrum = Hz.analyze();
  noStroke();
  for (var i = 0; i< spectrum.length; i ++)
  {
    // x = frecuencia más grave (10Hz) a la más aguda (7000Hz) "7000 es un valor escogido debido a que en pocas canciones llegan a tonos tan agudos como lo es 22050Hz"
    var x = map(i, 0, spectrum.length, 0, 7000);
    // a = energía (amplitud / volumen) en esa frecuencia
    var a = -200 + map(spectrum[i], 0, 255, 210, 0);
    //Color
    fill(255);
    rect(x, 900, 800/spectrum.length, a) ;
  }
}
function mouseReleased() 
{
  //Pausa, reinicia o continua la canción 
  //Pause y continuación
  if(mouseX > 0 && mouseX < 50 && mouseY > 30 && mouseY < 80)
  {
      Emoji.pause();
  }
  //Stop
  if(mouseX > 50 && mouseX < 100 && mouseY > 30 && mouseY < 80)
  {
    Emoji.stop();
  }
  //Reproduce los archivo de sonido 
  if(mouseX > 100 && mouseX < 150 && mouseY > 30 && mouseY < 80)
  {
    Emoji.play();
    C = 1;
  }
}