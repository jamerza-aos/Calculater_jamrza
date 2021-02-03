/* let eins = document.getElementById("eins").value;
let zwei = document.getElementById("zwei").value;
let drei = document.getElementById("drei").value;
let fier = document.getElementById("fier").value;
let fünf = document.getElementById("fünf").value;
let sechs = document.getElementById("sechs").value;
let seben = document.getElementById("seben").value;
let acht = document.getElementById("acht").value;
let neuen = document.getElementById("neuen").value;
let plus = document.getElementById("plus").value;
let minus = document.getElementById("minus").value;
let mal = document.getElementById("mal").value;
let zero = document.getElementById("zero").value;
let punkt = document.getElementById("punkt").value;
let teil = document.getElementById("teil").value;
let ist  = document.getElementById("ist").value;
let clear = document.getElementById("clear").value; */




/* function right(x){
    let eins = document.getElementById("eins").value;
document.getElementById("zwei").value;
 document.getElementById("drei").value;
document.getElementById("fier").value;
document.getElementById("fünf").value;
document.getElementById("sechs").value;
 document.getElementById("seben").value;
 document.getElementById("acht").value;
 document.getElementById("neuen").value;
 document.getElementById("plus").value;
 document.getElementById("minus").value;
 document.getElementById("mal").value;
 document.getElementById("zero").value;
 document.getElementById("punkt").value;
document.getElementById("teil").value;
document.getElementById("ist").value;
document.getElementById("clear").value;
    document.getElementById("window").value += x ;
}

function Rest(y){
    document.getElementById("window").value += y;
}

function rest(){
    var result = eval(document.getElementById("window").value);
    document.getElementById("window").value= result
} */



function board(x){
	document.getElementById('Ergibniss').value += x;
}
function restt(y){
	document.getElementById('Ergibniss').value = y;
}
function result(){
	var result = eval(document.getElementById('Ergibniss').value);
	document.getElementById('Ergibniss').value = result;
}