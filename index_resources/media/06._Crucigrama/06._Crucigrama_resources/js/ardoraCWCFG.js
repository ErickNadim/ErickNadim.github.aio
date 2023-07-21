//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=2; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="Lo Lograste"; messageTime="Tiempo Cumplido"; messageError="Error"; messageErrorG="Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDYuX0NydWNpZ3JhbWE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","","","","","","","","","",""],["","","Qg==","TA==","QQ==","Uw==","VA==","Tw==","SQ==","Uw==","RQ==","","","",""],["","","QQ==","","","","RQ==","","","","","","","",""],["","","WQ==","","TA==","QQ==","UA==","Ug==","QQ==","Uw==","","","","",""],["","","TA==","","","UA==","SQ==","Sw==","QQ==","Qw==","SA==","VQ==","","",""],["Rw==","","RQ==","","","","Rw==","","","","","","","VA==",""],["RQ==","","RQ==","","","","","","","","","","","Tw==",""],["Tg==","","Rg==","","Vg==","RQ==","Tg==","Tw==","Tg==","QQ==","VA==","","","Ug==",""],["Rw==","","","","","","","","","","","","","VA==",""],["QQ==","TA==","QQ==","Sw==","QQ==","Wg==","QQ==","TQ==","","","","VA==","","RQ==",""],["Ug==","","","","Rg==","RQ==","Ug==","QQ==","TA==","SQ==","Rw==","QQ==","VA==","Ug==",""],["","","","QQ==","","","","","","","","VQ==","","Ug==",""],["","","","Qg==","VQ==","TA==","Qg==","QQ==","Uw==","QQ==","VQ==","Ug==","","QQ==",""],["","","","Ug==","","","","","","","","VQ==","","",""],["","","","QQ==","","","","","","","","Uw==","","",""]];
var x1=[3,5,6,5,1,5,4,1,14,5,6,7,8,12,4,3,7,6];
var y1=[2,4,5,8,10,11,13,6,6,10,10,10,10,10,12,2,2,4];
var x2=[11,10,12,11,8,14,12,1,14,5,6,7,8,12,4,3,7,6];
var y2=[2,4,5,8,10,11,13,11,13,11,11,11,11,15,15,8,6,5];
var imaCW=["06._Crucigrama_resources/media/blastoise.png","06._Crucigrama_resources/media/Lapras.png","06._Crucigrama_resources/media/images__60_.jpeg","06._Crucigrama_resources/media/venonat.png","06._Crucigrama_resources/media/alakazam.png","06._Crucigrama_resources/media/Feraligatr.png","06._Crucigrama_resources/media/bulbasaur.png","06._Crucigrama_resources/media/Gengar.png","06._Crucigrama_resources/media/torterra.png","","","","","06._Crucigrama_resources/media/taurus.png","06._Crucigrama_resources/media/Abra.png","06._Crucigrama_resources/media/bayleef.png","06._Crucigrama_resources/media/tepig.png",""];
var audioCW=["","","","","","","","","","","","","","","","","",""];
var defCW=["Pokemon tipo agua parecido a la tortuga","Pokemon con forma de lagarto marino de tipo hielo","Ratoncito amarillo de tipo electrico","pokemon tipo bicho con ojos de vision nocturna","Pokemon con cucharas usadas para pelear","Pokermon parecido a un cocodrilo de grande mandibula","Pokemon que cuenta con una semilla en el lomo","Pokemon tipo fantasma con una lengua muy alargada","Pokemon tipo planta con un árbol en el lomo","","","","","Pokemon con el parecido a un toro de tres colas","Pokemon parecido a un zorro pequeño de tipo psiquico","Pokemon tipo hoja con una hoja grande en su cabeza","Pokemon con forma de cerdito",""];
var altCW=["","","","","","","","","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
