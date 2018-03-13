//Cuadricula de botonoes 
var xCBotones = 0;
var yCBotones = 0;
var tCBotones = 60;
//Cuadricula de botonoes 
var xCImagenes = 60;
var yCImagenes = 0;
var tCImagenes = 60;
//Cuadricula de filtros
var xCFiltros = 120;
var yCFiltros = 0;
var tCFiltros = 60;

//Variables seleccion cuadricula
//Columnas
var col1 = 0;
var col2 = 60;
var col3 = 120;
//Filas
var fil1 = 0;
var fil2 = 60;
var fil3 = 120;
var fil4 = 180;
var fil5 = 240;
var fil6 = 300;
//Funciones
var patron = 0;
var imagen = 0;
var filtro = 0;

//Patrones
//Colores
var PcRombo = 220;
var PcEstrella = 220;
var PcPiramide = 220;
var PcCirculo = 220;
var PcCuadrado = 220;
var cBorrador = 220;
//Posición
var PxRombos = 30;
var PyRombos = 30;

var PxEstrella =30;
var PyEstrella = 90;

var PxPiramide = 30;
var PyPiramide = 150;

var PxCirculo = 35;
var PyCirculo = 215;

var PxCuadrado = 25;
var PyCuadrado = 245;

var xBorrador = 5;
var yBorrador = 305;
//Tamaños
var PtCirculo = 20;
var PtCuadrado= 10;
var tBorrador = 50;

//Imagenes 
//Color
var cA = 136;
var cB = 255;
var cC = 252;
var cD = 183;
var cE = 252;
//Posición
var x = 90;
var yA = 30;
var yB = 90;
var yC = 150;
var yD = 210;
var yE = 270;
//Tamaño 
var t = 40;
//Nombre para cargar las imagenes
var A;
var B; 
var C; 
var D;
var E;

//Filtros
//Color
var cF1 = 255;
var cF2 = 255;
var cF3 = 255;
var cF4 = 255;
//Posición
var xF = 130;
var yF1 = 10;
var yF2 = 70;
var yF3 = 130;
var yF4 = 190;
//Tamaño 
var tF = 40;
//Variables de funcion 
var colorActual;
var ActualR;
var ActualG;
var ActualB;

//Cargar las imagenes
function preload() 
{
  A = loadImage('assets/1.jpg');
  B = loadImage('assets/2.jpg');
  C = loadImage('assets/3.jpg');
  D = loadImage('assets/4.jpg');
  E = loadImage('assets/5.jpg');
}
function setup() 
{
  createCanvas(800, 800);
  background(0);
  //Cambiar angulo a grados 
  angleMode(DEGREES);
  
  //Cuadricula de botones 
  fill(0);
  noStroke();
  for(var filaB = 0; filaB < 6; filaB = filaB + 1)
  {
    rect(xCBotones,yCBotones,tCBotones,tCBotones);
    yCBotones = yCBotones + 60;
  }
  //Cuadricula de imagenes
  for(var filaI = 0; filaI < 5; filaI = filaI + 1)
  {
    rect(xCImagenes,yCImagenes,tCImagenes,tCImagenes);
    yCImagenes = yCImagenes + 60;
  }
  //Cuadricula de filtros
  for(var filaF = 0; filaF < 4; filaF = filaF + 1)
  {
    rect(xCFiltros,yCFiltros,tCFiltros,tCFiltros);
    yCFiltros = yCFiltros + 60;
  }
}

function draw()
{
  noStroke();
  //Patron Rombos 
  fill(PcRombo);
  //Rombo 3 en linea central de izquierda a derecha
  beginShape(); 
   vertex(PxRombos+2,PyRombos);
   vertex(PxRombos+7,PyRombos+5);
   vertex(PxRombos+12,PyRombos);
   vertex(PxRombos+7,PyRombos-5);
  endShape(CLOSE);
  //Rombo 4 en linea central de izquierda a derecha
  beginShape(); 
   vertex(PxRombos+14,PyRombos);
   vertex(PxRombos+19,PyRombos+5);
   vertex(PxRombos+24,PyRombos);
   vertex(PxRombos+19,PyRombos-5);
  endShape(CLOSE);
  //Rombo 2 en linea central de izquierda a derecha
  beginShape(); 
   vertex(PxRombos-2,PyRombos);
   vertex(PxRombos-7,PyRombos+5);
   vertex(PxRombos-12,PyRombos);
   vertex(PxRombos-7,PyRombos-5);
  endShape(CLOSE);
  //Rombo 1 en linea central de izquierda a derecha
  beginShape(); 
   vertex(PxRombos-14,PyRombos);
   vertex(PxRombos-19,PyRombos+5);
  vertex(PxRombos-24,PyRombos);
   vertex(PxRombos-19,PyRombos-5);
  endShape(CLOSE);
  //Rombo superior a la linea central 
  beginShape(); 
   vertex(PxRombos,PyRombos-2);
   vertex(PxRombos+5,PyRombos-7);
   vertex(PxRombos,PyRombos-12);
   vertex(PxRombos-5,PyRombos-7);
  endShape(CLOSE);
  //Rombo inferior a la linea central 
  beginShape(); 
   vertex(PxRombos,PyRombos+2);
   vertex(PxRombos+5,PyRombos+7);
   vertex(PxRombos,PyRombos+12);
   vertex(PxRombos-5,PyRombos+7);
  endShape(CLOSE);
  //Rombo 2 linea superior de izquierda a dercha
  beginShape(); 
   vertex(PxRombos+2,PyRombos-14);
   vertex(PxRombos+7,PyRombos-9);
   vertex(PxRombos+12,PyRombos-14);
   vertex(PxRombos+7,PyRombos-19);
  endShape(CLOSE);
  //Rombo 1 linea superior de izquierda a dercha
  beginShape(); 
   vertex(PxRombos-2,PyRombos-14);
   vertex(PxRombos-7,PyRombos-9);
   vertex(PxRombos-12,PyRombos-14);
   vertex(PxRombos-7,PyRombos-19);
  endShape(CLOSE);
  //Rombo 2 linea inferior de izquierda a dercha
  beginShape(); 
   vertex(PxRombos+2,PyRombos+14);
   vertex(PxRombos+7,PyRombos+9);
   vertex(PxRombos+12,PyRombos+14);
   vertex(PxRombos+7,PyRombos+19);
  endShape(CLOSE);
  //Rombo 1 linea inferior de izquierda a dercha
  beginShape(); 
   vertex(PxRombos-2,PyRombos+14);
   vertex(PxRombos-7,PyRombos+9);
   vertex(PxRombos-12,PyRombos+14);
   vertex(PxRombos-7,PyRombos+19);
  endShape(CLOSE);
  
  //Patron estrella 
  //Punta superior central
  fill(PcEstrella);
  beginShape();
   vertex(PxEstrella,PyEstrella);
   vertex(PxEstrella-6,PyEstrella-10);
   vertex(PxEstrella,PyEstrella-20);
   vertex(PxEstrella+6,PyEstrella-10);
  endShape(CLOSE);
  //Punta superior izquierda
  fill(PcEstrella-140);
  beginShape();
   vertex(PxEstrella,PyEstrella);
   vertex(PxEstrella-6,PyEstrella-10);
   vertex(PxEstrella-18,PyEstrella-10);
   vertex(PxEstrella-11,PyEstrella);
  endShape(CLOSE);
  //Punta superior derecha
  fill(PcEstrella-180);
  beginShape();
   vertex(PxEstrella,PyEstrella);
   vertex(PxEstrella+6,PyEstrella-10);
   vertex(PxEstrella+18,PyEstrella-10);
   vertex(PxEstrella+11,PyEstrella);
  endShape(CLOSE);
  //Punta inferior central
  fill(PcEstrella);
  beginShape();
   vertex(PxEstrella,PyEstrella);
   vertex(PxEstrella-6,PyEstrella+10);
   vertex(PxEstrella,PyEstrella+20);
   vertex(PxEstrella+6,PyEstrella+10);
  endShape(CLOSE);
  //Punta inferior izquierda
  fill(PcEstrella-180);
  beginShape();
   vertex(PxEstrella,PyEstrella);
   vertex(PxEstrella-6,PyEstrella+10);
   vertex(PxEstrella-18,PyEstrella+10);
   vertex(PxEstrella-11,PyEstrella);
  endShape(CLOSE);
  //Punta inferior derecha
  fill(PcEstrella-140);
  beginShape();
   vertex(PxEstrella,PyEstrella);
   vertex(PxEstrella+6,PyEstrella+10);
   vertex(PxEstrella+18,PyEstrella+10);
   vertex(PxEstrella+11,PyEstrella);
  endShape(CLOSE);

  //Patron piramide
  //Triangulo izquierdo
  fill(PcPiramide);
  triangle(PxPiramide,PyPiramide,PxPiramide-20,PyPiramide+15,PxPiramide,PyPiramide-20);
  //Triangulo derecho
  fill(PcPiramide-140);
  triangle(PxPiramide,PyPiramide,PxPiramide+20,PyPiramide+15,PxPiramide,PyPiramide-20);
  //Triangulo inferior
  fill(PcPiramide-180);
  triangle(PxPiramide,PyPiramide,PxPiramide+20,PyPiramide+15,PxPiramide-20,PyPiramide+15);
  
  //Patron de circulos
  //Circulo 6 de adentro hacia afuera
  fill(PcCirculo-140);
  ellipse(PxCirculo-5,PyCirculo-5,PtCirculo+25,PtCirculo+25);
  //Circulo 5 de adentro hacia afuera
  fill(PcCirculo-180);
  ellipse(PxCirculo-4,PyCirculo-4,PtCirculo+20,PtCirculo+20);
  //Circulo 4 de adentro hacia afuera
  fill(PcCirculo);
  ellipse(PxCirculo-3,PyCirculo-3,PtCirculo+15,PtCirculo+15);
  //Circulo 3 de adentro hacia afuera
  fill(PcCirculo-120);
  ellipse(PxCirculo-2,PyCirculo-2,PtCirculo+10,PtCirculo+10);
  //Circulo 2 de adentro hacia afuera
  fill(PcCirculo-180);
  ellipse(PxCirculo-1,PyCirculo-1,PtCirculo+5,PtCirculo+5);
  //Circulo 1 de adentro hacia afuera
  fill(PcCirculo);
  ellipse(PxCirculo,PyCirculo,PtCirculo,PtCirculo);
  
  //Patron cuadrados
  //Cuadrado superior
  fill(PcCuadrado);
  rect(PxCuadrado,PyCuadrado,PtCuadrado,PtCuadrado);
  //Cuadrado central linea 2 de arriba a abajo
  fill(PcCuadrado-100);
  rect(PxCuadrado,PyCuadrado+10,PtCuadrado,PtCuadrado);
  //Cuadrado izquierdo linea 2 de arriba a abajo
  fill(PcCuadrado-180);
  rect(PxCuadrado-10,PyCuadrado+10,PtCuadrado,PtCuadrado);
  //Cuadrado derecho linea 2 de arriba a abajo
  fill(PcCuadrado-140);
  rect(PxCuadrado+10,PyCuadrado+10,PtCuadrado,PtCuadrado);
  //Cuadrado 1 de izquierda a derecha, linea 3 de arriba a abajo
  fill(PcCuadrado-100);
  rect(PxCuadrado-20,PyCuadrado+20,PtCuadrado,PtCuadrado);
  //Cuadrado 2 de izquierda a derecha, linea 3 de arriba a abajo
  fill(PcCuadrado-160);
  rect(PxCuadrado-10,PyCuadrado+20,PtCuadrado,PtCuadrado);
  //Cuadrado 3 de izquierda a derecha, linea 3 de arriba a abajo
  fill(PcCuadrado-180);
  rect(PxCuadrado,PyCuadrado+20,PtCuadrado,PtCuadrado);
  //Cuadrado 4 de izquierda a derecha, linea 3 de arriba a abajo
  fill(PcCuadrado-100);
  rect(PxCuadrado+10,PyCuadrado+20,PtCuadrado,PtCuadrado);
  //Cuadrado 5 de izquierda a derecha, linea 3 de arriba a abajo
  fill(PcCuadrado-140);
  rect(PxCuadrado+20,PyCuadrado+20,PtCuadrado,PtCuadrado);
  //Cuadrado central linea 4 de arriba a abajo
  fill(PcCuadrado-100);
  rect(PxCuadrado,PyCuadrado+30,PtCuadrado,PtCuadrado);
  //Cuadrado izquierdo linea 4 de arriba a abajo
  fill(PcCuadrado);
  rect(PxCuadrado-10,PyCuadrado+30,PtCuadrado,PtCuadrado);
  //Cuadrado derecho linea 4 de arriba a abajo
  fill(PcCuadrado-180);
  rect(PxCuadrado+10,PyCuadrado+30,PtCuadrado,PtCuadrado);
  //Cuadrado inferior
  fill(PcCuadrado-140);
  rect(PxCuadrado,PyCuadrado+40,PtCuadrado,PtCuadrado);
  
  //Borrador
  stroke(cBorrador);
  fill(0);
  rect(xBorrador,yBorrador,tBorrador,tBorrador);
  noStroke();
  
  //Representación de imagenes 
  //Circulo que referenica imagen 1
  fill(cA,cA-92,cA-67);
  ellipse(x,yA,t,t);
  //Circulo que referenica imagen 2
  fill(cB,cB-4,cB-138);
  ellipse(x,yB,t,t);
  //Circulo que referenica imagen 3
  fill(cC,cC-113,cC-145);
  ellipse(x,yC,t,t);
  //Circulo que referenica imagen 4
  fill(cD-126,cD-156,cD);
  ellipse(x,yD,t,t);
  //Circulo que referenica imagen 5
  fill(cE,cE-192,cE-181);
  ellipse(x,yE,t,t);
  
  //Representación de filtros
  //Rectangulo que referencia filtro 1
  fill(cF1,cF1,cF1-255);
  rect(xF,yF1,tF,tF);
  //Rectangulo que referencia filtro 2
  fill(cF2,cF2-115,cF2-255);
  rect(xF,yF2,tF,tF);
  //Rectangulo que referencia filtro 3
  fill(cF3-255,cF3,cF3-255);
  rect(xF,yF3,tF,tF);
  //Rectangulo que referencia filtro 4
  fill(cF4-225,cF4-111,cF4);
  rect(xF,yF4,tF,tF);
  
  //Seleccion de patron, imagen y filtro
  if(mouseIsPressed) 
  {
    //SELECCIÓN DE PATRONES Y BORRADOR
    //Selección de patron rombo
    if(mouseX > col1 && mouseX < col1 + 60 && mouseY > fil1 && mouseY < fil1 + 60)
    {
      patron = 1;
    }
    //Selección de patron estrella
    if(mouseX > col1 && mouseX < col1 + 60 && mouseY > fil2 && mouseY < fil2 + 60)
    {
      patron = 2;
    }
    //Selección de patron piramide
    if(mouseX > col1 && mouseX < col1 + 60 && mouseY > fil3 && mouseY < fil3 + 60)
    {
      patron = 3;
    }
    //Selección de patron circulo
    if(mouseX > col1 && mouseX < col1 + 60 && mouseY > fil4 && mouseY < fil4 + 60)
    {
      patron = 4;
    }
    //Selección de patron cuadrado
    if(mouseX > col1 && mouseX < col1 + 60 && mouseY > fil5 && mouseY < fil5 + 60)
    {
      patron = 5;
    }
    //Selección de borrador
    if(mouseX > col1 && mouseX < col1 + 50 && mouseY > fil6 && mouseY < fil6 + 60)
    {
      patron = 6;
    }
    
    //SELECCIÓN DE IMAGENES
    //Selección de imagen 1
    if(mouseX > col2 && mouseX < col2 + 60 && mouseY > fil1 && mouseY < fil1 + 60)
    {
      imagen = 1;
    }
    //Selección de imagen 2
    if(mouseX > col2 && mouseX < col2 + 60 && mouseY > fil2 && mouseY < fil2 + 60)
    {
      imagen = 2;
    }
    //Selección de imagen 3
    if(mouseX > col2 && mouseX < col2 + 60 && mouseY > fil3 && mouseY < fil3 + 60)
    {
      imagen = 3;
    }
    //Selección de imagen 4
    if(mouseX > col2 && mouseX < col2 + 60 && mouseY > fil4 && mouseY < fil4 + 60)
    {
      imagen = 4;
    }
    //Selección de imagen 5
    if(mouseX > col2 && mouseX < col2 + 60 && mouseY > fil5 && mouseY < fil5 + 60)
    {
      imagen = 5;
    }
    
    //SELECCIÓN DE FILTROS
    //Selección de filtro 1
    if(mouseX > col3 && mouseX < col3 + 60 && mouseY > fil1 && mouseY < fil1 + 60)
    {
      filtro = 1;
    }
    //Selección de filtro 2
    if(mouseX > col3 && mouseX < col3 + 60 && mouseY > fil2 && mouseY < fil2 + 60)
    {
      filtro = 2;
    }
    //Selección de filtro 3
    if(mouseX > col3 && mouseX < col3 + 60 && mouseY > fil3 && mouseY < fil3 + 60)
    {
      filtro = 3;
    }
    //Selección de filtro 4
    if(mouseX > col3 && mouseX < col3 + 60 && mouseY > fil4 && mouseY < fil4 + 60)
    {
      filtro = 4;
    }
    
    //Dibuja la imagen seleccionada
    //Imagen 1
    if(imagen == 1)
    {
      image(A,0,0);
    }
    //Imagen 2
    if(imagen == 2)
    {
      image(B,0,0);
    }
    //Imagen 3
    if(imagen == 3)
    {
      image(C,0,0);
    }
    //Imagen 4
    if(imagen == 4)
    {
      image(D,0,0);
    }
    //Imagen 5
    if(imagen == 5)
    {
      fill(0);
      rect(0,0,800,800);
      image(E,0,0);
    }
    
    //Dibuja el patron selecionado 
    //Patron rombos
    if(patron == 1)
    {
      fill(ActualR,ActualG,ActualB);
      //Rombo 3 en linea central de izquierda a derecha
      beginShape(); 
       vertex(mouseX+2,mouseY);
       vertex(mouseX+7,mouseY+5);
       vertex(mouseX+12,mouseY);
       vertex(mouseX+7,mouseY-5);
      endShape(CLOSE);
      //Rombo 4 en linea central de izquierda a derecha
      beginShape(); 
       vertex(mouseX+14,mouseY);
       vertex(mouseX+19,mouseY+5);
       vertex(mouseX+24,mouseY);
       vertex(mouseX+19,mouseY-5);
      endShape(CLOSE);
      //Rombo 2 en linea central de izquierda a derecha
      beginShape(); 
       vertex(mouseX-2,mouseY);
       vertex(mouseX-7,mouseY+5);
       vertex(mouseX-12,mouseY);
       vertex(mouseX-7,mouseY-5);
       endShape(CLOSE);
      //Rombo 1 en linea central de izquierda a derecha
      beginShape(); 
       vertex(mouseX-14,mouseY);
       vertex(mouseX-19,mouseY+5);
       vertex(mouseX-24,mouseY);
       vertex(mouseX-19,mouseY-5);
      endShape(CLOSE);
      //Rombo superior a la linea central 
      beginShape(); 
       vertex(mouseX,mouseY-2);
       vertex(mouseX+5,mouseY-7);
       vertex(mouseX,mouseY-12);
       vertex(mouseX-5,mouseY-7);
      endShape(CLOSE);
      //Rombo inferior a la linea central 
      beginShape(); 
       vertex(mouseX,mouseY+2);
       vertex(mouseX+5,mouseY+7);
       vertex(mouseX,mouseY+12);
       vertex(mouseX-5,mouseY+7);
      endShape(CLOSE);
      //Rombo 2 linea superior de izquierda a dercha
      beginShape(); 
       vertex(mouseX+2,mouseY-14);
       vertex(mouseX+7,mouseY-9);
       vertex(mouseX+12,mouseY-14);
       vertex(mouseX+7,mouseY-19);
      endShape(CLOSE);
      //Rombo 1 linea superior de izquierda a dercha
      beginShape(); 
       vertex(mouseX-2,mouseY-14);
       vertex(mouseX-7,mouseY-9);
       vertex(mouseX-12,mouseY-14);
       vertex(mouseX-7,mouseY-19);
      endShape(CLOSE);
      //Rombo 2 linea inferior de izquierda a dercha
      beginShape(); 
       vertex(mouseX+2,mouseY+14);
       vertex(mouseX+7,mouseY+9);
       vertex(mouseX+12,mouseY+14);
       vertex(mouseX+7,mouseY+19);
      endShape(CLOSE);
      //Rombo 1 linea inferior de izquierda a dercha
      beginShape(); 
      vertex(mouseX-2,mouseY+14);
      vertex(mouseX-7,mouseY+9);
      vertex(mouseX-12,mouseY+14);
      vertex(mouseX-7,mouseY+19);
      endShape(CLOSE);
    }
    
    //Patron estrella
    if(patron == 2)
    {
       //Punta superior central
      fill(ActualR,ActualG,ActualB);
      beginShape();
       vertex(mouseX,mouseY);
       vertex(mouseX-6,mouseY-10);
       vertex(mouseX,mouseY-20);
       vertex(mouseX+6,mouseY-10);
      endShape(CLOSE);
      //Punta superior izquierda 
      fill(ActualR-140,ActualG-140,ActualB-140);
      beginShape();
       vertex(mouseX,mouseY);
       vertex(mouseX-6,mouseY-10);
       vertex(mouseX-18,mouseY-10);
       vertex(mouseX-11,mouseY);
      endShape(CLOSE);
      //Punta superior derecha
      fill(ActualR-180,ActualG-180,ActualB-180);
      beginShape();
       vertex(mouseX,mouseY);
       vertex(mouseX+6,mouseY-10);
       vertex(mouseX+18,mouseY-10);
       vertex(mouseX+11,mouseY);
      endShape(CLOSE);
      //Punta inferior central
      fill(ActualR,ActualG,ActualB);
      beginShape();
       vertex(mouseX,mouseY);
       vertex(mouseX-6,mouseY+10);
       vertex(mouseX,mouseY+20);
       vertex(mouseX+6,mouseY+10);
      endShape(CLOSE);
      //Punta inferior izquierda
      fill(ActualR-180,ActualG-180,ActualB-180);
      beginShape();
       vertex(mouseX,mouseY);
       vertex(mouseX-6,mouseY+10);
       vertex(mouseX-18,mouseY+10);
       vertex(mouseX-11,mouseY);
      endShape(CLOSE);
      //Punta inferior derecha
      fill(ActualR-140,ActualG-140,ActualB-140);
      beginShape();
       vertex(mouseX,mouseY);
       vertex(mouseX+6,mouseY+10);
       vertex(mouseX+18,mouseY+10);
       vertex(mouseX+11,mouseY);
      endShape(CLOSE);
    }
    
    //Patron piramide
    if(patron == 3)
    {
      //Triangulo izquierdo
      fill(ActualR,ActualG,ActualB);
      triangle(mouseX,mouseY,mouseX-20,mouseY+15,mouseX,mouseY-20);
      //Triangulo derecho
      fill(ActualR-140,ActualG-140,ActualB-140);
      triangle(mouseX,mouseY,mouseX+20,mouseY+15,mouseX,mouseY-20);
      //Triangulo inferior
      fill(ActualR-180,ActualG-180,ActualB-180);
      triangle(mouseX,mouseY,mouseX+20,mouseY+15,mouseX-20,mouseY+15);
    }
    
    //Patron circulos
    if(patron == 4)
    {
       //Circulo 6 de adentro hacia afuera
      fill(ActualR-140,ActualG-140,ActualB-140);
      ellipse(mouseX-5,mouseY-5,PtCirculo+25,PtCirculo+25);
      //Circulo 5 de adentro hacia afuera
      fill(ActualR-180,ActualG-180,ActualB-180);
      ellipse(mouseX-4,mouseY-4,PtCirculo+20,PtCirculo+20);
      //Circulo 4 de adentro hacia afuera
      fill(ActualR,ActualG,ActualB);
      ellipse(mouseX-3,mouseY-3,PtCirculo+15,PtCirculo+15);
      //Circulo 3 de adentro hacia afuera
      fill(ActualR-120,ActualG-120,ActualB-120);
      ellipse(mouseX-2,mouseY-2,PtCirculo+10,PtCirculo+10);
      //Circulo 2 de adentro hacia afuera
      fill(ActualR-180,ActualG-180,ActualB-180);
      ellipse(mouseX-1,mouseY-1,PtCirculo+5,PtCirculo+5);
      //Circulo 1 de adentro hacia afuera
      fill(ActualR,ActualG,ActualB);
      ellipse(mouseX,mouseY,PtCirculo,PtCirculo);
    }
    
    //Patron de cuadrados
    if(patron == 5)
    {
      //Cuadrado superior
      fill(ActualR,ActualG,ActualB);
      rect(mouseX,mouseY,PtCuadrado,PtCuadrado);
      //Cuadrado central linea 2 de arriba a abajo
      fill(ActualR-100,ActualG-100,ActualB-100);
      rect(mouseX,mouseY+10,PtCuadrado,PtCuadrado);
      //Cuadrado izquierdo linea 2 de arriba a abajo
      fill(ActualR-180,ActualG-180,ActualB-180);
      rect(mouseX-10,mouseY+10,PtCuadrado,PtCuadrado);
      //Cuadrado derecho linea 2 de arriba a abajo
      fill(ActualR-140,ActualG-140,ActualB-140);
      rect(mouseX+10,mouseY+10,PtCuadrado,PtCuadrado);
      //Cuadrado 1 de izquierda a derecha, linea 3 de arriba a abajo
      fill(ActualR-100,ActualG-100,ActualB-100);
      rect(mouseX-20,mouseY+20,PtCuadrado,PtCuadrado);
      //Cuadrado 2 de izquierda a derecha, linea 3 de arriba a abajo
      fill(ActualR-160,ActualG-160,ActualB-160);
      rect(mouseX-10,mouseY+20,PtCuadrado,PtCuadrado);
      //Cuadrado 3 de izquierda a derecha, linea 3 de arriba a abajo
      fill(ActualR-180,ActualG-180,ActualB-180);
      rect(mouseX,mouseY+20,PtCuadrado,PtCuadrado);
      //Cuadrado 4 de izquierda a derecha, linea 3 de arriba a abajo
      fill(ActualR-100,ActualG-100,ActualB-100);
      rect(mouseX+10,mouseY+20,PtCuadrado,PtCuadrado);
      //Cuadrado 5 de izquierda a derecha, linea 3 de arriba a abajo
      fill(ActualR-140,ActualG-140,ActualB-140);
      rect(mouseX+20,mouseY+20,PtCuadrado,PtCuadrado);
      //Cuadrado central linea 4 de arriba a abajo
      fill(ActualR-100,ActualG-100,ActualB-100);
      rect(mouseX,mouseY+30,PtCuadrado,PtCuadrado);
      //Cuadrado izquierdo linea 4 de arriba a abajo
      fill(ActualR,ActualG,ActualB);
      rect(mouseX-10,mouseY+30,PtCuadrado,PtCuadrado);
      //Cuadrado derecho linea 4 de arriba a abajo
      fill(ActualR-180,ActualG-180,ActualB-180);
      rect(mouseX+10,mouseY+30,PtCuadrado,PtCuadrado);
      //Cuadrado inferior
      fill(ActualR-140,ActualG-140,ActualB-140);
      rect(mouseX,mouseY+40,PtCuadrado,PtCuadrado);
    }
    
    //Borrador
    if(patron == 6)
    {
      background(0);
    }
    
    //Uso de filtro segun selección
    //Filtro de distorción
    if(filtro == 1)
    {
      //noprotect
      for(var filaD = mouseY-20; filaD < mouseY+20; filaD = filaD +6)
      {
        for(var columnaD = mouseX-20; columnaD < mouseX+20; columnaD = columnaD +6)
        {
          colorActual = get(columnaD,filaD);
          ActualR = red(colorActual);
          ActualG = green(colorActual);
          ActualB = blue(colorActual);
          fill(colorActual);
          stroke(0);
        }
      }
    }
    
    //Filtro negativo
    if(filtro == 2)
    {
      filter(INVERT);
    }
    
    //Filtro resaltar contornos
    if(filtro == 3)
    {
      filter(POSTERIZE, 2);
    }
    
    //Filtro negativo por zona
    if(filtro == 4)
    {
      filter(THRESHOLD);
    }
  }
  
}