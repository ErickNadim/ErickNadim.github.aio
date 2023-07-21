//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=180; timeIni=180; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=3;
var score=0; scoreMax=24; scoreInc=2; scoreDec=0
var typeGame=1;
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
var timeOnMessage=3; messageOk="Lo Lograste"; messageTime="Tiempo Cumplido"; messageError="Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="" class="imaup imaLeft" src="14._Completar_Texto_resources/media/descarga__1_.jpg" alt="Ima"  align="left"><p><select aria-label="Item 1" name="item1" id="item1" class="ardoraCombo"></select> come muchísimos kilos de comida al <select aria-label="Item 2" name="item2" id="item2" class="ardoraCombo"></select>. Lo único que hará será echarse a <select aria-label="Item 3" name="item3" id="item3" class="ardoraCombo"></select> hasta que vuelva a despertarse por el hambre. Cuando este Pokémon duerme, si por alguna razón lo <select aria-label="Item 4" name="item4" id="item4" class="ardoraCombo"></select>, se enfadará mucho y te atacará ferozmente, aunque después de perseguirte se volverá a dormir. Su preevolución <select aria-label="Item 5" name="item5" id="item5" class="ardoraCombo"></select> es muy parecido a él; solo que es un poco más activo y come algo menos. A pesar de ser un <select aria-label="Item 6" name="item6" id="item6" class="ardoraCombo"></select> muy flojo y gordo, tiene una agilidad extremadamente sorprendente para un Pokémon de su <select aria-label="Item 7" name="item7" id="item7" class="ardoraCombo"></select> y peso. También tiene una gran variedad de ataques que puede aprender. </p><p> </p>','<img tabindex="0" alt="" class="imaup imaLeft" src="14._Completar_Texto_resources/media/tipo_agua.jpg" alt="Ima"  align="left"><p>Los Pokémon de <select aria-label="Item 8" name="item8" id="item8" class="ardoraCombo"></select> resultan poco eficaces y débiles frente a los tipos <select aria-label="Item 9" name="item9" id="item9" class="ardoraCombo"></select> debido a que las plantas absorben el agua con sus raíces. Se dice que es <select aria-label="Item 10" name="item10" id="item10" class="ardoraCombo"></select> y que suele adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. </p><p>  Sin embargo, muchos Pokémon de agua son también de tipo hielo o pueden aprender <select aria-label="Item 11" name="item11" id="item11" class="ardoraCombo"></select> de hielo, que resultan efectivos contra los de planta, disminuyendo así su desventaja de tipo. Algunos Pokémon del tipo agua necesitan la <select aria-label="Item 12" name="item12" id="item12" class="ardoraCombo"></select> agua para evolucionar </p><p> . </p><p> </p>'];
var b=["NDM=","NDY=","MTA=","MTU=","MTg=","Mzg=","Mzk=","Nw==","MjM=","MzU=","OQ==","MjI=","MTA=","NDc=","NQ==","OA==","MjY=","Mjc=","Mg==","MzA=","MTQ=","NDI=","MzE=","MTE=","MTI=","MzQ=","Mw==","MQ==","Mw==","MTk=","MTE=","Ng==","Mg==","Ng==","Nw==","NA=="];
var c=[5,6,4,7,7,5,8,6,6,8,6,5,5,7,8,4,7,5,6,6,6,5,5,7,6,5,6,7,8,6,5,7,3,5,8,10];
var answers=["comer","fuerza","puro","manchas","Pikachu","debil","caliente","tamaño","animal","fantasma","planta","gordo","comer","ventaja","Munchlax","agua","barriga","color","Magmar","hierba","corres","volar","bicho","ataques","piedra","fuego","dormir","Snorlax","Farfetch","Ratate","beber","Pokémon","día","noche","hecharse","despiertas"];
var a=["11","12","10","4","5","10","10","7","6","9","9","6","3","12","5","8","7","7","1","8","4","11","8","11","12","9","3","1","1","5","3","6","2","2","2","4"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MTQuX0NvbXBsZXRhcl9UZXh0bw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var textBNext="Siguiente";
var fHelp="Verdana, Geneva, sans-serif";
