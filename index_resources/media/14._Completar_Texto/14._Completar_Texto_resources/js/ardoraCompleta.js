//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){if (tiAval){parent.iniciaActividade()}
if ((tiTime) && (tiButtonTime)){paintButtonTime();}else{showText();}$(":input").attr("autocomplete","off");$(":input").attr("spellcheck",false);}
function showText(){
document.getElementById("ardoraAct").innerHTML=txtC[indexTXT]+'<canvas id="ardoraActCanvas" width="2px" height="2px"></canvas><canvas id="ardoraHelpCanvas" width="2px" height="2px"></canvas>';
for (j=1; j<41; j++){var numItem=j;var nameItem="item"+numItem.toString();var theItem=document.getElementById(nameItem);var indexOptions=0;if (theItem != null){
indexOptions=0;var opt=new Array();for (i=0; i<a.length; i++){if (a[i]==numItem){opt[indexOptions]=answers[i];indexOptions++;}}
var opt2=new Array();for (i=0; i<opt.length; i++){ opt2[i]="~";}for (i=0; i<opt.length; i++){var num=Math.floor((Math.random()*opt.length));while (opt2[num]!="~"){num++;
if (num>opt.length-1){num=0;}}opt2[num]=opt[i];}for (i=0; i<opt.length; i++){opt[i]=opt2[i];}
for (i=0; i<opt.length; i++){var newOpt = new Option(opt[i],opt[i]);theItem.options[i]=newOpt;}}}
resizeCanvas();cssColors()
$(".ardoraCombo").mouseenter(function () {var indexHelp=parseInt($(this).attr("name").substring(4));if ($.trim(itemHelp[indexHelp-1])){paintHelp($(this));}
}).mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"]="hidden";});
$(".imaup").keydown(function(e) {if (e.which != 9) {$(this).click();}});
$(".imaup").on("touchstart click", function() {var iu=$(this).attr("src").split(".");var newDivBig = $('<div id="imaForTagBig"  tabindex="0"><span class="background-image" role="img" aria-label="' + $(this).attr("alt") + '"></span></div>);');
newDivBig.css({height: "100%",width: "100%",position: "absolute",padding: "0px",margin: "0px",backgroundImage: "url("+iu[0]+"_big."+iu[1]+")",backgroundColor: "rgba(255,253,253,0.8)",backgroundRepeat: "no-repeat",backgroundPosition: "center center",top: "0",left: "0"});newDivBig.mousedown(function(e) {$("#imaForTagBig").remove();});
$("body").append(newDivBig);$("#imaForTagBig").focus();$("#imaForTagBig").keydown(function(e) {if (e.which == 27) {newDivBig.mousedown();}});});
}
function paintHelp(item){document.getElementById("ardoraHelpCanvas").style.zIndex=3;var canvas = document.getElementById("ardoraHelpCanvas");canvas.width = canvas.width;var contexto = canvas.getContext("2d");
contexto.font="14px " + fHelp; var indexHelp=parseInt($(item).attr("name").substring(4));var metricsW = contexto.measureText(itemHelp[indexHelp-1]).width+20;
var metricsH = 10+14+10;$("#ardoraHelpCanvas").attr({"width": metricsW,"height": metricsH});var topHelp=Math.round($(item).position().top)-metricsH;
var leftHelp=Math.round($(item).position().left)+10-(canvas.width/2);var xPoint=0;if (leftHelp<5){leftHelp=5;xPoint=Math.round($(item).position().left)+10;};
document.getElementById("ardoraHelpCanvas").style["visibility"]="visible";document.getElementById("ardoraHelpCanvas").style["position"]="absolute";document.getElementById("ardoraHelpCanvas").style["top"]=topHelp.toString()+"px";
document.getElementById("ardoraHelpCanvas").style["left"]=leftHelp.toString()+"px";
contexto.fillStyle=colorSele;var gcolorSele=colorSele;colorSele="#FF8000";paintBubble(contexto,0,0,canvas.width-10, canvas.height-3,xPoint,10);colorSele=gcolorSele;
contexto.beginPath();contexto.lineWidth="1";contexto.textAlign="left";
contexto.font="14px " + fHelp;contexto.shadowBlur = 0;contexto.shadowOffsetX = 0;contexto.shadowOffsetY = 0;
contexto.fillStyle="#000000";contexto.fillText(itemHelp[indexHelp-1],5,14);contexto.fill();}
function randomSort(){};
function resizeCanvas(){var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});$("#ardoraActCanvasAnim").attr({"width": canWidth,"height": canHeight});};
function isCorrect(){successes=consolidateSuccess;score=consolidateScore;var correct=true;for (j=1; j<41; j++){var numItem=j;var nameItem="item"+numItem.toString();
var theItem=document.getElementById(nameItem);var ansCorrect="";if (theItem != null){
for (i=0; i<a.length; i++){if (a[i]==numItem){
if (parseInt(completaWords(b[i]))==numItem){ansCorrect=answers[i];}}}
if (theItem.value==ansCorrect && $.trim(theItem.value)!=""){
itemCorr[numItem-1]="1";consolidateSuccess++;consolidateScore=consolidateScore+scoreInc;
score = score + scoreInc;successes++;}
else{
consolidateScore=consolidateScore-scoreDec;
score = score - scoreDec;correct=false;}}}if (correct) {if (indexTXT==txtC.length-1){showMessage("Ok");$("#buttonOk").remove();}else{
showButtonNext();
timeAct = timeAct + timeBon;}}else{attempts++;if (tiAttempts) {
if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){for (i = 0; i < itemCorr.length; i++) {itemCorr[i]="1";}showCorrect();}
function paintBack(){showText();consolidateSuccess=successes;consolidateScore=score;}
function completaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function showCorrect(){var output="";var txtCorr=document.getElementById("ardoraAct").innerHTML;
for (j = 1; j < 41; j++) {var numItem = j;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {if (itemCorr[j-1]!="0"){var pos=txtCorr.indexOf(nameItem);var ans="";
posItem=txtCorr.indexOf("</select>",pos)+9;
for (i = 0; i < a.length; i++) {if (a[i] == numItem) {if (parseInt(completaWords(b[i])) == numItem) {ans = answers[i];}}}
output=[txtCorr.slice(0, posItem),"<b>"+ans+"</b>", txtCorr.slice(posItem)].join("");
var it="select#"+nameItem;
document.getElementById("ardoraAct").innerHTML=output;$(it).remove();txtCorr=document.getElementById("ardoraAct").innerHTML;}}}
$(".ardoraCombo").mouseenter(function () {var indexHelp=parseInt($(this).attr("name").substring(4));if ($.trim(itemHelp[indexHelp-1])){
paintHelp($(this));}}).mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"]="hidden";});}
function showButtonNext() {var canvas = document.getElementById("ardoraActCanvas");document.getElementById("ardoraActCanvas").style.zIndex=5;document.getElementById("ardoraActCanvas").style["visibility"] = "visible";canvas.width = canvas.width;
var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.50;contexto.fillStyle = colorBack;contexto.fillRect(0,0,canvas.width, canvas.height);contexto.font="14px "+fMenssage;var metricsW=contexto.measureText(textBNext).width;var x=canvas.width-metricsW-50;var y = canvas.height - 14 - 40;
contexto.beginPath();contexto.globalAlpha=1;contexto.lineWidth=2;contexto.fillStyle=colorButton;contexto.strokeStyle=colorSele;roundedRect(contexto, x, y, metricsW + 45, 14 + 20, 5, colorButton);contexto.shadowColor = "black";contexto.shadowBlur = 15;
contexto.shadowOffsetX=4;contexto.shadowOffsetY=4;contexto.stroke();contexto.beginPath();contexto.textAlign="left";contexto.fillStyle = colorText;contexto.fillText(textBNext,x+10,y+14+10);contexto.lineWidth=5;contexto.stroke();contexto.fill();
$("#ardoraActCanvas").bind("click", function(e) {$("#ardoraActCanvas").unbind();document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";indexWord=0;indexTXT++;showText();});}
