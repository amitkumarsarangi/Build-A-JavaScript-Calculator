// window.alert("Hi bud!!!");
var mainContainer = document.getElementsByClassName("main-container");
	var fccCalculator = document.getElementById("fccCalculator");
	var calculatorContainer = document.getElementsByClassName("calculator-container");
		//class="main-calculator"
			var calculatorScreen = document.getElementById("calculatorScreen");
			var operatorScreen = document.getElementById("operatorScreen");
		//class="keypad"
		//class="keypad-row"
		var plus = document.getElementById("+");
		var minus = document.getElementById("-");
		var divide = document.getElementById("/");
		var multiply = document.getElementById("*");
		var percent = document.getElementById("%");
		var one = document.getElementById("1");
		var two = document.getElementById("2");
		var three = document.getElementById("3");
		var four = document.getElementById("4");
		var five = document.getElementById("5");
		var six = document.getElementById("6");
		var seven = document.getElementById("7");
		var eight = document.getElementById("8");
		var nine = document.getElementById("9");
		var zero = document.getElementById("0");
		var equalsTo = document.getElementById("=");
		var sqrRoot = document.getElementById("sqr-rt");
		var ac = document.getElementById("ac");
		var ce = document.getElementById("ce");
		var point = document.getElementById(".");
//All get elements variable above this line... ... ...
var strForEval = ""; //store values from arrForEval to be sent for evaluation...
//All global variables above this line line... ... ...
ac.onclick = function() {
	// calculatorScreen.innerHTML = "0";
	strForEval = "";
	printOnCalScreenFun("0");
	printOnOperatorScreenFun("AC", "clear");
}
ce.onclick = function() {
	strForEval = strForEval.slice(0, -1);
	printOnCalScreenFun(strForEval);
	printOnOperatorScreenFun("CE", "delete");
}
equalsTo.onclick = function() {
	calculatorScreen.innerHTML = evaluateFun(strForEval);
	printOnOperatorScreenFun("Equals", "=");
}
sqrRoot.onclick = function() {
	strForEval = Math.sqrt(strForEval);
	printOnCalScreenFun(strForEval);
	printOnOperatorScreenFun("Square Root", "&radic;");
}
percent.onclick = function() {
	strForEval = makeStrForEval(strForEval, "%");
	printOnOperatorScreenFun("Remainder", "%");
}
divide.onclick = function() {
	strForEval = makeStrForEval(strForEval, "/");
	printOnOperatorScreenFun("Divide", "&#247;");
}
multiply.onclick = function() {
	strForEval = makeStrForEval(strForEval, "*");
	printOnOperatorScreenFun("Multiply", "&times;");
}
plus.onclick = function() {
	strForEval = makeStrForEval(strForEval, "+");
	printOnOperatorScreenFun("Add", "+");
}
minus.onclick = function() {
	strForEval = makeStrForEval(strForEval, "-");
	printOnOperatorScreenFun("Subtract", "-");
}
one.onclick = function() {
	strForEval = makeStrForEval(strForEval, "1");
	printOnCalScreenFun(strForEval);
}
two.onclick = function() {
	strForEval = makeStrForEval(strForEval, "2");
	printOnCalScreenFun(strForEval);
}
three.onclick = function() {
	strForEval = makeStrForEval(strForEval, "3");
	printOnCalScreenFun(strForEval);
}
four.onclick = function() {
	strForEval = makeStrForEval(strForEval, "4");
	printOnCalScreenFun(strForEval);
}
five.onclick = function() {
	strForEval = makeStrForEval(strForEval, "5");
	printOnCalScreenFun(strForEval);
}
six.onclick = function() {
	strForEval = makeStrForEval(strForEval, "6");
	printOnCalScreenFun(strForEval);
}
seven.onclick = function() {
	strForEval = makeStrForEval(strForEval, "7");
	printOnCalScreenFun(strForEval);
}
eight.onclick = function() {
	strForEval = makeStrForEval(strForEval, "8");
	printOnCalScreenFun(strForEval);
}
nine.onclick = function() {
	strForEval = makeStrForEval(strForEval, "9");
	printOnCalScreenFun(strForEval);
}
zero.onclick = function() {
	strForEval = makeStrForEval(strForEval, "0");
	printOnCalScreenFun(strForEval);
}
point.onclick = function() {
	strForEval = makeStrForEval(strForEval, ".");
	printOnOperatorScreenFun("decimal", ".");
}
//All function declarations below this line... ... ...
function evaluateFun(str) { //this function will evaluate the given string...
	if (str==="") {
		return "0";
	} else {
		strForEval = eval(str);
		return strForEval;
	}
}
function makeStrForEval(str1, str2) { //this function will make the string for evaluation...
	str1 += str2;
	return str1;
}
function printOnCalScreenFun(str) { //this function will print on screen...
	return calculatorScreen.innerHTML = str;
}
function printOnOperatorScreenFun(opName, str) { //this function will print on operator screen...
	return operatorScreen.innerHTML = opName+ "(" + str + ")";
}