//Variables bolas de nieve
//Posicion
var x = 0;
var y = 0; 
var z = 0;
//Color 
var Cb = 255;
//Tamaño 
var Tb = 5;
//Direccion
var Db = 1;


//Varibale de cambio
var mx = 0.0;

function setup() 
{
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() 
{
  //Color de verano 
  background(0,167,230);
  //Cambio del color del fondo a invierno
  if(mx>200)
  {
    background(14,68,154);
  }
  
  //Condicional donde cambia el color del suelo
  if(mx<200)
  {
    fill(113+(mx-200),240+(mx-200),113+(mx-200));
    stroke(113+(mx-250),240+(mx-250),113+(mx-250));
  }
  if(mx>=200)
  {
    fill(113+(mx-250),240+(mx-250),113+(mx-250));
    stroke(113+(mx-350),240+(mx-350),113+(mx-350));
  }
  //Plano del suelo
  rotateY(mx);
  push();
  translate(0,125,0);
  rotateX(90);
  plane(width,400);
  pop();
  
  //Condicional donde cambia el color de las montañas
  if(mx<200)
  {
    fill(113+(mx-200),240+(mx-200),113+(mx-200));
    stroke(113+(mx-250),240+(mx-250),113+(mx-250));
  }
  if(mx>=200)
  {
    fill(113-(mx-250),240-(mx-250),113-(mx-250));
    stroke(113-(mx-350),240-(mx-350),113-(mx-350));
  }
  //Montañas
  push();
  rotateY(mx);
  //Montaña de 5 caras esquina derecha al ser canvas = 400 (montaña 1)
  translate(110,60,150);
  cone(130,-120,5);
  //montaña de 3 caras esquina inferior al ser canvas = 400 (montaña 2)
  translate(-140,20,10);
  cone(100,-90,3);
  //montaña de 4 caras esquina izquierda al ser canvas = 400 (montaña 3)
  translate(-90,-20,-100);
  cone(120,-180,5);
  pop();
  
  //Condicinal donde aparece el sol 
  stroke(200,200,0);
  fill(255,255,0);
  if(mx>200)
  {
    noStroke();
    noFill();
  }
  //Sol 
  push();
  translate(0,-170,0);
  sphere(60);
  pop();
  
  
  //Condicional donde aparecen las nubes de invierno
  stroke(mx-130);
  fill(mx-80);
  if(mx<200)
  {
    noStroke();
    noFill();
  }
  //Condicional donde aparecen las bolas de nieve
  //if(y<100)
  //{
    //noStroke();
    //noFill();
  //}
  //Nube de nieve 1 (central)
  push();
  translate(0,-150,0);
  sphere(35);
  translate(30,10,0);
  sphere(25);
  translate(-70,-5,0);
  sphere(30);
  pop();
  //Bolas de nieve nube 1 ronda 1 de abajo hacia arriba
  push();
  translate(0,mx-310,0);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 1 ronda 2 de abajo hacia arriba
  push();
  translate(0,mx-350,0);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 1 ronda 3 de abajo hacia arriba
  push();
  translate(0,mx-400,0);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 1 ronda 4 de abajo hacia arriba
  push();
  translate(0,mx-450,0);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  
  //Nube de nieve 2 (derecha inferior al ser canvas = 400)
  push();
  translate(180,-130,70);
  sphere(40);
  translate(30,10,0);
  sphere(30);
  translate(-70,-5,0);
  sphere(35);
  pop();
  //Bolas de nieve nube 2 ronda 1 de abajo hacia arriba
  push();
  translate(180,mx-300,70);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 2 ronda 2 de abajo hacia arriba
  push();
  translate(180,mx-350,70);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 2 ronda 3 de abajo hacia arriba
  push();
  translate(180,mx-400,70);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 2 ronda 4 de abajo hacia arriba
  push();
  translate(180,mx-450,70);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  
  //Nube de nieve 3 (central posterior al ser canvas = 400)
  push();
  translate(20,-100,170);
  sphere(40);
  translate(30,10,0);
  sphere(30);
  translate(-70,-5,0);
  sphere(35);
  pop();
  //Bolas de nieve nube 3 ronda 1 de abajo hacia arriba
  push();
  translate(20,mx-290,170);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 3 ronda 2 de abajo hacia arriba
  push();
  translate(20,mx-340,170);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 3 ronda 3 de abajo hacia arriba
  push();
  translate(20,mx-390,170);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 3 ronda 4 de abajo hacia arriba
  push();
  translate(20,mx-440,170);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  
  //Nube de nieve 4 (inferior izquierda al ser canvas = 400)
  push();
  translate(-140,-80,50);
  sphere(40);
  translate(30,10,0);
  sphere(30);
  translate(-70,-5,0);
  sphere(35);
  pop();
  //Bolas de nieve nube 4 ronda 1 de arriba hacia abajo
  push();
  translate(-140,mx-280,50);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 4 ronda 2 de arriba hacia abajo
  push();
  translate(-140,mx-330,50);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 4 ronda 3 de arriba hacia abajo
  push();
  translate(-140,mx-380,50);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 4 ronda 4 de arriba hacia abajo
  push();
  translate(-140,mx-430,50);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  
  
  
  
  //Nube de nieve 5 (posterior derecha al ser canvas = 400)
  push();
  translate(140,-100,-100);
  sphere(40);
  translate(30,10,0);
  sphere(30);
  translate(-70,-5,0);
  sphere(35);
  pop();
  //Bolas de nieve nube 5 ronda 1 de arriba hacia abajo
  push();
  translate(140,mx-320,-100);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 5 ronda 2 de arriba hacia abajo
  push();
  translate(140,mx-370,-100);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 5 ronda 3 de arriba hacia abajo
  push();
  translate(140,mx-420,-100);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 5 ronda 4 de arriba hacia abajo
  push();
  translate(140,mx-470,-100);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  
  //Nube de nieve 6 (central posteior al ser canvas = 400)
  push();
  translate(30,-140,-180);
  sphere(40);
  translate(30,10,0);
  sphere(30);
  translate(-70,-5,0);
  sphere(35);
  pop();
  //Bolas de nieve nube 6 ronda 1 de arriba hacia abajo
  push();
  translate(30,mx-330,-180);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 6 ronda 2 de arriba hacia abajo
  push();
  translate(30,mx-380,-180);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 6 ronda 3 de arriba hacia abajo
  push();
  translate(30,mx-430,-180);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 6 ronda 4 de arriba hacia abajo
  push();
  translate(30,mx-480,-180);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  
  
  //Nube de nieve 7 (posterior izquierda al ser canvas = 400)
  push();
  translate(-150,-120,-80);
  sphere(40);
  translate(30,10,0);
  sphere(30);
  translate(-70,-5,0);
  sphere(35);
  pop();
  //Bolas de nieve nube 7 ronda 1 de arriba hacia abajo
  push();
  translate(-150,mx-310,-80);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 7 ronda 2 de arriba hacia abajo
  push();
  translate(-150,mx-360,-80);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 7 ronda 3 de arriba hacia abajo
  push();
  translate(-150,mx-410,-80);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();
  //Bolas de nieve nube 7 ronda 4 de arriba hacia abajo
  push();
  translate(-150,mx-460,-80);
  sphere(5);
  translate(0,-10,25);
  sphere(5);
  translate(45,-5,15);
  sphere(5);
  translate(-25,10,-15);
  sphere(5);
  translate(-45,-10,20);
  sphere(5);
  translate(10,-15,-30);
  sphere(5);
  translate(0,15,-40);
  sphere(5);
  translate(50,0,0);
  sphere(5);
  translate(-100,-10,50);
  sphere(5);
  pop();

  //Popas de nieve 
  if(mx<300)
  {
    noStroke();
    noFill();
  }
  push();
  rotateY(mx);
  //Popa de 5 caras esquina derecha al ser canvas = 400
  translate(110,10,150);
  cone(50,-60,5);
  //Popa de 3 caras esquina inferior al ser canvas = 400
  translate(-140,25,10);
  cone(20,-30,3);
  //Popa de 4 caras esquina izquierda al ser canvas = 400
  translate(-90,-40,-100);
  cone(60,-120,5);
  pop();
   
  //Condicional donde cambia el color del lago
  if(mx<200)
  {
    fill(0+(mx-100),0+(mx-100),255+(mx-100));
    stroke(0+(mx-150),0+(mx-150),255+(mx-150));
  }
  if(mx>=200)
  {
    fill(0+(mx-180),0+(mx-180),255+(mx-180));
    stroke(0+(mx-230),0+(mx-230),255+(mx-230));
  }
  //Lago
  push();
  rotateY(mx);
  stroke(0);
  translate(-10,184,-120);
  cylinder(120,90);
  pop();
  
  
  // ------- SU CODIGO AQUÍ ------- //
  // Actualiza a localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height/2)-4);
  plane(width, 5);
  pop();
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx-(width/2)-1, (height/2)-4);
  plane(4, 5);
  pop();
}