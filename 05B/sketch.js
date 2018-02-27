//Variables cuadricula de apoyo
x = 0; 
y = 0;
t = 50;

//Variables botones
//Color
var C1 = 255;
//Posicion
var xB1 = 50;
var yB1 = 50;
var xB2 = 125;
var yB2 = 25;
var xB3 = 150;
var yB3 = 100;
var xB4 = 25;
var yB4 = 150;
var xB5 = 75;
var yB5 = 125;
//Tamaño
var tB1 = 70;
var tB2 = 30;
var tB3 = 50;
var tB4 = 40;
var tB5 = 20;
//Direcciones 
var d1 = 1;
var d2 = 1;
var d3 = 1;
var d4 = 1;
var d5 = 1;
//Funciones
var Act = 0;
var Con = 0;

//Variables de tiempo
var segundo;
var minuto;
var hora; 
//Variables de regla de tres
var sMap;
var mMap; 
var hMap;
var smf = 59;
var mmf = 59;
var hmf = 11;

function setup()
{ 
  createCanvas(400, 400);
  //Cambiar angulo a grados 
  angleMode(DEGREES);
  background(0);
   //Cuadricula de apoyo
  stroke(230);
  fill(0);
  for(var fil = 0; fil < 400; fil = fil +1)
  {
    for(var col = 0; col < 400; col = col + 1)
    {
      //rect(x,y,t,t);
      x = x + 50;
    }
    x = 0;
    y = y + 50;
  }
} 

function draw() 
{ 
  //Botones
  fill(C1,C1-C1,C1-C1);
  ellipse(xB1,yB1,tB1,tB1);
  tB1 = tB1 + 2*d1;
  if(tB1>95 || tB1<20)
  {
    d1 = d1*-1;
  }
    
  ellipse(xB2,yB2,tB2,tB2);
  tB2 = tB2 + 0.5*d2;
  if(tB2>46 || tB2<10)
  {
    d2 = d2*-1;
  }
  
  ellipse(xB3,yB3,tB3,tB3);
  tB3 = tB3 + 3*d3;
  if(tB3>70 || tB3<20)
  {
    d3 = d3*-1;
  }
  
  ellipse(xB4,yB4,tB4,tB4);
  tB4 = tB4 + 0.2*d4;
  if(tB4>47 || tB4<5)
  {
    d4 = d4*-1;
  }
  
  ellipse(xB5,yB5,tB5,tB5);
  tB5 = tB5 - 5*d5;
  if(tB5>47 || tB5<5)
  {
    d5 = d5*-1;
  }
  
  //Funcion de botones
   if(mouseIsPressed) 
  {
    if(mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100)
    {
      Act = 1;
    }
    if(mouseX > 100 && mouseX < 150 && mouseY > 0 && mouseY < 50)
    {
      Act = 2;
    }
    if(mouseX > 100 && mouseX < 200 && mouseY > 50 && mouseY <150)
    {
      Act = 3;
    }
    if(mouseX > 0 && mouseX < 50 && mouseY > 125 && mouseY <175)
    {
      Act = 4;
    }
    if(mouseX > 50 && mouseX < 100 && mouseY > 100 && mouseY <150)
    {
      Act = 5;
    }
    
    //Acciones de botones
    if(Act == 1)
    {
      Con = Con + 2;
    }
    if(Act == 2)
    {
      Con = Con + 1;
    }
    if(Act == 3)
    {
      Con = Con + 4;
    }
    if(Act == 4)
    {
      Con = Con + 0.5;
    }
    if(Act == 5)
    {
      Con = Con + 6;
    }
  }
  
  fill(255);
  //Guardar valores en variables de tiempo
  segundo = second();
  minuto = minute();
  hora = hour();
  //Alteraciones segun los botones
   if(Con == 150)
  {
    smf = 30;
  }
  if(Con == 300)
  {
    smf = 15;
  }
  if(Con == 800)
  {
    smf = 7.5;
  }
  if(segundo == 59)
  {
    Con = Con - 10;
  }
  if(Con < 20)
  {
    smf = 59;
  }
  stroke(0);
  strokeWeight(1);
  translate(width/2,height/2);
  ellipse(0,0,140,140);
  
  //Segundero
  push();
  strokeWeight(0.5);
  sMap = map(segundo,0,smf,0,359);
  rotate(sMap);
  line(0,0,0,-70);
  pop();
  
  //Minutero
  push();
  strokeWeight(2);
  //Regla de tes para minutos a angulos
  mMap = map(minuto,0,mmf,0,359);
  rotate(mMap);
  line(0,0,0,-60);
  pop();
  
  //Hora
  push();
  strokeWeight(3);
  if(hora>12)
  {
    hora = hora - 12;
  }
  //Regla de tres para horas a angulos
  hMap = map(hora,0,hmf,0,359);
  rotate(hMap);
  line(0,0,0,-40);
  pop();
}