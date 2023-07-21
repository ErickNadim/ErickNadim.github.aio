//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=2;
var successes=0; successesMax=6; attempts=0; attemptsMax=2;
var score=0; scoreMax=12; scoreInc=2; scoreDec=0
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
var timeOnMessage=5; messageOk="Lo Lograste"; messageTime="Tiempo Finalizado"; messageError="Error"; messageErrorG="Error"; messageAttempts="Intentos Fallidos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MjAuX0NsYXNpZmljYXI="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["35","10","0","0"],["35","170","0","0"],["180","170","0","0"],["180","10","0","0"],["250","15","1","1"],["250","170","1","1"],["410","170","1","1"],["410","15","1","1"],["425","12","2","2"],["425","170","2","2"],["580","170","2","2"],["580","12","2","2"],["20","180","3","3"],["20","330","3","3"],["210","330","3","3"],["210","180","3","3"],["420","180","4","4"],["420","330","4","4"],["590","330","4","4"],["590","180","4","4"],["250","325","5","5"],["250","180","5","5"],["395","180","5","5"],["395","325","5","5"]];
var backSrc="20._Clasificar_resources/media/kdutkrysjr.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(35,10),new Point(35,170),new Point(180,170),new Point(180,10)],[new Point(250,15),new Point(250,170),new Point(410,170),new Point(410,15)],[new Point(425,12),new Point(425,170),new Point(580,170),new Point(580,12)],[new Point(20,180),new Point(20,330),new Point(210,330),new Point(210,180)],[new Point(420,180),new Point(420,330),new Point(590,330),new Point(590,180)],[new Point(250,325),new Point(250,180),new Point(395,180),new Point(395,325)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5"];
var areaSolved=["N","N","N","N","N","N"];
var areaWord=["Dragonite","Tyranitar","Goodra","Metagross","Salamence","Garchomp"];
var areaHelp=["Pokemon con un vuelo muy rapido","Pokemon tipo acero","Pokemon color lila","pokemon tipo acero con un brazo distitnto a los demas","pokemon evolucion de shelgon","pokemon evolucion de gabite"];
var areaWrong=["Error","Error","Error","Error","Error","Error"];
var initMessageError="Error";
var wordPointX=["39","250","426","18","417","250"];
var wordPointY=["17","11","11","180","183","325"];
var areaColor=["#000000","#80FF00","#FF0000","#0000FF","#00FFFF","#FF8040"];
var pathMedia="20._Clasificar_resources/media/"
var auMP3=["","","","","",""];
var auOGG=["","","","","",""];
var colorWord="#000000";
