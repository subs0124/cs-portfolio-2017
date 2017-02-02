var calcInput1 = document.getElementById("calcInput1");
var calcInput2 = document.getElementById("calcInput2");
var button1 = document.getElementById("button1");
var dropdown = document.getElementById("dropdown");
var calAnswer = document.getElementById("calAnswer");
var answer;

button1.addEventListener("click", function() {


    var num1 = parseInt(calcInput1.value);
    var num2 = parseInt(calcInput2.value);
    var op = dropdown.value

    if (op === "+") {
        var answer = num1 + num2;
        calAnswer.innerHTML = answer;
    }

    else if (op === "-") {
        var answer = num1 - num2;
        calAnswer.innerHTML = answer;

    }

    else if (op === "*") {
        var answer = num1 * num2;
        calAnswer.innerHTML = answer;

    }

    else if (op === "/") {
        var answer = num1 / num2;
        calAnswer.innerHTML = answer;

    }

    else if (op === "^") {
        var answer = Math.pow(num1, 2);
        calAnswer.innerHTML = answer;

    }

    else if (op === "sqrt") {
        var answer = Math.sqrt(num1);
        calAnswer.innerHTML = answer;

    }
});
