//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=2;
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
var colorBack="#FFFFFF"; colorButton="#4AAE4D"; colorText="#000000"; colorSele="#E64D20";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage="Fracasaste"; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo Lograste!"; messageTime="Tiempo Cumplido"; messageError="Error!"; messageErrorG="Error!"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsYWNpb25hcl9QYWxhYnJhcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["VGlwbyBGdWVnbw==", "VGVwaWc="],["VGVwaWc=", "QXNjdWFz"],["TWFnbWFy", "TGFuemFsbGFtYXM="],["VGlwbyBGdWVnbw==", "TWFnbWFy"],["Q2F0ZXJwaWU=", "RGlzcGFybyBNb3Jh"],["VGlwbyBCaWNobw==", "Q2F0ZXJwaWU="],["UGluc2ly", "VGlqZXJhIFg="],["VGlwbyBCaWNobw==", "UGluc2ly"],["Qmxhc3RvaXNl", "SGlkcm9Cb21iYQ=="],["VGlwbyBBZ3Vh", "Qmxhc3RvaXNl"],["QnVpemVs", "Q2hvcm8gZGUgQWd1YQ=="],["VGlwbyBBZ3Vh", "QnVpemVs"],["VG9ydGVycmE=", "R2lnYXBvZGVy"],["VGlwbyBQbGFudGE=", "VG9ydGVycmE="],["QnVsYmFzYXVy", "SG9qYXMgTmF2YWph"],["VGlwbyBQbGFudGE=", "QnVsYmFzYXVy"],["Sm9sdGVvbg==", "Q2hpc3Bh"],["VGlwbyBFbMOpY3RyaWNv", "Sm9sdGVvbg=="],["RWxlY3RpdmlyZQ==", "RWxlY3Ryb2JvbGE="],["VGlwbyBFbMOpY3RyaWNv", "RWxlY3RpdmlyZQ=="]];
var c=[[10,5],[5,6],[6,11],[10,6],[8,12],[10,8],[6,8],[10,6],[9,10],[9,9],[6,13],[9,6],[8,9],[11,8],[9,12],[11,9],[7,6],[14,7],[10,11],[14,10]];
var con1=["Tipo Fuego","Tipo Agua","Tipo Planta","Tipo Bicho","Tipo Eléctrico"];
var con2=["Tepig","Magmar","Caterpie","Pinsir","Blastoise","Buizel","Torterra","Bulbasaur","Jolteon","Electivire"];
var con3=["Ascuas","Lanzallamas","Disparo Mora","Tijera X","HidroBomba","Choro de Agua","Gigapoder","Hojas Navaja","Chispa","Electrobola"];
var sel1=""; join1=[]; join2=[];
