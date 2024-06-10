//function to return added numbers
function addition_Function(){
    var addition = 2 + 2; 
    document.getElementById("mathAdd").innerHTML = "2 + 2 = " + addition;
}

//function to return subtracted numbers
function subtraction_Function(){
    var subtraction = 5 - 2;
    document.getElementById("mathSub").innerHTML = "5 - 2 = " + subtraction;
}

//function to return multiplied numbers
function multiply_Function(){
    var multiplication = 6 * 8;
    document.getElementById("mathMultiply").innerHTML = "6 * 8 = " + multiplication;
}

//function to return divided numbers
function divide_Function(){
    var division = 48 / 6;
    document.getElementById("mathDiv").innerHTML = "48 - 6 = " + division;
}

//function to return result 
function more_Math(){
    var result = 3 * 7 + 27 / 3 - 11;
    document.getElementById("moreMath").innerHTML = "3 * 7 + 27 / 3 - 11 = " + result;
}

//function to return modulus result numbers
function modulus_Operator(){
    var result = 25 % 6;
    document.getElementById("modulus_Math").innerHTML = "When you divide 26 by 5 , the remainder is: " + result;
}

//function to return negated numbers
function negation_Operator(){
    var num = 10;
    document.getElementById("negationOperator").innerHTML = "10 after negation operator is: " + -num;
}

//function to return incremented by 1 numbers
function increment_Function(){
    var num = 5;
    num++;
    document.getElementById("mathIncrement").innerHTML = "5++ = " + num;
}

//function to return decremented by 1 numbers
function decrement_Function(){
    var num = 5;
    num--;
    document.getElementById("mathDecrement").innerHTML = "5-- = " + num;
}

//function to return random number
document.write(Math.random() * 50);

document.write("     "); //Spacing

//function to return rounded numbers
document.write(Math.round(5.4672));