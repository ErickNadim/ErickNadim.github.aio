//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=24; scoreInc=3; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="Lo Lograste"; messageTime="Tiempo Terminado"; messageError="Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0"];
var posX=[351,183,445,356,490,293,104,118]; var posY=[57,95,277,162,224,258,291,169];
var coorx=["MzQ2", "MTc4", "NDQw", "MzUx", "NDg1", "Mjg4", "MTU4", "MTEz"]; var coory=["NTc=", "OTU=", "Mjc3", "MTYy", "MjI0", "MjU4", "MjU4", "MTY5"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["Region Antartida", "Valle Unova", "Ciudad Hoenn", "Valle Dragon", "CIudad Teselia", "Ciudad Hoenn", "Region Jhoto", "Valle del agua"]; var al2=["Valle Sinnoh", "Ciudad Jhoto", "Region Sinnoh", "Ciudad Sinnoh", "Valle Paldea", "Ciudad Kanto", "Ciudad Kanto", "Ciudad Elect"]; var al3=["Ciudad Hoenn", "Region Kanto", "Valle Kanto", "Valle Argus", "Region Kanto", "Ciudad Paleta", "Valle Squirtle", "Pueblo Teselia"]; var al4=["", "", "", "", "", "", "", ""]; answers=["Valle Snowpoint", "Valle Pastoria", "Valle Oreburgh", "Valle Charicífico", "Ciudad Eterna", "Ciudad SuniShore", "Pueblo Paleta", "Valle Canalave"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDIuX1BhbmVsX0dyX19maWNv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
