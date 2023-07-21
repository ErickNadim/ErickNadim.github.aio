//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=20;
var successes=0; successesMax=15; attempts=0; attemptsMax=2;
var score=0; scoreMax=4; scoreInc=4; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#23E70E"; colorText="#000000"; colorSele="#0000A0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="'Courier New', Courier, mono";
var timeOnMessage=5; messageOk="LOGRASTE RESOLVER EL PUZZLE"; messageTime="SE TERMINO EL TIEMPO"; messageError="PERDISTE"; messageAttempts="INTENTOS FALLIDOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="PUZZLE_GRENINJA_resources/media/original.jpg";
var board=[["PUZZLE_GRENINJA_resources/media/cGllY2UxXzE=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2UyXzE=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2UzXzE=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2U0XzE=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2U1XzE=.jpg"],["PUZZLE_GRENINJA_resources/media/cGllY2UxXzI=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2UyXzI=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2UzXzI=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2U0XzI=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2U1XzI=.jpg"],["PUZZLE_GRENINJA_resources/media/cGllY2UxXzM=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2UyXzM=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2UzXzM=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2U0XzM=.jpg","PUZZLE_GRENINJA_resources/media/cGllY2U1XzM=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UFVaWkxFX0dSRU5JTkpB"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
