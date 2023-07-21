//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=12; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=false;
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
var timeOnMessage=5; messageOk="Lo Lograste"; messageTime="Tiempo Cumplido"; messageError="Error"; messageErrorG="Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["Q0hBUklaQVJE","REFSS1JBSQ==","VE9SVEVSUkE=","R0xBTElF","VEFMT05GTEFNRQ==","RUxFQ1RJVklSRQ=="];var cp_ima=["Charizard.png","darkrai.png","torterra.png","glalie.png","talonflame.png","Electivire.png"];var cp_mp3=["","","","","",""];var cp_ogg=["","","","","",""];var cp_que=["U2UgdHJhdGEgZGUgdW4gcG9rw6ltb24gdGlwbyBmdWVnby92b2xhZG9yLCBQb3NlZSB1bmFzIHBvZGVyb3NhcyBhbGFzIHkgdW4gYWJyYXNhZG9yIGFsaWVudG8gZGUgZnVlZ28u","RXMgZWwgZ3VhcmRpw6FuIGRlIGxhIG9zY3VyaWRhZCwgeSBzdSBmdW5jacOzbiBlcyB2aWdpbGFyIHF1ZSBsYSBmdWVyemEgZGUgbGEgb3NjdXJpZGFkIG5vIHNlIGRlc2VxdWlsaWJyZSBjb24gbGEgZGUgbGEgbHV6","RXMgbGEgZXZvbHVjacOzbiBmaW5hbCBkZSBUdXJ0d2lnLCBBIHZlY2VzIGxvcyBwZXF1ZcOxb3MgUG9rw6ltb24gc2UgcmXDum5lbiBlbiBzdSBsb21vIHBhcmEgaGFjZXIgc3VzIG5pZG9zLg==","RXMgdW4gUG9rw6ltb24gZGUgdGlwbyBoaWVsbywgZXMgdW5hIGRlIGxhcyBkb3MgZXZvbHVjaW9uZXMgcG9zaWJsZXMgZGUgU25vcnVudC4=","UG9rw6ltb24gZGUgdGlwbyBmdWVnby92b2xhZG9yLCBwcmVzZW50YSB1bmEgY2VsZXJpZGFkIHkgdW5hIHBvdGVuY2lhIGRlIGZ1ZWdvIGluY3Jlw61ibGVzLg==","RXMgZGUgbG9zIFBva8OpbW9uIGRlIHRpcG8gRWzDqWN0cmljbyBxdWUgbcOhcyBlbGVjdHJpY2lkYWQgcHJvZHVjZW4uIEdlbmVyYSB1bmEgY29ycmllbnRlIGRlIGFsdGEgdGVuc2nDs24gZGVzZGUgbGFzIHB1bnRhcyBkZSBsYXMgY29sYXMu"];var cp_num=[9,7,8,6,10,10];var cp_alt=["","","","","",""];
var wordsGame="MDkuX0NvbnN0cnVpcl9QYWxhYnJhcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
