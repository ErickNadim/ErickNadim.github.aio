//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#065FBF"; colorText="#000000"; colorSele="#61BE41";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage="Finalizado"; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Courier New', Courier, mono";
var timeOnMessage=3; messageOk="Bien Hecho"; messageTime="Culminó el Tiempo"; messageError="Primer Error"; messageErrorG="Primer Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWhvcmNhZG9fUG9rZW1vbnM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TEFQUkFT","VE9SVEVSUkE=","Q0hBUklaQVJE","U05PUkxBWA==","VEVQSUc=","RFJBR09OSVRF","R0VOR0FS","VEFVUk9T","",""];imaW=["0_Lapras.png","0_torterra.png","0_images__61_.jpeg","0_descarga__1_.jpg","0_tepig.png","0_images__62_.jpeg","0_descarga.jpg","0_taurus.png","",""];queW=["Monstruo Agua.","Evolución de Grotle.","Monstruo Dragón.","Solo despierta para comer.","Tipo Fuego.","Pokemon calmado pero muy fuerte.","Tiene un cuerpo maldito.","Posee 3 colas","",""];var wordsL=[6,8,9,7,5,9,6,6,"",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNOPQRSTUVWXYZ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Ahorcado_Pokemons_resources/media/"; textBNext="Siguiente";
