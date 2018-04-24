//Variables de base de datos
var datos;
var fecha;
var lugar;
var cantidad;

//Variables de posición
var posX = 50;
var posY = 50;

//Variables de imagenes
var ABC;
var Craneo;

//Variables botones
var Letras = 0;
function preload() 
{
  //Carga la base de datos en el formato CSV
  datos = loadTable('assets/mortUN.csv', 'csv', 'header');
  
  //Carga la imagen del abecedario
  ABC = loadImage('assets/Abc.jpg'); 
  //Carga laimagen del craneo
  Craneo = loadImage('assets/Craneo.jpg');
}

function setup() 
{
  createCanvas(1200,620);
}

function draw() 
{
  background(247,239,226);
  
  //Imagen abecedario
  image(ABC,0,0,1200,50);
  
  //Cuadricula de apoyo
  /*noFill();
  var x = 20;
  for(var i = 0; i<7; i++)
  {
    rect(x,0,40,50);
    x = x + 40;
  }
  for(var i = 0; i<3; i++)
  {
    rect(x,0,50,50);
    x = x + 50;
  }
  for(var i = 0; i<2; i++)
  {
    rect(x,0,40,50);
    x = x + 40;
  }
  for(var i = 0; i<3; i++)
  {
    rect(x,0,50,50);
    x = x + 50;
  }
  for(var i = 0; i<3; i++)
  {
    rect(x,0,40,50);
    x = x + 40;
  }
  for(var i = 0; i<3; i++)
  {
    rect(x,0,50,50);
    x = x + 50;
  }
  for(var i = 0; i<2; i++)
  {
    rect(x,0,40,50);
    x = x + 40;
  }
  for(var i = 0; i<3; i++)
  {
    rect(x,0,50,50);
    x = x + 50;
  }*/
  
  //Rectangulo blanco lado derecho
  noStroke();
  fill(255);
  rect(410,60,780,530);
  //Figuras de color azul 
  fill(90,173,165,90);
  triangle(0,0,0,600,300,600);
  ellipse(200,400,100,100);
  //Rectangulo naranja
  fill(215,111,70,60);
  rect(20,60,370,590);
  
  //Imagen craneo
  image(Craneo,575,100,450,450);
  //Bloque negro inferior 
  noStroke();
  fill(0);
  rect(0,600,1200,20);
  
  // Actualiza a localización del marcador
  noStroke();
  fill(255,0,0);
  ellipse(mouseX,610,10,10);
  
  //Evita que el marcador salga del borde izquierdo
  if(mouseX <= 10)
  {
    mouseX = 10;
  }
  //Evita que el marcador salga del borde izquierdo
  if(mouseX >= 1190)
  {
    mouseX = 1190;
  }

  //If de fechas segun posición
  //1955-1960
  if (mouseX > 0 && mouseX < 30) 
  {
    miFecha = "1955-1960";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1955-1960',420,580);
  }
  //1960-1965
  if(mouseX > 30 && mouseX < 60)
  {
    miFecha = "1960-1965";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1960-1965',420,580);
  }
  //1965-1970
  if(mouseX > 60 && mouseX < 90)
  {
    miFecha = "1965-1970";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1965-1970',420,580);
  }
  //1970-1975
  if(mouseX > 90 && mouseX < 120)
  {
    miFecha = "1970-1975";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1970-1975',420,580);
  }
  //1975-1980
  if(mouseX > 120 && mouseX < 150)
  {
    miFecha = "1975-1980";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1975-1980',420,580);
  }
  //1980-1985
  if(mouseX > 150 && mouseX < 180)
  {
    miFecha = "1980-1985";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1980-1985',420,580);
  }
  //1985-1990
  if(mouseX > 180 && mouseX < 210)
  {
    miFecha = "1985-1990";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1985-1990',420,580);
  }
  //1990-1995
  if(mouseX > 210 && mouseX < 240)
  {
    miFecha = "1990-1995";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1990-1995',420,580);
  }
  //1995-2000
  if(mouseX > 240 && mouseX < 270)
  {
    miFecha = "1995-2000";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('1995-2000',420,580);
  }
  //2000-2005
  if(mouseX > 270 && mouseX < 300)
  {
    miFecha = "2000-2005";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2000-2005',420,580);
  }
   //2005-2010
  if(mouseX > 300 && mouseX < 330)
  {
    miFecha = "2005-2010";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2005-2010',420,580);
  }
   //2010-2015
  if(mouseX > 330 && mouseX < 360)
  {
    miFecha = "2010-2015";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2010-2015',420,580);
  }
  //2015-2020
  if(mouseX > 360 && mouseX < 390)
  {
    miFecha = "2015-2020";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2015-2020',420,580);
  }
  //2020-2025
  if(mouseX > 390 && mouseX < 420)
  {
    miFecha = "2020-2025";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2020-2025',420,580);
  }
  //2025-2030
  if(mouseX > 420 && mouseX < 450)
  {
    miFecha = "2025-2030";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2025-2030',420,580);
  }
  //2030-2035
  if(mouseX > 450 && mouseX < 480)
  {
    miFecha = "2030-2035";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2030-2035',420,580);
  }
  //2035-2040
  if(mouseX > 480 && mouseX < 510)
  {
    miFecha = "2035-2040";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2035-2040',420,580);
  }
  //2040-2045
  if(mouseX > 510 && mouseX < 540)
  {
    miFecha = "2040-2045";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2040-2045',420,580);
  }
  //2045-2050
  if(mouseX > 540 && mouseX < 570)
  {
    miFecha = "2045-2050";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2045-2050',420,580);
  }
  //2050-2055
  if(mouseX > 570 && mouseX < 600)
  {
    miFecha = "2050-2055";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2050-2055',420,580);
  }
  //2055-2060
  if(mouseX > 600 && mouseX < 630)
  {
    miFecha = "2055-2060";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2055-2060',420,580);
  }
  //2060-2065
  if(mouseX > 630 && mouseX < 660)
  {
    miFecha = "2060-2065";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2060-2065',420,580);
  }
  //2065-2070
  if(mouseX > 660 && mouseX < 690)
  {
    miFecha = "2065-2070";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2065-2070',420,580);
  }
  //2070-2075
  if(mouseX > 690 && mouseX < 720)
  {
    miFecha = "2070-2075";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2070-2075',420,580);
  }
  //2075-2080
  if(mouseX > 720 && mouseX < 750)
  {
    miFecha = "2075-2080";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2075-2080',420,580);
  }
  //2080-2085
  if(mouseX > 750 && mouseX < 780)
  {
    miFecha = "2080-2085";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2080-2085',420,580);
  }
  //2085-2090
  if(mouseX > 780 && mouseX < 810)
  {
    miFecha = "2085-2090";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2085-2090',420,580);
  }
  //2090-2095
  if(mouseX > 810 && mouseX < 840)
  {
    miFecha = "2090-2095";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2090-2095',420,580);
  }
  //2095-2100
  if(mouseX > 840 && mouseX < 870)
  {
    miFecha = "2095-2100";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2095-2100',420,580);
  }
  //2100-2105
  if(mouseX > 870 && mouseX < 900)
  {
    miFecha = "2100-2105";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2100-2105',420,580);
  }
  //2105-2110
  if(mouseX > 900 && mouseX < 930)
  {
    miFecha = "2105-2110";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2105-2100',420,580);
  }
  //2110-2115
  if(mouseX > 930 && mouseX < 960)
  {
    miFecha = "2110-2115";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2110-2115',420,580);
  }
   //2115-2120
  if(mouseX > 960 && mouseX < 990)
  {
    miFecha = "2115-2120";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2115-2120',420,580);
  }
  //2120-2125
  if(mouseX > 990 && mouseX < 1020)
  {
    miFecha = "2120-2125";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2120-2125',420,580);
  }
  //2125-2130
  if(mouseX > 1020 && mouseX < 1050)
  {
    miFecha = "2125-2130";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2125-2130',420,580);
  }
  //2130-2135
  if(mouseX > 1050 && mouseX < 1080)
  {
    miFecha = "2130-2135";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2130-2135',420,580);
  }
  //2135-2140
  if(mouseX > 1080 && mouseX < 1110)
  {
    miFecha = "2135-2140";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2135-2140',420,580);
  }
  //2140-2145
  if(mouseX > 1110 && mouseX < 1140)
  {
    miFecha = "2140-2145";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2140-2145',420,580);
  }
  //2145-2150
  if(mouseX > 1140 && mouseX < 1170)
  {
    miFecha = "2145-2150";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2145-2150',420,580);
  }
  //2150-2155
  if(mouseX > 1170 && mouseX < 1200)
  {
    miFecha = "2150-2155";
    noStroke();
    fill(0);
    textSize(25);
    textFont('Helvetica');
    text('2150-2155',420,580);
  }
  
  //Posición para nombre de los paises
  posX = 50;
  posY = 80;

  //Botones en las letras
  if(mouseIsPressed)
  {
    //Letra A
    if(mouseX > 20 && mouseX < 60 && mouseY > 0 && mouseY < 50)
    {
      Letras = 1;
    }
    //Letra B
    if(mouseX > 60 && mouseX < 100 && mouseY > 0 && mouseY < 50)
    {
      Letras = 2;
    }
    //Letra C
    if(mouseX > 100 && mouseX < 140 && mouseY > 0 && mouseY < 50)
    {
      Letras = 3;
    }
  }
  
  //Variables de base de datos
  var pais;
  var valor;
  var fehcas;
  //For que recorre la base datos
  for (var r = 0; r < datos.getRowCount()-1; r++) 
  {
    //Recoge la fecha de cada uno de en la base de datos
    fechas = datos.getString(r, "Year(s)");
    if (fechas == miFecha) 
    {
      //Recoge el nombre de cada uno de en la base de datos
      pais = datos.getString(r, "Country or Area");
      //Si el pais comienza por A muestra el nombre y crea rectangulos de manera aleatoria 
      if (pais[0] == 'A' && Letras == 1) 
      { 
        valor = parseInt(datos.getString(r, "Value"));
        noStroke();
        fill(0);
        textSize(17);
        textFont('Helvetica');
        text(pais, posX-20, posY);
        posY = posY + 50;
        fill(255,0,0);
        rect(random(400,1200),random(50,600),valor,valor);
        if (posY > 600) 
        {
          posY = 80;
          posX = posX+150;
        }
      //Si el pais comienza por B muestra el nombre y crea rectangulos de manera aleatoria 
        else if (pais[0] == 'B' && Letras ==2 ) 
      {
        valor = parseInt(datos.getString(r, "Value"));
        noStroke();
        fill(0);
        textSize(17);
        textFont('Helvetica');
        text(pais, posX-20, posY);
        posY = posY + 50;
        fill(255,0,0);
        rect(random(400,1200),random(50,600),valor,valor);
        if (posY > 600)
        {
          posY = 80;
          posX = posX+150;
        }
      }
      //Si el pais comienza por C muestra el nombre y crea rectangulos de manera aleatoria 
        else if (pais[0] == 'C' && Letras == 3) 
      {
        valor = parseInt(datos.getString(r, "Value"));
        noStroke();
        fill(0);
        textSize(17);
        textFont('Helvetica');
        text(pais, posX-20, posY);
        posY = posY + 50;
        fill(255,0,0);
        rect(random(400,1200),random(50,600),valor,valor);
        if (posY > 600)
        {
          posY = 80;
          posX = posX+150;
        }
      }
        
      }
    }
  }
}
