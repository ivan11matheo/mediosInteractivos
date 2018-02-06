//Variables del tamaño Canvas 
var xCan = 720;
var yCan = 250;
//Variables de cuadricula de apoyo 
var x = 0;
var y = 0; 
var tam = 10;


function setup() 
{ 
  createCanvas(xCan, yCan);
  background(220);
  
  //Cuadricula de apoyo
  for(var col = 0; col < xCan; col = col + 1)
  {
    noStroke();
    noFill();
    for(var fil = 0; fil < yCan; fil = fil + 1)
    {
      rect(x,y,tam,tam);
      x = x + 10;
    }
    x = 0;
    y = y +10;
  }
  
  //Recuadros negros fila 1 y 2
  x = 0;
  y = 0;
  for(var col = 0; col < xCan; col = col +1 )
  {
    for(var fil = 0; fil < 2; fil = fil + 1)
    {
      fill(0);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 0; 
    x = x + 10;
  }
  
  //Recuadros morados
  x = 0;
  y = 20;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(60,49,53);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros cafe fila 1
  x = 0;
  y = 30;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(135,84,63);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros rosa
  x = 0;
  y = 40;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(160,86,87);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros naranja
  x = 0;
  y = 50;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(184,132,85);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros amarillo
  x = 0;
  y = 60;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(183,116,48);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros cafe fila 2
  x = 0;
  y = 70;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(135,84,63);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros grises
  x = 0;
  y = 80;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(182,149,114);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros verdes
  x = 0;
  y = 90;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(46,102,77);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros naranjas lineas 1 y 2 
  x = 0;
  y = 100;
  for(var col = 0; col < xCan; col = col +1 )
  {
    for(var fil = 0; fil < 2; fil = fil + 1)
    {
      fill(228,180,118);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 100; 
    x = x + 10;
  }
  
  //Recuadros azules lineas 1 y 2 
  x = 0;
  y = 120;
  for(var col = 0; col < xCan; col = col +1 )
  {
    for(var fil = 0; fil < 2; fil = fil + 1)
    {
      fill(51,108,163);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 120; 
    x = x + 10;
  }
  
  //Recuadros rojos
  x = 0;
  y = 160;
  for(var col = 0; col < xCan; col = col +1)
  {
    noStroke();
    fill(135,45,21);
    rect(x,y,tam,tam);
    x = x + 10;
  }
  
  //Recuadros blancos fila 1 y 2
  x = 0;
  y = 170;
  for(var col = 0; col < xCan; col = col +1 )
  {
    for(var fil = 0; fil < 2; fil = fil + 1)
    {
      fill(218,182,134);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 170; 
    x = x + 10;
  }
  
  //Recuadros negros fila 3 izquierda (intermitente)
  x = 0;
  y = 170;
  for(var col = 0; col < 6; col = col +1 )
  {
    for(var col2 = 0; col2 < 1; col2 = col2 + 1)
    {
      fill(0);
      rect(x ,y,tam + tam ,tam);
      x = x + 20;
    } 
    x = x + 10;
  }
  
  //Recuadros negros fila 3 derecha (intermitente)
  x = 550;
  y = 170;
  for(var col = 0; col < 6; col = col +1 )
  {
    for(var col2 = 0; col2 < 1; col2 = col2 + 1)
    {
      fill(0);
      rect(x ,y,tam + tam ,tam);
      x = x + 20;
    } 
    x = x + 10;
  }
  
  //Columnas superiores naranja izquierda (intermitente)
  x = 20;
  y = 0;
  for(var col = 0; col < 3 ; col = col +1)
  {
    for(var fil = 0; fil < 17; fil = fil + 1)
    {
      noStroke();
      fill(184,132,85);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 0;
    x = x + 60;
  }
  
  //Columnas superiores negras izquierda (intermitente)
  x = 50;
  y = 0;
  for(var col = 0; col < 3; col = col + 1)
  {
    for (var fil = 0; fil < 19; fil = fil + 1)
    {
      fill(0);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 0;
    x = x + 60;
  }
  
  //Recuadros naranja fila 1 izquierda (intermitentes)
  x = 190;
  y = 0; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(184,132,85);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros naranja fila 2 izquierda (intermitentes)
  x = 180;
  y = 10; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(184,132,85);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Columnas superiores naranjas medio-izquierda (intermitente)
  x = 200;
  y = 0;
  for(var col = 0; col < 6; col = col + 1)
  {
    for (var fil = 0; fil < 12; fil = fil + 1)
    {
      fill(186,133,83);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 0;
    x = x + 30;
  }
  
  //Columnas superiores naranjas medio-derecha (intermitente)
  x = 360;
  y = 0;
  for(var col = 0; col < 6; col = col + 1)
  {
    for (var fil = 0; fil < 12; fil = fil + 1)
    {
      fill(186,133,83);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 0;
    x = x + 30;
  }
  
  //Recuadros naranja fila 1 derecha (intermitentes)
  x = 370;
  y = 0; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(184,132,85);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros naranja fila 2 derecha (intermitentes)
  x = 380;
  y = 10; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(184,132,85);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Columnas negras superiores derecha (intermitente)
  x = 540;
  y = 0;
  for(var col = 0; col < 3; col = col + 1)
  {
    for (var fil = 0; fil < 19; fil = fil + 1)
    {
      fill(0);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 0;
    x = x + 60;
  }
  
  //Recuadros naranjas lineas 3 y 4
  x = 0;
  y = 140;
  for(var col = 0; col < xCan; col = col +1 )
  {
    for(var fil = 0; fil < 2; fil = fil + 1)
    {
      fill(228,180,118,230);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 140; 
    x = x + 10;
  }
  
  //Columnas superiores naranja derecha (intermitente)
  x = 570;
  y = 0;
  for(var col = 0; col < 3 ; col = col +1)
  {
    for(var fil = 0; fil < 17; fil = fil + 1)
    {
      noStroke();
      fill(184,132,85);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 0;
    x = x + 60;
  }
  
  //Recuadros amarillos intermedios izquierda fila 1 (intermitentes)
  x = 180;
  y = 20; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(233,177,92);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros amarillos intermedios derecha fila 2 (intermitentes)
  x = 380;
  y = 20; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(233,177,92);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros rosas intermedios izquierda fila 1(intermitentes)
  x = 180;
  y = 30; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(216,170,136);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros rosas intermedios derecha fila 1(intermitentes)
  x = 380;
  y = 30; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(216,170,136);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros amarillos intermedios izquierda fila 2 (intermitentes)
  x = 190;
  y = 40; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(233,177,92);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros amarillos intermedios derecha fila 2 (intermitentes)
  x = 370;
  y = 40; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(233,177,92);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros blancos intermedios izquierda (intermitentes)
  x = 180;
  y = 50; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(223,170,118);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros blancos intermedios derecha (intermitentes)
  x = 380;
  y = 50; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(223,170,118);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros grisess intermedios izquierda (intermitentes)
  x = 190;
  y = 60; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(214,166,100);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros grisess intermedios derecha (intermitentes)
  x = 370;
  y = 60; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(214,166,100);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros amarillos intermedios izquierda fila 3 (intermitentes)
  x = 180;
  y = 70; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(233,177,92);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros amarillos intermedios izquierda fila 3 (intermitentes)
  x = 380;
  y = 70; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(233,177,92);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros negros intermedios izquierda fila 1(intermitentes)
  x = 190;
  y = 80; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(0);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros negros intermedios derecha fila 1(intermitentes)
  x = 370;
  y = 80; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(0);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros negros intermedios izquierda fila 2(intermitentes)
  x = 180;
  y = 90; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(0);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros negros intermedios derecha fila 2(intermitentes)
  x = 380;
  y = 90; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(0);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros azules intermedios izquierda (intermitentes)
  x = 180;
  y = 100; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(114,123,120);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros azules intermedios derecha (intermitentes)
  x = 380;
  y = 100; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(114,123,120);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros rosas intermedios izquierda  fila 2(intermitentes)
  x = 190;
  y = 110; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(216,170,136);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Recuadros rosas intermedios derecha fila 2(intermitentes)
  x = 370;
  y = 110; 
  for(var col = 0; col < 6; col = col + 1)
  {
    noStroke();
    fill(216,170,136);
    rect(x,y,tam,tam);
    x = x + 30;
  }
  
  //Rectanculo morado intermedio 
  noStroke();
  fill(85,59,84);
  rect(180,120,360,20);
  
  //Lineas diagonales acedientes intermedias 
  x = 180;
  y = 140;
  for(var col = 0; col < 36; col = col + 1)
  {
    stroke(255,0,0)
    line(x, y + 20, x +10, y);
    x = x + 10;
  }
  
  //Lineas diagonales decendientes intermedias 
  x = 180;
  y = 140;
  for(var col = 0; col < 36; col = col + 1)
  {
    stroke(255,0,0)
    line(x, y, x +10, y + 20);
    x = x + 10;
  }
  
  //Rectanculo rojo intermedio 
  noStroke();
  fill(106,15,22);
  rect(180,160,360,10);
  
  //Cuadricula blanco y negro intermedio
  x = 180;
  y = 170;
  for(var col = 0; col < 5; col = col + 1)
  {
    fill(0);
    for(var fil = 0; fil < 90; fil = fil + 1)
    {
      rect(x,y,2,2);
      x = x + 4;
    }
    x = 180;
    y = y + 4;
  }
  
  //Cuadricula blanco y negro intermedio
  x = 182;
  y = 172;
  for(var col = 0; col < 5; col = col + 1)
  {
    fill(255);
    for(var fil = 0; fil < 90; fil = fil + 1)
    {
      rect(x,y,2,2);
      x = x + 4;
    }
    x = 182;
    y = y + 4;
  }
  
  //Rectangulo rojo izquierda 
  noStroke();
  fill(165,3,0);
  rect(0,230,180,20);
  
  //Rectangulo rojo derecha
  noStroke();
  fill(165,3,0);
  rect(540,230,180,20);
  
  //Circunferencias grises (lado izquierdo)
  x = 10;
  y = 230;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(199,182,166);
    ellipse(x,y,30,30);
    x = x + 30;
  }
  
  //Circunferencias grises (lado derecho)
  x = 560;
  y = 230;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(199,182,166);
    ellipse(x,y,30,30);
    x = x + 30;
  }
  
  //Recuadros amarillos fila 1 y 2
  x = 0;
  y = 210;
  for(var col = 0; col < xCan; col = col +1 )
  {
    for(var fil = 0; fil < 2; fil = fil + 1)
    {
      fill(233,177,92);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 210; 
    x = x + 10;
  }
  
  //Circunferencias cafes posteriores a la linea roja (lado izquierdo)
  x = 10;
  y = 210;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(135,84,63);
    ellipse(x,y,30,30);
    x = x + 30;
  }
  
  //Circunferencias cafes posteriores a la linea roja (lado derecho)
  x = 560;
  y = 210;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(135,84,63);
    ellipse(x,y,30,30);
    x = x + 30;
  }
  
  //Recuadros rojos fila 1 y 2
  x = 0;
  y = 190;
  for(var col = 0; col < xCan; col = col +1 )
  {
    for(var fil = 0; fil < 2; fil = fil + 1)
    {
      fill(94,6,4);
      rect(x,y,tam,tam);
      y = y + 10;
    }
    y = 190; 
    x = x + 10;
  }
  
  //Triangulos azules sentido (derecha)
  x = 180;
  y = 190;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(33,29,80);
    beginShape();
     vertex(x,y);
     vertex(x + 30, y + 10);
     vertex(x, y + 20);
    endShape(CLOSE);
    x = x + 60;
  }
  
  //Triangulos azules sentido (izquierda)
  x = 240;
  y = 190;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(33,29,80);
    beginShape();
     vertex(x,y);
     vertex(x - 30, y + 10);
     vertex(x, y + 20);
    endShape(CLOSE);
    x = x + 60;
  }
  
  //Triangulos azules lado izquierdo
  x = 20;
  y = 200;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(33,29,80);
    beginShape();
     vertex(x,y);
     vertex(x + 7, y + 7);
     vertex(x - 7, y + 7);
    endShape(CLOSE);
    x = x + 32;
  }
  
  //Triangulos azules lado derecho
  x = 540;
  y = 200;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(33,29,80);
    beginShape();
     vertex(x,y);
     vertex(x + 7, y + 7);
     vertex(x - 7, y + 7);
    endShape(CLOSE);
    x = x + 32;
  }
  
   //Triangulos cafes intermedios
  x = 180;
  y = 210;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(135,84,63);
    beginShape();
     vertex(x,y);
     vertex(x + 60, y);
     vertex(x + 30, y + 20);
    endShape(CLOSE);
    x = x + 60;
  }
  
  //Rectangulo gris centro 
  noStroke();
  fill(199,182,166);
  rect(180,230,360,20);
  
  //Triangulos rojos intermedios
  x = 180;
  y = 225;
  for(var col = 0; col < 6; col = col + 1)
  {
    fill(165,3,0);
    beginShape();
     vertex(x,y + 20);
     vertex(x + 60, y + 20);
     vertex(x + 30, y + 5);
    endShape(CLOSE);
    x = x + 60;
  }
  
}