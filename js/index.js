$(document).ready(function() {
	var result = "";
	var temp = "";

	var numDec = 0;
	var dis = $("#dis");

	function checkLength() {
		if (temp.length > 8) {
			dis.val(temp.substr(temp.length - 8, 8));
			if (temp.length > 15) {
				temp = "";
				dis.val("ERROR");
			}
		}
	}

	function checkResultLength() {
		if (result.length > 6) {
			dis.val(result.substr(0, 8));
		} else {
			dis.val(result);
		}
	}

	function addNum() {
		var numVal = $(this).val();
		temp += numVal;
		dis.val(temp);
		checkLength();
	}

	function addDec() {
		if (numDec === 0) {
			temp += ".";
			dis.val(temp);
			numDec++;
		}
		checkLength();
	}

	function addOps() {
		var opVal = $(this).val();
		temp += opVal;
		dis.val(temp);
		numDec = 0;
		checkLength();
	}

	function calculate() {
		var newTemp = temp.replace("÷", "/").replace("×", "*").replace("−", "-")
		result = eval(newTemp).toString();
		checkResultLength();
		temp = "";
	}

	function calcSqur() {
		result = Math.sqrt(parseFloat(temp, 10)).toString();
		checkResultLength();
		temp = "";
	}

	function clearAll() {
		result = "";
		temp = "";
		numDec = 0;
		dis.val(temp);
	}

	function clearLast() {
		if (temp.length > 0 && temp.charAt(temp.length - 1) !== ".") {
			temp = temp.substring(0, temp.length - 1);
			dis.val(temp);
		} else if (temp.length > 0 && temp.charAt(temp.length - 1) === ".") {
			temp = temp.substring(0, temp.length - 1);
			numDec = 0;
			dis.val(temp);
		}
	}

	$(".num-btn").click(addNum);

	$(".decimal").click(addDec);

	$(".operators, .exponent").click(addOps);

	$(".square").click(calcSqur);

	$(".equals").click(calculate);

	$(".clear-all").click(clearAll);

	$(".clear-last").click(clearLast);

});