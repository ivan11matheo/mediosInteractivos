//LOS CODIGOS CON DOBLE FOR ESTAN POR DEBAJO DE LA LINEA 3397 (debido a que no entendia bien su función previo a esta linea)
//Variables de posicion y tamaño para la cuadricula 
var x = 0; 
var y = 0; 
var tamC = 10;
//Franjas del mismo color del fondo 
var xFranja = 0;
var yFranja = 0;

function setup() 
{ 
  createCanvas(480, 740);
  background(220);
  
  //Doble for para crear la cuadricula
  for(var a = 0; a < 73; a = a + 1)
  {
    noStroke(); //Luego de generar toda la pieza elimine los bordes de guia de la cuadricula.
    fill(204,204,153);
     for(var b = 0; b < 48; b = b + 1)
      {
       rect(x, y,tamC,tamC)
       x = x + 10;
      }
    x = 0;
    y = y + 10;
  }
  //Primera linea 
  x = 0;
  y = 0;
  for(var f1 = 0; f1 < 48; f1 = f1 + 1)
  {
    noStroke();
    fill(204,204,153);
    rect(x,y,tamC,tamC);
    x = x + 10;
  }
  //Ultima fila
  x = 0;
  y = 730;
  for(var f77 = 0; f77 < 54; f77 = f77 + 1)
  {
    noStroke();
    fill(0);
    rect(x,y,tamC,tamC);
    x = x + 10;
  }
  //Recuadros negros (Cuadro 1N)
  x = 0;
  y = 10; 
   for(var nx1 = 0; nx1 < 4; nx1 = nx1 + 1)
   {
     for(var ny1 = 0;  ny1 < 12; ny1 = ny1 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 10;
     x = x + 10;
  }
  //Recuadros negros (Cuadro 2N)
  x = 40
  y = 250 
   for(var nx2 = 0; nx2 < 4; nx2 = nx2 + 1)
   {
     for(var ny2 = 0;  ny2 < 12; ny2 = ny2 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 250
     x = x + 10;
  }
  //Recuadros negros (Cuadro 3N)
  x = 80;
  y = 490; 
   for(var nx3 = 0; nx3 < 4; nx3 = nx3 + 1)
   {
     for(var ny3 = 0;  ny3 < 12; ny3 = ny3 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 490;
     x = x + 10;
  }
  //Recuadros negros (Cuadro 4N)
  x = 120;
  y = 10; 
   for(var nx4 = 0; nx4 < 4; nx4 = nx4 + 1)
   {
     for(var ny4 = 0;  ny4 < 12; ny4 = ny4 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 10;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 5N)
  x = 200;
  y = 10; 
   for(var nx5 = 0; nx5 < 4; nx5 = nx5 + 1)
   {
     for(var ny5 = 0;  ny5 < 12; ny5 = ny5 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 10;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 6N)
  x = 360;
  y = 10; 
   for(var nx6 = 0; nx6 < 4; nx6 = nx6 + 1)
   {
     for(var ny6 = 0;  ny6 < 12; ny6 = ny6 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 10;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 7N)
  x = 240;
  y = 250; 
   for(var nx7 = 0; nx7 < 4; nx7 = nx7 + 1)
   {
     for(var ny7 = 0;  ny7 < 12; ny7 = ny7 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 250;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 8N)
  x = 320;
  y = 250; 
   for(var nx8 = 0; nx8 < 4; nx8 = nx8 + 1)
   {
     for(var ny8 = 0;  ny8 < 12; ny8 = ny8 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 250;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 9N)
  x = 440;
  y = 250; 
   for(var nx9 = 0; nx9 < 4; nx9 = nx9 + 1)
   {
     for(var ny9 = 0;  ny9 < 12; ny9 = ny9 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 250;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 10N)
  x = 160;
  y = 490; 
   for(var nx10 = 0; nx10 < 4; nx10 = nx10 + 1)
   {
     for(var ny10 = 0;  ny10 < 12; ny10 = ny10 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 490;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 11N)
  x = 280;
  y = 490; 
   for(var nx11 = 0; nx11 < 4; nx11 = nx11 + 1)
   {
     for(var ny11 = 0;  ny11 < 12; ny11 = ny11 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 490;
     x = x + 10;
   }
  //Recuadros negros (Cuadro 12N)
  x = 400;
  y = 490; 
   for(var nx12 = 0; nx12 < 4; nx12 = nx12 + 1)
   {
     for(var ny12 = 0;  ny12 < 12; ny12 = ny12 + 1)
     {
       noStroke();
       fill(0);
       rect(x,y,tamC,tamC)
       y = y  + 10;
     }
     y = 490;
     x = x + 10;
   }
  
  //Recuadros rojos (Seccion 1RA)
  x = 40;
  y = 10; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RA)
  x = 40;
  y = 30; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RA)
  x = 40;
  y = 50; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RA)
  x = 40;
  y = 70; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RA)
  x = 40;
  y = 90; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RA)
  x = 40;
  y = 110; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CA)
  x = 80;
  y = 10; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CA)
  x = 80;
  y = 30; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CA)
  x = 80;
  y = 50; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CA)
  x = 80;
  y = 70; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CA)
  x = 80;
  y = 90; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CA)
  x = 80;
  y = 110; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GA)
  x = 80;
  y = 20; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GA)
  x = 80;
  y = 40; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GA)
  x = 80;
  y = 60; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GA)
  x = 80;
  y = 80; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GA)
  x = 80;
  y = 100; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GA)
  x = 80;
  y = 120; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CB)
  x = 160;
  y = 10; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CB)
  x = 160;
  y = 30; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CB)
  x = 160;
  y = 50; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CB)
  x = 160;
  y = 70; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CB)
  x = 160;
  y = 90; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CB)
  x = 160;
  y = 110; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GB)
  x = 160;
  y = 20; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GB)
  x = 160;
  y = 40; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GB)
  x = 160;
  y = 60; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GB)
  x = 160;
  y = 80; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GB)
  x = 160;
  y = 100; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GB)
  x = 160;
  y = 120; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RB)
  x = 240;
  y = 10; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RB)
  x = 240;
  y = 30; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RB)
  x = 240;
  y = 50; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RB)
  x = 240;
  y = 70; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RB)
  x = 240;
  y = 90; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RB)
  x = 240;
  y = 110; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CC)
  x = 280;
  y = 10; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CC)
  x = 280;
  y = 30; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CC)
  x = 280;
  y = 50; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CC)
  x = 280;
  y = 70; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CC)
  x = 280;
  y = 90; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CC)
  x = 280;
  y = 110; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GC)
  x = 280;
  y = 20; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GC)
  x = 280;
  y = 40; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GC)
  x = 280;
  y = 60; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GC)
  x = 280;
  y = 80; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GC)
  x = 280;
  y = 100; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GC)
  x = 280;
  y = 120; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RC)
  x = 320;
  y = 10; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RC)
  x = 320;
  y = 30; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RC)
  x = 320;
  y = 50; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RC)
  x = 320;
  y = 70; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RC)
  x = 320;
  y = 90; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RC)
  x = 320;
  y = 110; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CD)
  x = 400;
  y = 10; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CD)
  x = 400;
  y = 30; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CD)
  x = 400;
  y = 50; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CD)
  x = 400;
  y = 70; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CD)
  x = 400;
  y = 90; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CD)
  x = 400;
  y = 110; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GD)
  x = 400;
  y = 20; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GD)
  x = 400;
  y = 40; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GD)
  x = 400;
  y = 60; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GD)
  x = 400;
  y = 80; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GD)
  x = 400;
  y = 100; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GD)
  x = 400;
  y = 120; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RD)
  x = 440;
  y = 10; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RD)
  x = 440;
  y = 30; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RD)
  x = 440;
  y = 50; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RD)
  x = 440;
  y = 70; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RD)
  x = 440;
  y = 90; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RD)
  x = 440;
  y = 110; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RE)
  x = 0;
  y = 140; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RE)
  x = 0;
  y = 160; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RE)
  x = 0;
  y = 180; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RE)
  x = 0;
  y = 200; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RE)
  x = 0;
  y = 220; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RE)
  x = 0;
  y = 240; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }

  //Recuadros cafes (Seccion 1CE)
  x = 40;
  y = 140; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CE)
  x = 40;
  y = 160; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CE)
  x = 40;
  y = 180; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CE)
  x = 40;
  y = 200; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CE)
  x = 40;
  y = 220; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CE)
  x = 40;
  y = 240; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GE)
  x = 40;
  y = 130; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GE)
  x = 40;
  y = 150; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GE)
  x = 40;
  y = 170; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GE)
  x = 40;
  y = 190; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GE)
  x = 40;
  y = 210; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GE)
  x = 40;
  y = 230; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RF)
  x = 120;
  y = 140; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RF)
  x = 120;
  y = 160; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RF)
  x = 120;
  y = 180; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RF)
  x = 120;
  y = 200; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RF)
  x = 120;
  y = 220; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RF)
  x = 120;
  y = 240; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RG)
  x = 200;
  y = 140; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RG)
  x = 200;
  y = 160; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RG)
  x = 200;
  y = 180; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RG)
  x = 200;
  y = 200; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RG)
  x = 200;
  y = 220; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RG)
  x = 200;
  y = 240; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CF)
  x = 240;
  y = 140; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CF)
  x = 240;
  y = 160; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CF)
  x = 240;
  y = 180; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CF)
  x = 240;
  y = 200; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CF)
  x = 240;
  y = 220; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CF)
  x = 240;
  y = 240; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GF)
  x = 240;
  y = 130; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GF)
  x = 240;
  y = 150; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GF)
  x = 240;
  y = 170; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GF)
  x = 240;
  y = 190; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GF)
  x = 240;
  y = 210; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GF)
  x = 240;
  y = 230; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CG)
  x = 320;
  y = 140; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CG)
  x = 320;
  y = 160; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CG)
  x = 320;
  y = 180; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CG)
  x = 320;
  y = 200; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CG)
  x = 320;
  y = 220; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CG)
  x = 320;
  y = 240; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GG)
  x = 320;
  y = 130; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GG)
  x = 320;
  y = 150; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GG)
  x = 320;
  y = 170; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GG)
  x = 320;
  y = 190; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GG)
  x = 320;
  y = 210; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GG)
  x = 320;
  y = 230; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RH)
  x = 360;
  y = 140; 
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RH)
  x = 360;
  y = 160; 
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RH)
  x = 360;
  y = 180; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RH)
  x = 360;
  y = 200; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RH)
  x = 360;
  y = 220; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RH)
  x = 360;
  y = 240; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 1CH)
  x = 440;
  y = 140; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CH)
  x = 440;
  y = 160; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CH)
  x = 440;
  y = 180; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CH)
  x = 440;
  y = 200; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CH)
  x = 440;
  y = 220; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CH)
  x = 440;
  y = 240; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GH)
  x = 440;
  y = 130; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GH)
  x = 440;
  y = 150; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GH)
  x = 440;
  y = 170; 
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GH)
  x = 440;
  y = 190; 
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GH)
  x = 440;
  y = 210; 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GH)
  x = 440;
  y = 230; 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CI)
  x = 0;
  y = 250; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CI)
  x = 0;
  y = 270; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CI)
  x = 0;
  y = 290; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CI)
  x = 0;
  y = 310; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CI)
  x = 0;
  y = 330; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CI)
  x = 0;
  y = 350; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GI)
  x = 0;
  y = 260; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GI)
  x = 0;
  y = 280; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GI)
  x = 0;
  y = 300;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GI)
  x = 0;
  y = 320;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GI)
  x = 0;
  y = 340 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GI)
  x = 0;
  y = 360 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RI)
  x = 80;
  y = 250;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RI)
  x = 80;
  y = 270;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RI)
  x = 80;
  y = 290; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RI)
  x = 80;
  y = 310; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RI)
  x = 80;
  y = 330; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RI)
  x = 80;
  y = 350; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CJ)
  x = 120;
  y = 250; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CJ)
  x = 120;
  y = 270; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CJ)
  x = 120;
  y = 290; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CJ)
  x = 120;
  y = 310; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CJ)
  x = 120;
  y = 330; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CJ)
  x = 120;
  y = 350; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GJ)
  x = 120;
  y = 260; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GJ)
  x = 120;
  y = 280; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GJ)
  x = 120;
  y = 300;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GJ)
  x = 120;
  y = 320;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GJ)
  x = 120;
  y = 340 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GJ)
  x = 120;
  y = 360 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RJ)
  x = 160;
  y = 250;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RJ)
  x = 160;
  y = 270;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RJ)
  x = 160;
  y = 290; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RJ)
  x = 160;
  y = 310; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RJ)
  x = 160;
  y = 330; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RJ)
  x = 160;
  y = 350; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CK)
  x = 200;
  y = 250; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CK)
  x = 200;
  y = 270; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CK)
  x = 200;
  y = 290; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CK)
  x = 200;
  y = 310; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CK)
  x = 200;
  y = 330; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CK)
  x = 200;
  y = 350; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GK)
  x = 200;
  y = 260; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GK)
  x = 200;
  y = 280; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GK)
  x = 200;
  y = 300;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GK)
  x = 200;
  y = 320;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GK)
  x = 200;
  y = 340 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GK)
  x = 200;
  y = 360 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RK)
  x = 280;
  y = 250;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RK)
  x = 280;
  y = 270;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RK)
  x = 280;
  y = 290; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RK)
  x = 280;
  y = 310; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RK)
  x = 280;
  y = 330; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RK)
  x = 280;
  y = 350; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CL)
  x = 360;
  y = 250; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CL)
  x = 360;
  y = 270; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CL)
  x = 360;
  y = 290; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CL)
  x = 360;
  y = 310; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CL)
  x = 360;
  y = 330; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CL)
  x = 360;
  y = 350; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GL)
  x = 360;
  y = 260; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GL)
  x = 360;
  y = 280; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GL)
  x = 360;
  y = 300;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GL)
  x = 360;
  y = 320;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GL)
  x = 360;
  y = 340 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GL)
  x = 360;
  y = 360 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RL)
  x = 400;
  y = 250;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RL)
  x = 400;
  y = 270;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RL)
  x = 400;
  y = 290; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RL)
  x = 400;
  y = 310; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RL)
  x = 400;
  y = 330; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RL)
  x = 400;
  y = 350; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CM)
  x = 40;
  y = 370; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CM)
  x = 40;
  y = 390; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CM)
  x = 40;
  y = 410; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CM)
  x = 40;
  y = 430; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CM)
  x = 40;
  y = 450; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CM)
  x = 40;
  y = 470; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GM)
  x = 40;
  y = 380; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GM)
  x = 40;
  y = 400; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GM)
  x = 40;
  y = 420;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GM)
  x = 40;
  y = 440;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GM)
  x = 40;
  y = 460 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GM)
  x = 40;
  y = 480 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RM)
  x = 80;
  y = 370;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RM)
  x = 80;
  y = 390;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RM)
  x = 80;
  y = 410; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RM)
  x = 80;
  y = 430; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RM)
  x = 80;
  y = 450; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RM)
  x = 80;
  y = 470; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RN)
  x = 160;
  y = 370;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RN)
  x = 160;
  y = 390;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RN)
  x = 160;
  y = 410; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RN)
  x = 160;
  y = 430; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RN)
  x = 160;
  y = 450; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RN)
  x = 160;
  y = 470; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CN)
  x = 240;
  y = 370; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CN)
  x = 240;
  y = 390; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CN)
  x = 240;
  y = 410; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CN)
  x = 240;
  y = 430; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CN)
  x = 240;
  y = 450; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CN)
  x = 240;
  y = 470; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GN)
  x = 240;
  y = 380; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GN)
  x = 240;
  y = 400; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GN)
  x = 240;
  y = 420;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GN)
  x = 240;
  y = 440;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GN)
  x = 240;
  y = 460 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GN)
  x = 240;
  y = 480 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RO)
  x = 280;
  y = 370;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RO)
  x = 280;
  y = 390;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RO)
  x = 280;
  y = 410; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RO)
  x = 280;
  y = 430; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RO)
  x = 280;
  y = 450; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RO)
  x = 280;
  y = 470; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CO)
  x = 320;
  y = 370; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CO)
  x = 320;
  y = 390; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CO)
  x = 320;
  y = 410; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CO)
  x = 320;
  y = 430; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5C0)
  x = 320;
  y = 450; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CO)
  x = 320;
  y = 470; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GO)
  x = 320;
  y = 380; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GO)
  x = 320;
  y = 400; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GO)
  x = 320;
  y = 420;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GO)
  x = 320;
  y = 440;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GO)
  x = 320;
  y = 460 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GO)
  x = 320;
  y = 480 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros rojos (Seccion 1RP)
  x = 400;
  y = 370;
  yFranja = 30; 
   for(var rx1 = 0; rx1 < 4; rx1 = rx1 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 2RP)
  x = 400;
  y = 390;
  yFranja = 30; 
   for(var rx2 = 0; rx2 < 4; rx2 = rx2 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 3RP)
  x = 400;
  y = 410; 
  yFranja = 30; 
   for(var rx3 = 0; rx3 < 4; rx3 = rx3 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 4RP)
  x = 400;
  y = 430; 
  yFranja = 30; 
   for(var rx4 = 0; rx4 < 4; rx4 = rx4 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 5RP)
  x = 400;
  y = 450; 
  yFranja = 30; 
   for(var rx5 = 0; rx5 < 4; rx5 = rx5 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros rojos (Seccion 6RP)
  x = 400;
  y = 470; 
  yFranja = 30; 
   for(var rx6 = 0; rx6 < 4; rx6 = rx6 + 1)
   {
       noStroke();
       fill(240,51,51);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros cafes (Seccion 1CP)
  x = 440;
  y = 370; 
  yFranja = 30; 
   for(var cx1 = 0; cx1 < 4; cx1 = cx1 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 2CP)
  x = 440;
  y = 390; 
  yFranja = 30; 
   for(var cx2 = 0; cx2 < 4; cx2 = cx2 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 3CP)
  x = 440;
  y = 410; 
  yFranja = 30; 
   for(var cx3 = 0; cx3 < 4; cx3 = cx3 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 4CP)
  x = 440;
  y = 430; 
  yFranja = 30; 
   for(var cx4 = 0; cx4 < 4; cx4 = cx4 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 5CP)
  x = 440;
  y = 450; 
  yFranja = 30; 
   for(var cx5 = 0; cx5 < 4; cx5 = cx5 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros cafes (Seccion 6CP)
  x = 440;
  y = 470; 
  yFranja = 30; 
   for(var cx6 = 0; cx6 < 4; cx6 = cx6 + 1)
   {
       noStroke();
       fill(83,55,44);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Recuadros grises (Seccion 1GP)
  x = 440;
  y = 380; 
  yFranja = 30; 
   for(var gx1 = 0; gx1 < 4; gx1 = gx1 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 2GP)
  x = 440;
  y = 400; 
  yFranja = 30; 
   for(var gx2 = 0; gx2 < 4; gx2 = gx2 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 3GP)
  x = 440;
  y = 420;
  yFranja = 30; 
   for(var gx3 = 0; gx3 < 4; gx3 = gx3 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 4GP)
  x = 440;
  y = 440;
  yFranja = 30; 
   for(var gx4 = 0; gx4 < 4; gx4 = gx4 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 5GP)
  x = 440;
  y = 460 
  yFranja = 30; 
   for(var gx5 = 0; gx5 < 4; gx5 = gx5 + 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  //Recuadros grises (Seccion 6GP)
  x = 440;
  y = 480 
  yFranja = 30; 
   for(var gx6 = 0; gx6 < 4; gx6 = gx6+ 1)
   {
       noStroke();
       fill(189,176,142);
       rect(x,y,tamC,tamC)
       x = x  + 10;
   }
  
  //Doble for para cafe 
  x = 0;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 0;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 0;
  y = 490;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 0;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 40;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 40;
    y = y + 20;
  }
  
  //Doble for para cafe 
  x = 120;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 120;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 120;
  y = 490;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 120;
    y = y + 20;
  }
  
  //Doble for para cafe 
  x = 200;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 200;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 200;
  y = 490;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 200;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 240;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 240;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 320;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 320;
    y = y + 20;
  }
  
  //Doble for para cafe 
  x = 360;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 360;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 360;
  y = 490;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 360;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 440;
  y = 500;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 440;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 0;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 0;
    y = y + 20;
  }
  
  //Doble for para cafe 
  x = 80;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 80;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 80;
  y = 620;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 80;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 120;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 120;
    y = y + 20;
  }
  
  //Doble for para cafe 
  x = 160;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 160;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 160;
  y = 620;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 160;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 200;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 200;
    y = y + 20;
  }
  
  //Doble for para cafe 
  x = 280;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 280;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 280;
  y = 620;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 280;
    y = y + 20;
  }
  
  //Doble for para rojo
  x = 360;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(240,51,51);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 360;
    y = y + 20;
  }
  
  //Doble for para cafe 
  x = 400;
  y = 610;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(83,55,44);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 400;
    y = y + 20;
  }
  
  //Doble for para gris
  x = 400;
  y = 620;
  for(var numC = 0; numC < 6; numC = numC + 1)
  {
    for(var numF = 0; numF < 4; numF = numF + 1)
    {
      noStroke();
      fill(189,176,142);
      rect(x,y,tamC,tamC)
      x = x + 10;
    }
    x = 400;
    y = y + 20;
  }
  
  //Lineas blancas de los recuadros negros
  stroke(255);
  
  line(20,10,20,130);
  line(0,70,40,70);
  
  line(140,10,140,130);
  line(120,70,160,70);
  
  line(220,10,220,130);
  line(200,70,240,70);
  
  line(380,10,380,130);
  line(360,70,400,70);
  
  line(100,490,100,610);
  line(80,550,120,550);
  
  line(180,490,180,610);
  line(160,550,200,550);
  
  line(300,490,300,610);
  line(280,550,320,550);
  
  line(420,490,420,610);
  line(400,550,440,550);
  
  //Lineas negras de los recuadros del fondo
  stroke(0);
  
  line(100,130,100,250);
  line(80,190,120,190);
  
  line(180,130,180,250);
  line(160,190,200,190);
  
  line(300,130,300,250);
  line(280,190,320,190);
  
  line(420,130,420,250);
  line(400,190,440,190);
  
  line(60,610,60,730);
  line(40,670,80,670);
  
  line(260,610,260,730);
  line(240,670,280,670);
  
  line(340,610,340,730);
  line(320,670,360,670);
  
  line(460,610,460,730);
  line(440,670,480,670);
  
  //Lineas rojas de los recuadros negros y del fondo
  stroke(240,51,51);
  
  line(60,250,60,370);
  line(40,310,80,310);

  line(260,250,260,370);
  line(240,310,280,310);
  
  line(340,250,340,370);
  line(320,310,360,310);
  
  line(460,250,460,370);
  line(440,310,480,310);
  
  line(20,370,20,490);
  line(0,430,40,430);
  
  line(140,370,140,490);
  line(120,430,160,430);
  
  line(220,370,220,490);
  line(200,430,240,430);
  
  line(380,370,380,490);
  line(360,430,400,430);
}