//Variables de tiempo
var segundo; 
var minuto; 
var hora;

//Variables de regla de 3 
var sMap;
var mMap;
var hMap;

//Variables de tamaño 
var ts = 10;
var tm = 20;
var th = 30;

//Variables de color 
var C1 = 255;
var C2 = 178;
var C3 = 30;
function setup() 
{ 
  createCanvas(600, 600);
  //Cambiar angulo Pi a grados 
  angleMode(DEGREES);
} 

function draw() 
{ 
  background(0);
  
  //Guardar valores de tiempo real en variables de tiempo 
  segundo = second();
  minuto = minute();
  hora = hour();

  //Cambiar el centro del Canvas 
  translate(width/2,height/2);
  fill(218,165,32);
  ellipse(0,0,220,220);
  fill(0,128,128);
  ellipse(0,0,150,150);
  fill(173,255,47);
  ellipse(0,0,90,90);
  fill(0);
  ellipse(0,0,10,10);
  noStroke();
  
  //Circunferencias segundos (Una por cada 10 segundos)
  push();
  sMap = map(segundo,0,59,0,359);
  rotate(sMap);
  fill(C1,C1,C1-C1);
  if(segundo==0||segundo<=10)
  {
    fill(0);
    ellipse(0,-50,ts,ts);
  }
  if(segundo>10)
  {
  ellipse(0,-50,ts,ts);
  }
  if(segundo>20)
  {
    ellipse(-10,-49,ts,ts);
  }
  if(segundo>30)
  {
    ellipse(-20,-46,ts,ts);
  }
  if(segundo>40)
  {
    ellipse(-30,-41,ts,ts);
  }
  if(segundo>50)
  {
    ellipse(-38,-34,ts,ts);
  }
  pop();
  
  //Circunferencias minutos (Una por cada 10 minutos)
  push();
  mMap = map(minuto,0,59,0,359);
  rotate(mMap);
  fill(C2,C2-144,C2-144);
  if(minuto<10)
  {
    fill(0);
    ellipse(0,-85,tm,tm);
  }
  if(minuto==10||minuto>=10)
  {
    ellipse(0,-85,tm,tm);
  }
  if(minuto>20)
  {
    ellipse(-21,-83,tm,tm);
  }
  if(minuto>30)
  {
    ellipse(-41,-76,tm,tm);
  }
  if(minuto>40)
  {
    ellipse(-58,-63,tm,tm);
  }
  if(minuto>50)
  {
    ellipse(-72,-47,tm,tm);
  }
  pop();
  
  
  //Circunferencias horas (Una por cada hora "12h")
  push();
  hMap = map(hora,0,11,0,359);
  rotate(hMap);
  fill(C3,C3+114,C3+225);
  if(hora>12)
  {
    hora = hora - 12;
  }
  if(hora>0)
  {
    ellipse(0,-125,th,th);
  }
  if(hora>1)
  {
    ellipse(-30,-122,th,th);
  }
  if(hora>2)
  {
    ellipse(-59,-112,th,th);
  }
  if(hora>3)
  {
    ellipse(-84,-93,th,th);
  }
  if(hora>4)
  {
    ellipse(-105,-70,th,th);
  }
  if(hora>5)
  {
    ellipse(-119,-42,th,th);
  }
  if(hora>6)
  {
    ellipse(-125,-11,th,th);
  }
  if(hora>7)
  {
    ellipse(-123,20,th,th);
  }
  if(hora>8)
  {
    ellipse(-115,50,th,th);
  } 
  if(hora>9)
  {
    ellipse(-99,77,th,th);
  }
  if(hora>10)
  {
    ellipse(-77,100,th,th);
  }
  pop();

  
}