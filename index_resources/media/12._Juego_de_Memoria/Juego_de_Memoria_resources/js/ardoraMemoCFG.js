//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100;timeIni=100; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=10;
var score=0;scoreMax=2;scoreInc=2; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#C8E018"; colorText="#000000"; colorSele="#478DF8";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="Lo Lograste!"; messageTime="Tiempo Cumplido"; messageError=""; messageErrorG=""; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="SnVlZ29fZGVfTWVtb3JpYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["BLASTOISE","ELECTIVIRE","SNORLAX","GENGAR","PIKACHU","CHARIZARD","TORTERRA","LAPRAS"];im1=["blastoise.png","Electivire.png","descarga__1_.jpg","descarga.jpg","pikachu.png","images__61_.jpeg","torterra.png","Lapras.png"];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["BLASTOISE","ELECTIVIRE","SNORLAX","GENGAR","PIKACHU","CHARIZARD","TORTERRA","LAPRAS"];im2=["blastoise.png","Electivire.png","descarga__1_.jpg","descarga.jpg","pikachu.png","images__61_.jpeg","torterra.png","Lapras.png"];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjA=","MjE=","MjI=","MjM=","MjQ=","MjU=","MjY=","Mjc="];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="Juego_de_Memoria_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
