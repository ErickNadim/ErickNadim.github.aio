//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=3;
var score=0; scoreMax=6; scoreInc=2; scoreDec=0
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
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="FELICITACIONES"; messageTime="TIEMPO CUMPLIDO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="INTENTOS FALLIDOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTguX09yZGVuYXJfUF9fcnJhZm9z"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="18._Ordenar_P__rrafos_resources/media/";
var indexG=0;
var words1G=["QnVsc2Jhc3Vy","Q2hpa29yaXRh","VHJlZWNrbw==","VHVydHdpbmc=","U25pdnk=","Q2hlc3Bpbg==","Um93bGV0","R3Jvb2tleQ=="];
var words2G=["Q2hhcm1hbmRlcg==","Q3luZGFxdWls","VG9yY2hpYw==","Q2hpbWNoYXI=","VGVwaWc=","RmVubmVraW4=","TGl0dGVu","U2NvcmJ1bm55"];
var words3G=["U3F1aXJ0bGU=","VG90b2RpbGU=","TXVka2lw","UGlwbHVw","T3NoYXdvdHQ=","RnJvYWtpZQ==","UG9wcGxpbw==","U29iYmxl"];
var c1=[9,9,7,8,5,7,6,7];
var c2=[10,9,7,8,5,8,6,9];
var c3=[8,8,6,6,8,7,7,6];
