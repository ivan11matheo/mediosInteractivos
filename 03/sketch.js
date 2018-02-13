//Variables de apoyo 
var xCan = 800;
var yCan = 1600;

//Variables circulos fondo
var tCP = 50;
var tCG = 100;
var dir = 1;
var Dir = 1;

//Variables de posición de cola
var xC1 = 0;
var xC2 = -100;
var xC3 = -30;
var xC4 = -500;
var xC5 = -200;
var xC6 = -80;
var xC7 = -300;
var xC8 = -120;
var xC9 = -300;
var xC10 = -420;
var xC11 = -40;
var xC12 = -290;
var xC13 = -600;
var xC14 = -210;
var xC15 = -450;
var xC16 = -45;
var xC17 = -240;
var xC18 = -400;
var xC19 = -65;
var xC20 = -90;
var xC21 = -520;

//Variables de posicion de la aleta dorsal
//Variables x
var xA1 = -100;
var xA2 = -80; 
var xA3 = -60;
var xA4 = -210;
var xA5 = -300;
var xA6 = -80;
var xA7 = -20;
var xA8 = -300;
var xA9 = -380;
var xA10 = -330;
var xA11 = -220;
//Variables y
var yA1 = 0;
var yA2 = -20;
var yA3 = -140;
var yA4 = -40;
var yA5 = -70;
var yA6 = -200;
var yA7 = -300;
var yA8 = 150;
var yA9 = -120;
var yA10= -380;

//Variables aleta superior
//Variuables x
var xF1 = -300;
var xF2 = -50;
var xF3 = -400;
var xF4 = -150;
var xF5 = -440;
var xF6 = -600;
var xF7 = -140;
var xF8 = -80;
var xF9 = -460;
var xF10 = -110;
var xF11 = -280;
var xF12 = -100;
var xF13= - 190;
var xF14 = -230;
var xF15 = -60;
//Variables y
var yF1 = 0;
var yF2 = -200;
var yF3 = -50;
var yF4 = -250;
var yF5 = -360;
var yF6 = -70;
var yF7 = -130;
var yF8 = -150;
var yF9  = -30;
var yF10 = -190;
var yF11 = -180;
var yF12 = -200;
var yF13 = -290;
var yF14 = -340;

//Variables cabeza 
//variables x
var xA1 = -400;
var xA2 = -300;
var xA3 = -200;
var xA4 = -100;
var xA5 = 0;
var xA6 = -420;
var xA7 = -140;
var xA8 = -60;
var xA9 = -130;
var xA10 = -180;
//variables y
var yH1 = -60;
var yA2 = -110;
var yA3 = -50;
var yA4 = -450;
var yA5 = -210;
var yA6 = -100;
var yA7 = -300;
var yA8 = -80;
var yA9 = -130;
var yA10 = -180;


function setup() 
{ 
  createCanvas(xCan, yCan);
} 
function draw() 
{ 
  frameRate(5);
  background(92,202,214);
  noStroke();
  //Fondo
  //Azul claro
  fill(114,180,254);
  triangle(0,0,120,0,0,140);
  triangle(145,0,385,0,100,180);
  beginShape();
   vertex(0,236);
   vertex(0,550);
   vertex(100,670);
   vertex(100,180);
  endShape(CLOSE);
  beginShape();
   vertex(518,0);
   vertex(395,334);
   vertex(755,44);
   vertex(690,0);
  endShape(CLOSE);
  triangle(1100,0,1120,32,1135,0);
  triangle(0,660,100,840,0,800);
  beginShape();
   vertex(0,1140);
   vertex(100,840);
   vertex(138,1008);
   vertex(0,1208);
  endShape(CLOSE);
  triangle(0,1350,38,1400,0,1470);
  triangle(200,1600,0,1600,160,1550);

  //Azul oscuro
  fill(8,109,191);
  beginShape();
   vertex(120,0);
   vertex(145,0);
   vertex(100,180);
   vertex(0,236);
   vertex(0,140);
  endShape(CLOSE);
  triangle(100,180,100,670,395,334);
  triangle(755,0,755,44,790,0);
  triangle(0,1140,100,840,0,800);
  beginShape();
   vertex(0,1350);
   vertex(38,1400);
   vertex(138,1008);
   vertex(0,1208);
  endShape(CLOSE);
  
  //Azul
  fill(43,150,222);
  beginShape();
   vertex(100,180);
   vertex(385,0);
   vertex(518,0);
   vertex(395,334);
  endShape(CLOSE);
  triangle(690,0,755,44,755,0);
  beginShape();
   vertex(755,44);
   vertex(790,0);
   vertex(1100,0);
   vertex(1120,32);
  endShape(CLOSE);
  triangle(1135,0,1120,32,1200,0);
  beginShape();
   vertex(0,540);
   vertex(0,660);
   vertex(100,840);
   vertex(100,670);
  endShape(CLOSE);
  beginShape();
   vertex(38,1400);
   vertex(0,1470);
   vertex(0,1600);
   vertex(160,1550);
  endShape(CLOSE);
  
  //Circulos de fondo 
  ellipse(300,1200,tCG,tCG);
  ellipse(400,800,tCG,tCG);
  ellipse(500,1000,tCG,tCG);
  ellipse(600,400,tCG,tCG);
  ellipse(450,600,tCG,tCG);
  ellipse(200,1400,tCG,tCG);
  ellipse(500,1500,tCG,tCG);
  
  tCG = tCG+10*Dir;
  if(tCG>150||tCG<50)
  {
    Dir = Dir*-1;
  }
  
  fill(114,180,254);
  ellipse(300,1200,tCP,tCP);
  ellipse(400,800,tCP,tCP);
  ellipse(500,1000,tCP,tCP);
  ellipse(600,400,tCP,tCP);
  ellipse(450,600,tCP,tCP);
  ellipse(200,1400,tCP,tCP);
  ellipse(500,1500,tCP,tCP);
  
  tCP = tCP+10*dir;
  if(tCP>50||tCP<0)
  {
    dir = dir*-1;
  }
  
  //Cola
  fill(233);
  triangle(xC1,1500,xC1+35,1510,xC1+25,1570);
  xC1 = xC1 + 100;
  if(xC1 > 680)
  {
    xC1 = 680;
  }
  
  fill(250,226,250);
  triangle(xC2,1500,xC2-15,1540,xC2+25,1570);
  xC2 = xC2 + 90;
  if(xC2 > 680)
  {
    xC2 = 680;
  }
  
  fill(234,219,252);
  triangle(xC3,1500,xC3-15,1540,xC3-30,1500)
  xC3 = xC3 + 120;
  if(xC3 > 680)
    {
      xC3 = 680;
    }
  triangle(xC4,1500,xC4+35,1510,xC4+20,1480);
  xC4 = xC4 + 30;
  if(xC4 > 680)
  {
    xC4 = 680;
  }
  fill(232,217,255)
  triangle(xC5,1500,xC5+20,1480,xC5-30,1450);
  xC5 = xC5 + 40;
  if(xC5 > 680)
  {
    xC5 = 680;
  }
  fill(255,240,253);
  triangle(xC6,1500,xC6-30,1450,xC6-30,1500);
  xC6 = xC6 + 60;
  if(xC6 > 680)
  {
    xC6 = 680;
  }
  fill(249,255,245);
  triangle(xC7,1500,xC7,1450,xC7-30,1510);
  xC7 = xC7 + 30;
  if(xC7 > 650)
  {
    xC7 = 650;
  }
  fill(228,234,234);
  triangle(xC8,1500,xC8-30,1510,xC8-20,1530);
  xC8 = xC8 + 60;
  if(xC8 > 650)
  {
    xC8 = 650;
  }
  fill(253);
  triangle(xC9,1500,xC9-20,1530,xC9+15,1540);
  xC9 = xC9 + 80;
  if(xC9 > 650)
  {
    xC9 = 650;
  }
  fill(253,224,254);
  triangle(xC10,1450,xC10-30,1510,xC10-40,1445);
  xC10 = xC10 + 45;
  if(xC10 > 650)
  {
    xC10 = 650;
  }
  fill(250,253,242);
  triangle(xC11,1510,xC11-10,1445,xC11-30,1505);
  xC11 = xC11 + 50;
  if(xC11 > 620)
  {
    xC11 = 620;
  }
  fill(230,219,249);
  triangle(xC12,1510,xC12-30,1505,xC12-15,1530);
  xC12 = xC12 + 65;
  if(xC12 > 620)
  {
    xC12 = 620;
  }
  fill(229,220,251);
  triangle(xC13,1445,xC13-20,1505,xC13-30,1460);
  xC13 = xC13 + 35;
  if(xC13 > 610)
  {
    xC13 = 610;
  }
  fill(231,235,236)
  triangle(xC14,1460,xC14+10,1505,xC14-20,1505);
  xC14 = xC14 + 20;
  if(xC14 > 580)
  {
    xC14 = 580;
  }
  fill(255,225,249);
  triangle(xC15,1460,xC15-15,1470,xC15-20,1505);
  xC15 = xC15 + 50;
  if(xC15 > 580)
  {
    xC15 = 580;
  }
  fill(252,235,251);
  triangle(xC16,1505,xC16+5,1470,xC16-15,1500);
  xC16 = xC16 + 15;
  if(xC16 > 560)
  {
    xC16 = 560;
  }
  fill(237,231,231)
  triangle(xC17,1505,xC17-15,1500,xC17-25,1535);
  xC17 = xC17 + 30;
  if(xC17 > 560)
  {
    xC17 = 560;
  }
  fill(254,253,207);
  triangle(xC18,1505,xC18-25,1535,xC18+15,1530);
  xC18 = xC18 + 25;
  if(xC18 > 560)
  {
    xC18 = 560;
  }
  fill(252,255,226);
  triangle(xC19,1505,xC19+15,1530,xC19+30,1505);
  xC19 = xC19 + 60;
  if(xC19 > 560)
  {
    xC19 = 560;
  }
  fill(253,239,252);
  triangle(xC20,1505,xC20-15,1530,xC20+15,1530);
  xC20 = xC20 + 50;
  if(xC20 > 590)
  {
    xC20 = 590;
  }
  fill(240,230,239);
  triangle(xC21,1450,xC21-40,1445,xC21-20,1420);
  xC21 = xC21 + 65;
  if(xC21 > 650)
  {
    xC21 = 650;
  }
  
  //Aleta dorsal
  fill(65,60,83);
  triangle(xA1,1450,xA1-20,1420,xA1-5,1385);
  xA1 = xA1 + 20;
  if(xA1 > 650)
  {
    xA1 = 650;
  }
  fill(125,100,142);
  triangle(xA2,1420,xA2+15,1385,xA2-55,1390);
  xA2 = xA2 + 30;
  if(xA2 > 630)
  {
    xA2 = 630;
  }
  fill(129,83,244);
  triangle(xA3,1420,xA3-55,1390,xA3-20,1445);
  xA3 = xA3 + 40;
  if(xA3 > 630)
  {
    xA3 = 630;
  }
  fill(32,22,91);
  triangle(xA4+15,1385,xA4-55,1390,xA4-5,1350);
  xA4 = xA4 + 50;
  if(xA4 > 630)
  {
    xA4 = 630;
  }
  fill(50,35,90);
  triangle(xA5,1350,xA5-50,1390,xA5-55,1345);
  xA5 = xA5 + 60;
  if(xA5 > 625)
  {
    xA5 = 625;
  }
  fill(193,111,195);
  triangle(xA6,1390,xA6-5,1345,xA6-35,1370);
  xA6 = xA6 + 60;
  if(xA6 > 575)
  {
    xA6 = 575;
  }
  fill(55,40,105);
  triangle(xA7-5,1345,xA7+50,1350,xA7+35,1315);
  xA7 = xA7 + 90;
  if(xA7 > 575)
  {
    xA7 = 575;
  }
  fill(60,56,91);
  triangle(570,yA1,610,yA1-30,575,yA1-30);
  yA1 = yA1 + 110;
  if(yA1 > 1345)
  {
    yA1 = 1345;
  }
  fill(73,15,92);
  triangle(610,yA2,575,yA2,585,yA2-45);
  yA2 = yA2 + 80;
  if(yA2 > 1315)
  {
    yA2 = 1315;
  }
  fill(76,38,99);
  triangle(575,yA3,585,yA3-45,545,yA3-20);
  yA3 = yA3 + 60;
  if(yA3 > 1315)
  {
    yA3 = 1315;
  }
  fill(237,229,242);
  triangle(575,yA4,545,yA4-20,570,yA4+30);
  yA4 = yA4 + 70;
  if(yA4 > 1315)
  {
    yA4 = 1315;
  }
  fill(237,229,242);
  triangle(570,yA5,545,yA5-50,520,yA5);
  yA5 = yA5 + 90;
  if(yA5 > 1345)
  {
    yA5 = 1345;
  }
  fill(147,75,211);
  triangle(xA8,1345,xA8-50,1345,xA8-30,1370);
  xA8 =  xA8 + 30; 
  if(xA8 > 570)
  {
    xA8 = 570;
  }
  fill(120,82,230);
  triangle(xA9,1345,xA9+20,1370,xA9-25,1365);
  xA9 = xA9 + 60;
  if(xA9 > 520)
  {
    xA9 = 520;
  }
  fill(255);
  triangle(495,yA6,520,yA6-20,475,yA6-20);
  yA6 = yA6 + 50;
  if(yA6 > 1365)
  {
    yA6 = 1365;
  }
  fill(251,255,230);
  triangle(475,yA7,495,yA7+20,450,yA7+40);
  yA7 = yA7 + 120;
  if(yA7 > 1345)
  {
    yA7 = 1345;
  }
  fill(233,218,255);
  triangle(520,yA8,475,yA8,500,yA8-45);
  yA8 = yA8 + 80;
  if(yA8 > 1345)
  {
    yA8 = 1345;
  }
  fill(180,226,224);
  triangle(520,yA9,500,yA9-45,545,yA9-50);
  yA9 = yA9 + 80;
  if(yA9 > 1345)
  {
    yA9 = 1345;
  }
  fill(61,59,81);
  triangle(xA10,1300,xA10+45,1295,xA10+20,1260);
  xA10 = xA10 + 50;
  if(xA10 > 500)
  {
    xA10 = 500;
  }
  fill(76,15,92);
  triangle(545,yA10-5,520,yA10-40,585,yA10-30);
  yA10 = yA10 + 50;
  if(yA10 > 1300)
  {
    yA10 = 1300;
  }
  fill(126,82,231);
  triangle(xA11,1260,xA11+65,1270,xA11+20,1230);
  xA11 = xA11 + 70;
  if(xA11 > 520)
  {
    xA11= 520;
  }
  fill(141,87,181);
  triangle(520,yF1,540,yF1-30,495,yF1-55);
  yF1 = yF1 + 50;
  if(yF1 > 1260)
  {
    yF1 = 1260;
  }
  fill(142,73,136);
  triangle(520,yF2,495,yF2-55,450,yF2+5);
  yF2 = yF2 + 90;
  if(yF2 > 1260)
  {
    yF2 =  1260;
  }
  fill(60,39,106);
  triangle(xF1,1265,xF1+70,1260,xF1+50,1300);
  xF1 = xF1 + 120;
  if(xF1 > 450)
  {
    xF1 = 450;
  }
  fill(33,22,91);
  triangle(xF2,1265,xF2+50,1300,xF2-10,1305);
  xF2 = xF2 + 40;
  if(xF2 > 450)
  {
    xF2 = 450;
  }
  fill(62,57,89);
  triangle(500,yF3,440,yF3+5,450,yF3+85);
  yF3 = yF3 + 60;
  if(yF3 > 1300)
  {
    yF3 = 1300;
  }
  fill(133,110,178);
  triangle(xF3,1305,xF3+10,1385,xF3-15,1395);
  xF3 = xF3 + 30;
  if(xF3 > 440)
  {
    xF3 = 440;
  }
  fill(33,22,90);
  triangle(xF4,1305,xF4-15,1395,xF4-55,1315);
  xF4 = xF4 + 50;
  if(xF4 > 440)
  {
    xF4 = 440;
  }
  fill(98,16,92);
  triangle(440,yF4,385,yF4+10,370,yF4-35);
  yF4 = yF4 + 100;
  if(yF4 > 1305)
  {
    yF4 = 1305;
  }
  fill(51,37,90);
  triangle(xF5,1305,xF5-70,1270,xF5+10,1265);
  xF5 = xF5 + 40;
  if(xF5 > 440)
  {
    xF5 = 440;
  }
  fill(131,81,238);
  triangle(370,yF5,450,yF5-5,410,yF5-30);
  yF5 = yF5 + 80;
  if(yF5 > 1270)
  {
    yF5 = 1270;
  }
  fill(254,252,239);
  triangle(450,yF6-5,410,yF6-30,435,yF6-60);
  yF6 = yF6 + 60;
  if(yF6 > 1270)
  {
    yF6 = 1270;
  }
  fill(190,113,191);
  triangle(xF6,1265,xF6-15,1210,xF6+45,1205);
  xF6 = xF6 + 40;
  if(xF6 > 450)
  {
    xF6 = 450;
  }
  fill(147,74,205);
  triangle(xF7,1210,xF7+60,1205,xF7+15,1195);
  xF7 = xF7 + 30;
  if(xF7 > 435)
  {
    xF7 = 435;
  }
  fill(86,128,249);
  triangle(370,yF7-10,410,yF7-40,390,yF7-75);
  yF7 = yF7 + 100;
  if(yF7 > 1280)
  {
    yF7 = 1280;
  }
  fill(233,231,234);
  triangle(410,yF8,390,yF8-35,450,yF8-45);
  yF8 = yF8 + 70;
  if(yF8 > 1240)
  {
    yF8 = 1240;
  }
  fill(235,217,255);
  triangle(xF8,1195,xF8-60,1205,xF8-25,1185);
  xF8 = xF8 + 80;
  if(xF8 > 450)
  {
    xF8 = 450;
  }
  fill(35,19,82);
  triangle(xF9,1205,xF9+35,1185,xF9-10,1190);
  xF9 = xF9 + 60;
  if(xF9 > 390)
  {
    xF9 = 390;
  }
  fill(74,39,97);
  triangle(425,yF9,380,yF9+5,415,yF9-45);
  yF9 = yF9 + 100;
  if(yF9 > 1185)
  {
    yF9 = 1185;
  }
  fill(96,33,88);
  triangle(380,yF10,415,yF10-50,380,yF10-60);
  yF10 = yF10 + 60;
  if(yF10 > 1190)
  {
    yF10 = 1190;
  }
  fill(104,59,98);
  triangle(xF10,1130,xF10+35,1140,xF10+55,1100);
  xF10 = xF10 + 70;
  if(xF10 > 380)
  {
    xF10 = 380;
  }
  fill(74,15,95);
  triangle(xF11,1130,xF11,1190,xF11-45,1195);
  xF11 = xF11 + 110;
  if(xF11 >380)
  {
    xF11 = 380;
  }
  fill(50,37,91);
  triangle(380,yF11,335,yF11+5,370,yF11+80);
  yF11 = yF11 + 40;
  if(yF11>1190)
  {
    yF11 = 1190;
  }
  fill(62,54,93);
  triangle(380,yF12,370,yF12+80,390,yF12+15);
  yF12 = yF12 + 70;
  if(yF12 > 1190)
  {
    yF12 = 1190;
  }
  fill(97,34,89);
  triangle(370,yF13,385,yF13+45,340,yF13+65);
  yF13 = yF13 + 80;
  if(yF13 > 1270)
  {
    yF13 = 1270;
  }
  fill(62,40,115);
  triangle(xF12,1335,xF12+45,1415,xF12+45,1315);
  xF12 = xF12 + 40;
  if(xF12 > 340)
  {
    xF12 = 340;
  }
  fill(140,73,142);
  triangle(xF13,1415,xF13,1315,xF13+40,1395);
  xF13 = xF13 + 100;
  if(xF13 > 385)
  {
    xF13 = 385;
  }
  fill(100,57,100);
  triangle(xF14,1270,xF14-50,1290,xF14-30,1335);
  xF14 = xF14 + 80;
  if(xF14 > 370)
  {
    xF14 = 370;
  }
  fill(144,103,143);
  triangle(370,yF13,320,yF13+20,320,yF13-30);
  yF13 = yF13 + 30;
  if(yF13 > 1270)
  {
    yF13 = 1270;
  }
  fill(193,114,197);
  triangle(xF15,1270,xF15-50,1240,xF15-35,1195);
  xF15 = xF15 + 35;
  if(xF15 > 370)
  {
    xF15 = 370;
  }
  fill(140,103,137);
  triangle(335,yF14,320,yF14+45,275,yF14+35);
  yF14 = yF14 + 70;
  if(yF14 > 1195)
  {
    yF14 = 1195;
  }
  fill(76,17,101);
  triangle(275,yH1,320,yH1+10,270,yH1+45);
  yH1 = yH1 + 40;
  if(yH1 > 1230)
  {
    yH1 = 1230;
  }
  
}