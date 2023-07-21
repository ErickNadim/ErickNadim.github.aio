//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0; scoreMax=2; scoreInc=2; scoreDec=0
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
var timeOnMessage=3; messageOk="LO LOGRASTE"; messageTime="TIEMPO CUMPLIDO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="INTENTOS FALLIDOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTkuX09yZGVuYXJfSW1fX2dlbmVz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["aW1hZ2VzX184Xy5wbmc=","Y2hhcm1lbGVvbi5wbmc=","Q2hhcml6YXJkLnBuZw==","Y2hhcml6YXJkX3gucG5n","Y2hhcml6YXJkX3kucG5n"];
var alts=["Charmander","Charmeleon","Charizard","Mega Charizard X","Mega Charizard Y"];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="19._Ordenar_Im__genes_resources/media/";
var wordsG=[];aW=[];
