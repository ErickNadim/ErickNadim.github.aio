//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#4BC203"; colorText="#000000"; colorSele="#0000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage="PERDISTE"; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="GANASTE"; messageTime="SE ACABO TU TIEMPO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="INTENTOS FALLIDOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["QQ==","Tg==","SQ==","TQ==","QQ==","TA==","RQ==","Uw==","IA==","UA==","RQ==","Ug==","VA==","RQ==","Tg==","RQ==","Qw==","SQ==","RQ==","Tg==","VA==","RQ==","Uw==","IA==","QQ==","IA==","VQ==","Tg==","IA==","TQ==","VQ==","Tg==","RA==","Tw==","IA==","RA==","SQ==","Uw==","VA==","SQ==","Tg==","VA==","Tw==","IA==","RA==","RQ==","IA==","Tg==","Tw==","Uw==","Tw==","VA==","Ug==","Tw==","Uw=="];
var que=["Dispara chorros de agua a través de los cañones de su caparazón, capaces de agujerear incluso el acero.","Es un pequeño roedor cuya morfología se encuentra basada en un animal el cual es pariente de los conejos.","De noche, se oculta en las sombras y absorbe el calor de sus víctimas, que sufren escalofríos irrefrenables.","Nada sin problema en aguas heladas gracias a la soberbia resistencia al frío que posee. Su tersa piel es ligeramente fría al tacto.","Este Pokémon tiene un estómago a prueba de bomba, por lo que es capaz de ingerir incluso comida podrida o mohosa","Le encanta comer bayas tostadas, pero a veces se emociona demasiado y termina churruscándolas.","Ataca con la vieira de su ombligo. En cuanto para un ataque, pasa al contraataque sin dilación.","La vejiga natatoria alrededor del cuello le permite flotar en el agua con la cabeza fuera para divisar a sus presas.","A pesar del tamaño que tiene y de lo pesado que es, puede volar. Es capaz de dar la vuelta al mundo en solo 16 horas.","Cuando oscurece, los anillos de su cuerpo comienzan a brillar y asustan a cualquiera que se acerque.","Los ojos le funcionan como radar. Gracias a ellos, puede moverse en la oscuridad y disparar potentes rayos."];
var yCell=["QkxBU1RPSVNF","UElLQUNIVQ==","R0VOR0FS","TEFQUkFT","U05PUkxBWA==","VEVQSUc=","T1NIQVdPVFQ=","QlVJWkVM","RFJBR09OSVRF","VU1CUkVPTg==","VkVOT05BVA=="];
var pos=[["0","6","1","8","13","34","3","23","7"],["10","18","0","5","17","0","27"],["0","11","2","0","25","12"],["0","0","0","53","0","38"],["50","15","43","0","0","0","0"],["21","14","0","37","0"],["49","0","0","0","0","51","39","42"],["0","31","40","0","16","0"],["33","0","0","0","54","20","0","52","19"],["0","4","0","0","22","0","28"],["0","46","32","0","41","0","0"]];
var upos=[["","","","","","","","",""],["","","","","","",""],["","","","","",""],["","","","","",""],["","","","","","",""],["","","","",""],["","","","","","","",""],["","","","","",""],["","","","","","","","",""],["","","","","","",""],["","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=20;
var showE=false;
var typeD=0;var tiCor=false;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="RGFtZXJv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
