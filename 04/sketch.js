//Variables cuadricula de herramientas
var xCuadricula = 0;
var yCuadricula = 0;
var tCuadricula = 50;

//Variables de color 
var xColor = 60;
var yColor = 10;
var tColor = 30;
var cColor = 10;

var C1 = 70;
var C2 = 135;
var C3 = 139;
var C4 = 220;
var C5 = 128;
var C6 = 173;
var C7 = 255;
var C8 = 214;
var C9 = 120;
var C10 = 174;

//Variables de posicion 
var HxCirculo = 25;
var HyCirculo = 25;

var HxCuadrado = 10;
var HyCuadrado = 60;

var HxTriangulo = 10;
var HyTriangulo = 140;

var HxArbol = 25;
var HyArbol = 165;

var HxCalavera = 25;
var HyCalavera = 220;

var HxOjo = 25;
var HyOjo = 275;

var HxPera = 25
var HyPera = 335;

var HxPersona = 25;
var HyPersona = 365;

var HxPatron1 = 25;
var HyPatron1 = 425;

var HxPlatillo = 25;
var HyPlatillo = 470;
//Variables de tamaño
var HtCirculo = 30;
var HtCuadrado = 30;
var HtArbol = 20;
var HtCalavera = 25;
var HtOjo = 30;
var HtPera= 25;
var HtPersona = 20;
var HtPlatillo = 20;
//Variables de color
var HcCirculo = 180;
var HcCuadrado = 180;
var HcTriangulo = 180;
var HcArbol = 180
var HcArbolR = 180;
var HcArbolG = 180;
var HcArbolB = 180;
var HcCalavera = 180;
var HcCalaveraR = 180;
var HcCalaveraG = 180;
var HcCalaveraB = 180;
var HcOjo = 180;
var HcOjoR = 180;
var HcOjoG = 180;
var HcOjoB = 180;
var cBrillo = 255;
var HcPera = 180;
var HcPeraR = 180;
var HcPeraG = 180;
var HcPeraB = 180;
var HcPersona = 180;
var HcPersonaR = 180;
var HcPersonaG = 180;
var HcPersonaB = 180;
var HcPatron1 =  180;
var HcPlatillo = 180;
var HcPlatilloR = 180;
var HcPlatilloG = 180;
var HcPlatilloB = 180;
//Variables de funcion
var Herramienta = 0;
var Color = 0;
var ColorActualR;
var ColorActualG;
var ColorActualB;
//Variables seleccion cuadricula
var col1 = 0;
var col2 = 50;

var fil1 = 0;
var fil2 = 50;
var fil3 = 100;
var fil4 = 150;
var fil5 = 200;
var fil6 = 250;
var fil7 = 300;
var fil8 = 350;
var fil9 = 400;
var fil10 = 450;

function setup() { 
  createCanvas(1000, 500);
  background(120);
}
function draw() { 
  //Cuadricula de herramientas
  stroke(230);
  fill(0);
  for(var fil = 0; fil < 10; fil = fil +1)
  {
    for(var col = 0; col < 2; col = col + 1)
    {
      rect(xCuadricula,yCuadricula,tCuadricula,tCuadricula);
      xCuadricula = xCuadricula + 50;
    }
    xCuadricula = 0;
    yCuadricula = yCuadricula + 50;
  }
  
  noStroke();
  
  //Herramienta circulo
  fill(HcCirculo);
  ellipse(HxCirculo,HyCirculo,HtCirculo,HtCirculo);
  
  //Herramienta cuadrado
  fill(HcCuadrado);
  rect(HxCuadrado,HyCuadrado,HtCuadrado,HtCuadrado);
  
  //Harramienta triangulo 
  fill(HcTriangulo);
  triangle(HxTriangulo,HyTriangulo,HxTriangulo+30,HyTriangulo,HxTriangulo+15,HyTriangulo-30);
  
  //Herramienta arbol
  fill(HcArbol);
  ellipse(HxArbol,HyArbol,HtArbol,HtArbol);
  ellipse(HxArbol-10,HyArbol+10,HtArbol-5,HtArbol-5);
  ellipse(HxArbol+10,HyArbol+10,HtArbol-5,HtArbol-5);
  fill(HcArbol-70);
  beginShape();
   vertex(HxArbol-3,HyArbol+15);
   vertex(HxArbol-5,HyArbol+30);
   vertex(HxArbol+5,HyArbol+30);
   vertex(HxArbol+3,HyArbol+15);
   vertex(HxArbol+6,HyArbol);
   vertex(HxArbol,HyArbol+10);
   vertex(HxArbol-6,HyArbol);
  endShape(CLOSE);
  
  //Herramienta Calavera
  fill(HcCalavera);
  ellipse(HxCalavera,HyCalavera,HtCalavera,HtCalavera);
  rect(HxCalavera-10,HyCalavera+5,HtCalavera-5,HtCalavera-10,20);
  fill(0);
  ellipse(HxCalavera-6,HyCalavera+2,HtCalavera-15,HtCalavera-15);
  ellipse(HxCalavera+6,HyCalavera+2,HtCalavera-15,HtCalavera-15);
  rect(HxCalavera-7,HyCalavera+10,HtCalavera-20,HtCalavera-15);
  rect(HxCalavera+2,HyCalavera+10,HtCalavera-20,HtCalavera-15);
  
  //Ojo
  fill(HcOjo);
  ellipse(HxOjo,HyOjo,HtOjo,HtOjo);
  fill(HcOjo-70);
  ellipse(HxOjo,HyOjo,HtOjo-10,HtOjo-10);
  fill(HcOjo-150);
  ellipse(HxOjo,HyOjo,HtOjo-20,HtOjo-20);
  fill(cBrillo);
  ellipse(HxOjo-7,HyOjo-5,HtOjo-25,HtOjo-25);
  stroke(cBrillo);
  line(HxOjo+3,HyOjo-3,HxOjo+7,HyOjo-7);
  noStroke();
  
  //Pera
  fill(HcPera);
  ellipse(HxPera,HyPera,HtPera,HtPera);
  ellipse(HxPera,HyPera-9,HtPera-8,HtPera-8);
  noFill();
  strokeWeight(3);
  stroke(255);
  arc(HxPera+12,HyPera-18,HtPera-2,HtPera-2, PI, PI + QUARTER_PI);
  fill(HcPera-100);
  noStroke();
  ellipse(HxPera+7,HyPera-27,HtPera-18,HtPera-18);
  triangle(HxPera+10,HyPera-25,HxPera+10,HyPera-30,HxPera+17,HyPera-27);
  fill(HcPera-140);
  ellipse(HxPera-8,HyPera-3,HtPera-20,HtPera-20);
  ellipse(HxPera+4,HyPera+8,HtPera-22,HtPera-22);
  ellipse(HxPera+5,HyPera-4,HtPera-19,HtPera-19);
  
  //Persona 
  fill(HcPersona);
  ellipse(HxPersona,HyPersona,HtPersona,HtPersona);
  strokeWeight(8);
  stroke(HcPersona-70);
  line(HxPersona,HyPersona+12,HxPersona,HyPersona+22);
  strokeWeight(4);
  line(HxPersona+1,HyPersona+9,HxPersona+10,HyPersona+20);
  line(HxPersona-1,HyPersona+9,HxPersona-10,HyPersona+20);
  line(HxPersona,HyPersona+18,HxPersona-8,HyPersona+30);
  line(HxPersona,HyPersona+18,HxPersona+8,HyPersona+30);
  noStroke();
  
  //Patron 1
  fill(HcPatron1);
  beginShape(); 
   vertex(HxPatron1+2,HyPatron1);
   vertex(HxPatron1+7,HyPatron1+5);
   vertex(HxPatron1+12,HyPatron1);
   vertex(HxPatron1+7,HyPatron1-5);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1+14,HyPatron1);
   vertex(HxPatron1+19,HyPatron1+5);
   vertex(HxPatron1+24,HyPatron1);
   vertex(HxPatron1+19,HyPatron1-5);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1-2,HyPatron1);
   vertex(HxPatron1-7,HyPatron1+5);
   vertex(HxPatron1-12,HyPatron1);
   vertex(HxPatron1-7,HyPatron1-5);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1-14,HyPatron1);
   vertex(HxPatron1-19,HyPatron1+5);
   vertex(HxPatron1-24,HyPatron1);
   vertex(HxPatron1-19,HyPatron1-5);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1,HyPatron1-2);
   vertex(HxPatron1+5,HyPatron1-7);
   vertex(HxPatron1,HyPatron1-12);
   vertex(HxPatron1-5,HyPatron1-7);
  endShape(CLOSE);
   beginShape(); 
   vertex(HxPatron1,HyPatron1+2);
   vertex(HxPatron1+5,HyPatron1+7);
   vertex(HxPatron1,HyPatron1+12);
   vertex(HxPatron1-5,HyPatron1+7);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1+2,HyPatron1-14);
   vertex(HxPatron1+7,HyPatron1-9);
   vertex(HxPatron1+12,HyPatron1-14);
   vertex(HxPatron1+7,HyPatron1-19);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1-2,HyPatron1-14);
   vertex(HxPatron1-7,HyPatron1-9);
   vertex(HxPatron1-12,HyPatron1-14);
   vertex(HxPatron1-7,HyPatron1-19);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1+2,HyPatron1+14);
   vertex(HxPatron1+7,HyPatron1+9);
   vertex(HxPatron1+12,HyPatron1+14);
   vertex(HxPatron1+7,HyPatron1+19);
  endShape(CLOSE);
  beginShape(); 
   vertex(HxPatron1-2,HyPatron1+14);
   vertex(HxPatron1-7,HyPatron1+9);
   vertex(HxPatron1-12,HyPatron1+14);
   vertex(HxPatron1-7,HyPatron1+19);
  endShape(CLOSE);
  
  //Platillo 
  fill(HcPlatillo);
  ellipse(HxPlatillo,HyPlatillo,HtPlatillo,HtPlatillo);
  fill(HcPlatillo-90);
  ellipse(HxPlatillo,HyPlatillo+5,HtPlatillo+15,HtPlatillo-5);
  stroke(HcPlatillo+50);
  point(HxPlatillo,HyPlatillo+5);
  point(HxPlatillo-9,HyPlatillo+5);
  point(HxPlatillo+9,HyPlatillo+5);
  noStroke();
  
  //Color 1
  fill(C1,C1+60,C1+110);
  rect(xColor,yColor,tColor,tColor,cColor);
  
  //Color 2
  fill(C2,C2+71,C2+100);
  rect(xColor,yColor+50,tColor,tColor,cColor);
  
  //Color 3
  fill(C3,C3-139,C3-139);
  rect(xColor,yColor+100,tColor,tColor,cColor);
  
  //Color 4
  fill(C4,C4-200,C4-160);
  rect(xColor,yColor+150,tColor,tColor,cColor);
  
  //Color 5
  fill(C5-128,C5,C5-128);
  rect(xColor,yColor+200,tColor,tColor,cColor);
  
  //Color 6
  fill(C6,C6+82,C6-126);
  rect(xColor,yColor+250,tColor,tColor,cColor);
  
  //Color 7 
  fill(C7,C7-30,C7-C7);
  rect(xColor,yColor+300,tColor,tColor,cColor);
  
  //Color 8 
  fill(C8,C8-31,C8-147);
  rect(xColor,yColor+350,tColor,tColor,cColor);
  
  //Color 9
  fill(C9,C9,C9);
  rect(xColor,yColor+400,tColor,tColor,cColor);
  
  //Color 10 
  fill(C10,C10-32,C10-80);
  rect(xColor,yColor+450,tColor,tColor,cColor);
  
  
  
  
  //Seleccion de herramienta
  if(mouseIsPressed) 
  {
    if(mouseX > col1 && mouseX < col1 + 50 && mouseY > fil1 && mouseY < fil1 + 50)
    {
      Herramienta = 0;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil2 && mouseY < fil2 + 50)
    {
      Herramienta = 1;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil3 && mouseY < fil3 + 50)
    {
      Herramienta = 2;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil4 && mouseY < fil4 + 50)
    {
      Herramienta = 3;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil5 && mouseY < fil5 + 50)
    {
      Herramienta = 4;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil6 && mouseY < fil6 + 50)
    {
      Herramienta = 5;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil7 && mouseY < fil7 + 50)
    {
      Herramienta = 6;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil8 && mouseY < fil8 + 50)
    {
      Herramienta = 7;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil9 && mouseY < fil9 + 50)
    {
      Herramienta = 8;
    }
    if(mouseX > col1 && mouseX < col1+ 50 && mouseY > fil10 && mouseY < fil10 + 50)
    {
      Herramienta = 9;
    }
     if(mouseX > col2 && mouseX < col2 + 50 && mouseY > fil1 && mouseY < fil1 + 50)
    {
      Color = 0;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil2 && mouseY < fil2 + 50)
    {
      Color = 1;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil3 && mouseY < fil3 + 50)
    {
      Color = 2;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil4 && mouseY < fil4 + 50)
    {
      Color = 3;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil5 && mouseY < fil5 + 50)
    {
      Color = 4;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2 + 50 && mouseY > fil6 && mouseY < fil6 + 50)
    {
      Color = 5;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil7 && mouseY < fil7 + 50)
    {
      Color = 6;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil8 && mouseY < fil8 + 50)
    {
      Color = 7;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil9 && mouseY < fil9 + 50)
    {
      Color = 8;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    if(mouseX > col2 && mouseX < col2+ 50 && mouseY > fil10 && mouseY < fil10 + 50)
    {
      Color = 9;
      HcArbolR = ColorActualR;
      HcArbolG = ColorActualG;
      HcArbolB = ColorActualB;
      HcCalaveraR = ColorActualR;
      HcCalaveraG = ColorActualG;
      HcCalaveraB = ColorActualB;
      HcOjoR = ColorActualR;
      HcOjoG = ColorActualG;
      HcOjoB = ColorActualB;
      HcPeraR = ColorActualR;
      HcPeraG = ColorActualG;
      HcPeraB = ColorActualB;
      HcPersonaR = ColorActualR;
      HcPersonaG = ColorActualG;
      HcPersonaB = ColorActualB;
      HcPlatilloR = ColorActualR;
      HcPlatilloG = ColorActualG;
      HcPlatilloB = ColorActualB;
    }
    
    //Color del pincel 
    if(Color == 0)
    {
      fill(C1,C1+60,C1+110);
      ColorActualR = C1;
      ColorActualG = C1+60;
      ColorActualB = C1+110;
    }
    if(Color == 1)
    {
      fill(C2,C2+71,C2+100);
      ColorActualR = C2;
      ColorActualG = C2+71;
      ColorActualB = C2+100;
    }
    if(Color == 2)
    {
      fill(C3,C3-139,C3-139);
      ColorActualR = C3;
      ColorActualG = C3-139;
      ColorActualB = C3-139;
    }
    if(Color == 3)
    {
      fill(C4,C4-200,C4-160);
      ColorActualR = C4;
      ColorActualG = C4-200;
      ColorActualB = C4-160;
    }
    if(Color == 4)
    {
      fill(C5-128,C5,C5-128);
      ColorActualR = C5-128;
      ColorActualG = C5;
      ColorActualB = C5-128;
    }
    if(Color == 5)
    {
      fill(C6,C6+82,C6-126);
      ColorActualR = C6;
      ColorActualG = C6+82;
      ColorActualB = C6-126;
    }
    if(Color == 6)
    {
      fill(C7,C7-30,C7-C7);
      ColorActualR = C7;
      ColorActualG = C7-30;
      ColorActualB = C7-C7;
    }
    if(Color == 7)
    {
      fill(C8,C8-31,C8-147);
      ColorActualR = C8;
      ColorActualG = C8-31;
      ColorActualB = C8-147;
    }
    if(Color == 8)
    {
      fill(C9,C9,C9);
      ColorActualR = C9;
      ColorActualG = C9;
      ColorActualB = C9;
    }
    if(Color == 9)
    {
      fill(C10,C10-32,C10-80);
      ColorActualR = C10;
      ColorActualG = C10-32;
      ColorActualB = C10-80;
    }

  
  //Uso de erramieta
  if(Herramienta == 0)
  {
    ellipse(mouseX,mouseY,HtCirculo,HtCirculo);
    HcCirculo = 255;
    HcCuadrado = 180;
    HcTriangulo = 180;
    HcArbol = 180;
    HcCalavera = 180;
    HcOjo = 180;
    cBrillo = 255;
    HcPera = 180;
    HcPersona = 180;
    HcPatron1 =  180;
    HcPlatillo = 180;
  }
    if(Herramienta == 1)
  {
    rect(mouseX-15,mouseY-15,HtCuadrado,HtCuadrado);
    HcCirculo = 180;
    HcCuadrado = 255;
    HcTriangulo = 180;
    HcArbol = 180;
    HcCalavera = 180;
    HcOjo = 180;
    cBrillo = 255;
    HcPera =180;
    HcPersona = 180;
    HcPatron1 =  180;
    HcPlatillo = 180;
  }
    if(Herramienta == 2)
  {
    triangle(mouseX-15,mouseY+10,mouseX+15,mouseY+10,mouseX,mouseY-20);
    HcCirculo = 180;
    HcCuadrado = 180;
    HcTriangulo = 255;
    HcArbol = 180;
    HcCalavera = 180;
    HcOjo = 180;
    cBrillo = 255;
    HcPera =180;
    HcPersona = 180;
    HcPatron1 =  180;
    HcPlatillo = 180;
  }
    if(Herramienta == 3)
    {
      fill(HcArbolR,HcArbolG,HcArbolB);
      ellipse(mouseX,mouseY,HtArbol,HtArbol);
      ellipse(mouseX-10,mouseY+10,HtArbol-5,HtArbol-5);
      ellipse(mouseX+10,mouseY+10,HtArbol-5,HtArbol-5);
      fill(HcArbolR-70,HcArbolG-70,HcArbolB-70);
      beginShape();
       vertex(mouseX-3,mouseY+15);
       vertex(mouseX-5,mouseY+30);
       vertex(mouseX+5,mouseY+30);
       vertex(mouseX+3,mouseY+15);
       vertex(mouseX+6,mouseY);
       vertex(mouseX,mouseY+10);
       vertex(mouseX-6,mouseY);
      endShape(CLOSE);
     HcCirculo = 180;
     HcCuadrado = 180;
     HcTriangulo = 180;
     HcArbol = 255;
     HcCalavera = 180;
     HcOjo = 180;
     cBrillo = 255;
     HcPera =180;
     HcPersona = 180;
     HcPatron1 =  180;
     HcPlatillo = 180;
    }
    if(Herramienta == 4)
    {
      fill(HcCalaveraR,HcCalaveraG,HcCalaveraB);
      ellipse(mouseX,mouseY,HtCalavera,HtCalavera);
      rect(mouseX-10,mouseY+5,HtCalavera-5,HtCalavera-10,20);
      fill(HcCalaveraR-HcCalaveraR,HcCalaveraG-HcCalaveraG,HcCalaveraB-HcCalaveraB);
      ellipse(mouseX-6,mouseY+2,HtCalavera-15,HtCalavera-15);
      ellipse(mouseX+6,mouseY+2,HtCalavera-15,HtCalavera-15);
      rect(mouseX-7,mouseY+10,HtCalavera-20,HtCalavera-15);
      rect(mouseX+2,mouseY+10,HtCalavera-20,HtCalavera-15);
      HcCirculo = 180;
      HcCuadrado = 180;
      HcTriangulo = 180;
      HcArbol = 180;
      HcCalavera = 255;
      HcOjo = 180;
      cBrillo = 255;
      HcPera =180;
      HcPersona = 180;
      HcPatron1 =  180;
      HcPlatillo = 180;
    }
    if(Herramienta == 5)
    {
      fill(HcOjoR,HcOjoG,HcOjoB);
      ellipse(mouseX,mouseY,HtOjo,HtOjo);
      fill(HcOjoR-70,HcOjoG-70,HcOjoB-70);
      ellipse(mouseX,mouseY,HtOjo-10,HtOjo-10);
      fill(HcOjoR-150,HcOjoG-150,HcOjoB-150);
      ellipse(mouseX,mouseY,HtOjo-20,HtOjo-20);
      fill(cBrillo+255);
      ellipse(mouseX-7,mouseY-5,HtOjo-25,HtOjo-25);
      stroke(cBrillo+255);
      line(mouseX+3,mouseY-3,mouseX+7,mouseY-7);
      noStroke();
      HcCirculo = 180;
      HcCuadrado = 180;
      HcTriangulo = 180;
      HcArbol = 180;
      HcCalavera = 180;
      HcOjo = 255;
      cBrillo = 0;
      HcPera =180;
      HcPersona = 180;
      HcPatron1 =  180;
      HcPlatillo = 180;
    }
    if(Herramienta == 6)
    {
      fill(HcPeraR,HcPeraG,HcPeraB);
      ellipse(mouseX,mouseY,HtPera,HtPera);
      ellipse(mouseX,mouseY-9,HtPera-8,HtPera-8);
      noFill();
      strokeWeight(3);
      stroke(HcPeraR+100,HcPeraG+100,HcPeraB+100);
      arc(mouseX+12,mouseY-18,HtPera-2,HtPera-2, PI, PI + QUARTER_PI);
      fill(HcPeraR-100,HcPeraG-100,HcPeraB-100);
      noStroke();
      ellipse(mouseX+7,mouseY-27,HtPera-18,HtPera-18);
      triangle(mouseX+10,mouseY-25,mouseX+10,mouseY-30,mouseX+17,mouseY-27);
      fill(HcPeraR-140,HcPeraG-140,HcPeraB-140);
      ellipse(mouseX-8,mouseY-3,HtPera-20,HtPera-20);
      ellipse(mouseX+4,mouseY+8,HtPera-22,HtPera-22);
      ellipse(mouseX+5,mouseY-4,HtPera-19,HtPera-19);
      HcCirculo = 180;
      HcCuadrado = 180;
      HcTriangulo = 180;
      HcArbol = 180;
      HcCalavera = 180;
      HcOjo = 180;
      cBrillo = 255;
      HcPera =255;
      HcPersona = 180;
      HcPatron1 =  180;
      HcPlatillo = 180;
    }
    if(Herramienta == 7)
    {
      fill(HcPersonaR,HcPersonaG,HcPersonaB);
      ellipse(mouseX,mouseY,HtPersona,HtPersona);
      strokeWeight(8);
      stroke(HcPersonaR-70,HcPersonaG-70,HcPersonaB-70);
      line(mouseX,mouseY+12,mouseX,mouseY+22);
      strokeWeight(4);
      line(mouseX+1,mouseY+9,mouseX+10,mouseY+20);
      line(mouseX-1,mouseY+9,mouseX-10,mouseY+20);
      line(mouseX,mouseY+18,mouseX-8,mouseY+30);
      line(mouseX,mouseY+18,mouseX+8,mouseY+30);
      noStroke();
      HcCirculo = 180;
      HcCuadrado = 180;
      HcTriangulo = 180;
      HcArbol = 180;
      HcCalavera = 180;
      HcOjo = 180;
      cBrillo = 255;
      HcPera =180;
      HcPersona = 255;
      HcPatron1 =  180;
      HcPlatillo = 180;
    }
    if(Herramienta == 8)
    {
      beginShape(); 
       vertex(mouseX+2,mouseY);
       vertex(mouseX+7,mouseY+5);
       vertex(mouseX+12,mouseY);
       vertex(mouseX+7,mouseY-5);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX+14,mouseY);
       vertex(mouseX+19,mouseY+5);
       vertex(mouseX+24,mouseY);
       vertex(mouseX+19,mouseY-5);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX-2,mouseY);
       vertex(mouseX-7,mouseY+5);
       vertex(mouseX-12,mouseY);
       vertex(mouseX-7,mouseY-5);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX-14,mouseY);
       vertex(mouseX-19,mouseY+5);
       vertex(mouseX-24,mouseY);
       vertex(mouseX-19,mouseY-5);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX,mouseY-2);
       vertex(mouseX+5,mouseY-7);
       vertex(mouseX,mouseY-12);
       vertex(mouseX-5,mouseY-7);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX,mouseY+2);
       vertex(mouseX+5,mouseY+7);
       vertex(mouseX,mouseY+12);
       vertex(mouseX-5,mouseY+7);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX+2,mouseY-14);
       vertex(mouseX+7,mouseY-9);
       vertex(mouseX+12,mouseY-14);
       vertex(mouseX+7,mouseY-19);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX-2,mouseY-14);
       vertex(mouseX-7,mouseY-9);
       vertex(mouseX-12,mouseY-14);
       vertex(mouseX-7,mouseY-19);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX+2,mouseY+14);
       vertex(mouseX+7,mouseY+9);
       vertex(mouseX+12,mouseY+14);
       vertex(mouseX+7,mouseY+19);
      endShape(CLOSE);
      beginShape(); 
       vertex(mouseX-2,mouseY+14);
       vertex(mouseX-7,mouseY+9);
       vertex(mouseX-12,mouseY+14);
       vertex(mouseX-7,mouseY+19);
      endShape(CLOSE);
      HcCirculo = 180;
      HcCuadrado = 180;
      HcTriangulo = 180;
      HcArbol = 180;
      HcCalavera = 180;
      HcOjo = 180;
      cBrillo = 255;
      HcPera =180;
      HcPersona = 180;
      HcPatron1 =  255;
      HcPlatillo = 180;
    }
    if(Herramienta == 9)
    {
      fill(HcPlatilloR,HcPlatilloG,HcPlatilloB);
      ellipse(mouseX,mouseY,HtPlatillo,HtPlatillo);
      fill(HcPlatilloR-90,HcPlatilloG-90,HcPlatilloB-90);
      ellipse(mouseX,mouseY+5,HtPlatillo+15,HtPlatillo-5);
      stroke(HcPlatilloR+50,HcPlatilloG+50,HcPlatilloB+50);
      point(mouseX,mouseY+5);
      point(mouseX-9,mouseY+5);
      point(mouseX+9,mouseY+5);
      noStroke();
      HcCirculo = 180;
      HcCuadrado = 180;
      HcTriangulo = 180;
      HcArbol = 180;
      HcCalavera = 180;
      HcOjo = 180;
      cBrillo = 255;
      HcPera =180;
      HcPersona = 180;
      HcPatron1 =  180;
      HcPlatillo = 255;
    }
  }
}