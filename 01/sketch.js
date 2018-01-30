function setup()
{ 
  // Tamaño de hoja de trabajo 
  createCanvas(700, 300);
  
  // Color fondo hoja de trabajo segun el cuadro de Kandinsky
  background(204);
  
  //Esfera superior de izquierda a derecha 1
  strokeWeight(2);
  stroke(0);
  fill(255);
  ellipse(158,73, 85,78);
  //Borde de color de la esfera 1
  strokeWeight(4)
  stroke(102,102,153,80);
  fill(255);
  ellipse(158,73,85,78);
  
  //Esfera superior de izquierda a derecha 2
  strokeWeight(2);
  stroke(0);
  fill(255);
  ellipse(246,70.5, 85,78);
  //Borde de color de la esfera 2
  strokeWeight(6)
  stroke(204,204,102,150);
  fill(255);
  ellipse(246,70.5,85,78);
  
  //Esfera superior de izquierda a derecha 3
  strokeWeight(3);
  stroke(204,0,0);
  fill(255);
  ellipse(334,73, 85,78);
  
  //Esfera superior de izquierda a derecha 4
  strokeWeight(2);
  stroke(0);
  fill(255);
  ellipse(422,73, 85,78);
  
  //Rectangulo para tapar la parte inferiror de las esferas anteriores
  noStroke();
  fill(204);
  rect(107,76,385,45);
  
  //Linea base de las semicircunferencias 
  strokeWeight(3);
  stroke(0);
  line(0,72,553,78);
  
  //Circulo inferior al triangulo
  noStroke();
  fill(102);
  ellipse(561,190,98,98);
  
  //Triangulo
  noStroke();
  fill(204,153,51,180);
  beginShape();
    vertex(553,78);
    vertex(488,150);
    vertex(578,174);
  endShape(CLOSE); 
  
  //Cuadrado 
  strokeWeight(1);
  stroke(0);
  fill(102,0,0);
  rect(602,213,38,38);
  
  //Lineas superior del cuadrado
  strokeWeight(1);
  stroke(0);
  line(623,230,650,230);
  
  //Linea inferior del cuadrado
  strokeWeight(2);
  stroke(0);
  line(623,235,650,235);
  
  //Circunferencia inferior a la linea (piso 1) C1 de izquierda a derecha
  strokeWeight(1);
  stroke(0);
  fill(204);
  ellipse(203,118,85,78);
  //Borde de la circunferencia C1 de izquierda a derecha
  strokeWeight(3);
  stroke(204,153,153,130);
  fill(204);
  ellipse(203,118,85,78);
  
  //Circunferenica infeiror a la linea (piso 1) C2 de izquierda a derecha
  strokeWeight(1);
  stroke(0);
  fill(204);
  ellipse(290,118,85,78);
  
  //Rectangulo para tapar la parte inferiror de las esferas anteriores
  noStroke();
  fill(204);
  rect(142,126,207,56);
  
  //Circunferenica infeiror a la linea (piso 2) C1
  strokeWeight(1);
  stroke(0);
  fill(204);
  ellipse(332,164,85,78);
  
  //Rectangulo para tapar la parte inferiror de la esfera anterior
  noStroke();
  fill(204);
  rect(274,174,139,55);
  
  //Circunferenica infeiror a la linea (piso 3) C1
  strokeWeight(1);
  stroke(0);
  fill(204);
  ellipse(375,214,85,78);
  
  //Rectangulo para tapar la parte inferiror de la esfera anterior
  noStroke();
  fill(204);
  rect(307,223,139,55);
  
  //Circunferenica purpura
  strokeWeight(1);
  noStroke();
  fill(102,102,153);
  ellipse(443,140,58,57);
  
  //Linea vertical que atraviesa la esfera purpura
  strokeWeight(2);
  stroke(0);
  line(400,0,479,250);
  
  //Linea Horizontal 1 que atraviesa la linea vertical
  strokeWeight(1);
  stroke(0);
  line(371,139,534,139);
  
  //Linea Horizontal 2 que atraviesa la linea vertical
  strokeWeight(1);
  stroke(0);
  line(423,217,542,214);
  
  //Linea digonal izquierda
  strokeWeight(2);
  stroke(0);
  line(519,0,700,273);
  
  //Tiangulo 1 de izquierda a derecha 
  stroke(1);
  fill(102,51,0);
  beginShape();
    vertex(538,0);
    vertex(596,86);
    vertex(545,0);
  endShape(CLOSE); 
  
  //Tiangulo 2 de izquierda a derecha 
  stroke(1);
  fill(102,51,0);
  beginShape();
    vertex(557,0);
    vertex(587,42);
    vertex(562,0);
  endShape(CLOSE); 
  
  //Tiangulo 3 de izquierda a derecha 
  stroke(1);
  fill(102,51,0);
  beginShape();
    vertex(587,0);
    vertex(609,34);
    vertex(591,0);
  endShape(CLOSE); 
  
  //Rectangulo negro izquierda
  noStroke();
  fill(0);
  beginShape();
    vertex(616,0);
    vertex(656,13);
    vertex(656,8);
    vertex(632,0);
  endShape(CLOSE); 
  
  //Rectangulo verde izquierda
  noStroke();
  fill(204,204,102,200);
  beginShape();
    vertex(420,0);
    vertex(453,38);
    vertex(461,29);
    vertex(432,0);
  endShape(CLOSE); 
  
  //Linea inferior que atraviesa la C1 del piso 2
  strokeWeight(1);
  stroke(0);
  line(266,203,380,83);
  
  //Linea del medio que atraviesa la C1 del piso 2
  strokeWeight(1);
  stroke(0);
  line(263,200,376,82);
  
  //Linea supeior que atraviesa la C1 del piso 2
  strokeWeight(1);
  stroke(0);
  line(261,197,372,80);
  
  //Linea inferior que atraviesa la C1 del piso 1
  strokeWeight(1);
  stroke(0);
  line(251,145,364,27);
  
  //Linea del medio que atraviesa la C1 del piso 1
  strokeWeight(1);
  stroke(0);
  line(248,140,347,38);
  
  //Linea superior que atraviesa la C1 del piso 1
  strokeWeight(1);
  stroke(0);
  line(244,137,329,52);
  
  //Linea vertical del medio
  strokeWeight(1);
  stroke(0);
  line(287,44,287,300);
  
  //Rectangulo que atraviesa las circunferenicas superiorires 
  stroke(0);
  noFill();
  beginShape();
    vertex(389,0);
    vertex(228,115);
    vertex(232,121);
    vertex(401,0);
  endShape(CLOSE); 
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Rectangulo negro)
  noStroke();
  fill(0);
  beginShape();
    vertex(228,115);
    vertex(244,104);
    vertex(246,111);
    vertex(232,121);
  endShape(CLOSE); 
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Linea 1 de izquierda a derecha)
  strokeWeight(1);
  stroke(0);
  line(260,93,264,98);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Linea 2 de izquierda a derecha)
  strokeWeight(1);
  stroke(0);
  line(262,90,267,96);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Linea 3 de izquierda a derecha)
  strokeWeight(1);
  stroke(0);
  line(265,88,270,94);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Linea 4 de izquierda a derecha)
  strokeWeight(1);
  stroke(0);
  line(268,86,273,92);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Linea 5 de izquierda a derecha)
  strokeWeight(1);
  stroke(0);
  line(271,83,276,89);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Linea 6 de izquierda a derecha)
  strokeWeight(1);
  stroke(0);
  line(274,81,279,87);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Linea 7 de izquierda a derecha)
  strokeWeight(1);
  stroke(0);
  line(279,79,283,84);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Rectangulo gris)
  noStroke();
  fill(102);
  beginShape();
    vertex(279,79);
    vertex(283,84);
    vertex(351,36);
    vertex(344,33);
  endShape(CLOSE); 
  
  //Rectangulo que atraviesa las circunferenicas superiorireres (Linea vertical del medio)
  strokeWeight(1);
  stroke(0,0,0,180);
  line(287,44,287,300);
  
  //Rectangulo que atraviesa las circunferenicas superiorireres (Linea base de las semicircunferencias) 
  strokeWeight(3);
  stroke(0,0,0,180);
  line(0,72,553,78);
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Rectangulo negro del medio)
  noStroke();
  fill(0);
  beginShape();
    vertex(351,36);
    vertex(344,33);
    vertex(374,10);
    vertex(378,16);
  endShape(CLOSE); 
  
  //Rectangulo que atraviesa las circunferenicas superiorires (Rectangulo rojo)
  noStroke();
  fill(204,0,0);
  beginShape();
    vertex(374,10);
    vertex(378,16);
    vertex(400,0);
    vertex(390,0);
  endShape(CLOSE); 
  
  //Rectangulo rojo izquierda
  noStroke();
  fill(102,0,0,220);
  beginShape();
    vertex(0,73);
    vertex(0,77);
    vertex(267,0);
    vertex(254,0);
  endShape(CLOSE); 
  
  //Rectangulo negro izquierda
  noStroke();
  fill(0);
  beginShape();
    vertex(4,34);
    vertex(5,40);
    vertex(218,0);
    vertex(186,0);
  endShape(CLOSE); 
  
  //Linea vertical que atraviesa la circunferencia superior 1 de izquierda a derecha
  strokeWeight(2);
  stroke(0);
  line(187,0,125,219);
  
  //Linea horizontal superior lado izquierdo 
  strokeWeight(1);
  stroke(0);
  line(100,154,199,155);
  
  //Linea horizontal inferior lado izquierdo 
  strokeWeight(1);
  stroke(0);
  line(101,174,208,175);
  
  //Linea diagonal superior
  strokeWeight(1);
  stroke(0);
  line(276,0,308,28);
  
  //Linea diagonal superior lado derecho
  strokeWeight(1);
  stroke(0);
  line(128,122,0,204);
  
  //Circunferenica 1 amarilla inferior 
  noStroke();
  fill(204,204,102,150);
  ellipse(80,212,83,83);
  
  //Circunferenica 2 amarilla inferior 
  noStroke();
  fill(204,204,102,220);
  ellipse(78,210,75,75);
  
  //Circunferenica rosa inferior 
  noStroke();
  fill(204,153,153);
  ellipse(78,211,69,69);
  
  //Circunferenica rosa inferior 
  noStroke();
  fill(0,51,102);
  ellipse(76,209,55,55);
  
  //Linea diagonal inferior lado derecho
  strokeWeight(1);
  stroke(0);
  line(0,259,106,160);
}
  
  
  
  
  