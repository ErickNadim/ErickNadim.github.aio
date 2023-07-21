//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=3;
var score=0; scoreMax=24; scoreInc=2; scoreDec=0
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
var timeOnMessage=3; messageOk="Lo Lograste"; messageTime="Tiempo Cumplido"; messageError="Error"; messageErrorG="Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["QnVpemVs","Qmxhc3RvaXNl","RGFya3JhaQ==","Q2hhcml6YXJk","R2xhbGll","U2NlcHRpbGU=","QW1waGFyb3M=","RnJvc2xhc3M=","R2VuZ2Fy","RWxlY3RpdmlyZQ==","QmF5bGVlZg==","VGFsb25mbGFtZQ=="];
var img_G=["i_BUIZEL.png","i_blastoise.png","i_darkrai.png","i_Charizard.png","i_glalie.png","i_megasceptile.png","i_ampharos.png","i_froslass.png","i_descarga.jpg","i_Electivire.png","i_bayleef.png","i_talonflame.png"];
var mp3_G=["","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","",""];
var n_G=["MQ==","MQ==","Mw==","NA==","NQ==","Ng==","Mg==","NQ==","Mw==","Mg==","Ng==","NA=="];
var e_G=["","","","","","","","","","","",""];
var mp4_G=["","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","",""];
var txtGr=["Tipo Agua","Tipo Electrico","Tipo Fantasma","Tipo Fuego","Tipo Hielo","Tipo Planta"];
var imgGr=["0_Tipos_Agua.jpg","0_tipos_electricos.jpg","0_tipo_fantasma.jpg","0_tipos_fuego.jpg","0_tipos_hielos.jpg","0_tipos_planta.jpg"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="Error";
var dirMedia="16._Clasificar_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="MTYuX0NsYXNpZmljYXI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
