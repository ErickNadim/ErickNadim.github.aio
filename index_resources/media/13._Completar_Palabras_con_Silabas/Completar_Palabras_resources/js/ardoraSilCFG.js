//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=16; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#B1D61F"; colorText="#000000"; colorSele="#3587EA";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Felicidades"; messageTime="Tiempo Cumplido"; messageError="Error!"; messageErrorG="Error!"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["Elec-","Char-","-azam","-nite","-rus","Tor-","-wott","Ven-"];
var wIma=["Electivire.png","images (8).png","alakazam.png","images (62).jpeg","taurus.png","torterra.png","OSHAWOTT.jpg","venonat.png"];
var audio=["","","","","","","",""];
var wAlt=["","","","","","","",""];
var w0=["dGl2aXJl","bWFuZGVy","YWxhaw==","ZHJhZ28=","dGF1","dGVycmE=","b3NoYQ==","b25hdA=="];
var w1=["dHJpaw==","aXphcmQ=","YWJyYQ==","a2luZw==","dG8=","dGllcnJh","b3Nobw==","ZW5v"];
var w2=["dHJvZA==","bWVsZW9u","c29saw==","ZWxlY3Rp","dmFjbw==","bWVudGE=","cGFuZGE=","YWRv"];
var w3=["a2lk","aXRv","dmVu","YnVsYmE=","dGVybmF1","bmFkbw==","ZGlubw==","ZXp1ZWxh"];
var c=[6,6,4,5,3,5,4,4];
var wW=["Error","Error","Error","Error","Error","Error","Error","Error"];
var dirMedia="Completar_Palabras_resources/media/";
var wordsGame="Q29tcGxldGFyX1BhbGFicmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
