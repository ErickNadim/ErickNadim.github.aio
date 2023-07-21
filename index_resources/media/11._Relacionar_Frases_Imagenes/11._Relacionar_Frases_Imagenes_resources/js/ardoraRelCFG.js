//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=2;
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
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Georgia, Serif";
var fEnun="Georgia, Serif";
var timeOnMessage=3; messageOk="Lo Lograste"; messageTime="Tiempo Cumplido"; messageError="Error"; messageErrorG="Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTEuX1JlbGFjaW9uYXJfRnJhc2VzX0ltYWdlbmVz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Buizel</p>","<p>Jolteon</p>","<p>Electivire</p>","<p>Charizard</p>","<p>Torterra</p>","<p>Caterpie</p>","<p>Lapras</p>","<p>Tepig</p>"];
var iL=["<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/BUIZEL.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/descarga.jpeg'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/Electivire.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/images__61_.jpeg'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/torterra.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/Caterpie.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/Lapras.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tepig.png'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Insignia Agua B.</p>","<p>Insignia Electrica J.</p>","<p>Insignia Electrica E.</p>","<p>Insignia Bicho.</p>","<p>Insignia Agua L.</p>","<p>Insignia Fuego C.</p>","<p>Insignia Planta.</p>","<p>Insignia Fuego T.</p>"]; ansRL=["MA==","MQ==","Mg==","NQ==","Ng==","Mw==","NA==","Nw=="];
var iR=["<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_agua.jpg'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_electrico.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_electrico.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_bicho.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_agua.jpg'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_fuego.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_planta.png'></div>","<div  align='center'><img alt='' src='11._Relacionar_Frases_Imagenes_resources/media/tipo_fuego.png'></div>"];
var auR=[1,2,3,6,7,4,5,8];
