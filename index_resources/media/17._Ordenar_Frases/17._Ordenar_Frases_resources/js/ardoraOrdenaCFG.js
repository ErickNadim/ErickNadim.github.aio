var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Georgia, Serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="LO LOGRASTE"; messageTime="TIEMPO CUMPLIDO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="INTENTOS FALLIDOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTcuX09yZGVuYXJfRnJhc2Vz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["UGlrYWNodSBlcyB1biBwb2tlbW9uIHRpcG8gZWxlY3RyaWNvIHF1ZSBkZXNjYXJnYSBsYSBlbmVyZ2lhIGVsZWN0cmljYSBwb3Igc3VzIG1lamlsbGFzLg==","TG9zIHBva2Vtb25lcyBkZSB0aXBvIHBsYW50YSBzdWVsZW4gc2VyIHBhY2lmaWNvcyB5IGxlcyBndXN0YSBjdWlkYXIgbGFzIGZsb3Jlcy4=","RXN0ZSBwb2tlbW9uIG5vIHNvbG8gZXMgZGUgdGlwbyB2b2xhZG9yIHRhbWJpZW4gY3VlbnRhIGNvbiBhdGFxdWVzIGRlIHRpcG8gZnVlZ28u","RGFya3JhaSBlcyBlbCBwb2tlbW9uIHF1ZSBzZSBjb21lIGxvcyBzdWXDsW9zIGRlIGxvcyBvdHJvcyBwb2tlbW9uLg==","R2xhbGllIHNlIGVzY29uZGUgYmFqbyBsYSBuZWJsaW5hIHBhcmEgcG9kZXIgYXRhY2FyIGEgc3VzIHByZXNhcy4="];imaW=["images__60_.jpeg","tipos_planta.jpg","talonflame.png","darkrai.png","glalie.png"];queW=["","","","",""];altW=["","","","",""];c=[88,80,81,66,65];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="17._Ordenar_Frases_resources/media/"; textBNext="PASAR";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
