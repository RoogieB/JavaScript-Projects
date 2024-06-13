document.write(typeof("10"));

//Showcasing how strings and integers can be added together in JS
var strCoercion = "19" + 5;
document.write("<br>");
document.write(strCoercion);
document.write("<br>");
document.write(isNaN("string"));
document.write("<br>");
document.write(isNaN("007"));
document.write("<br>");
document.write(0/0);

//displays positive infinity
function infinity(){
    var numinfinity = 3E311;

    document.getElementById("infinity").innerHTML = numinfinity;
}

//Displays negative infinity
function neg_Infinity(){
    var numinfinity = 3E311;

    document.getElementById("negativeInfinity").innerHTML = -numinfinity;
}

document.write("<br>");
document.write(6>5);

console.log(7 + 4);
console.log(7 < 4);
document.write("<br>");

document.write(7 == 7);
document.write("<br>");
document.write(7 == 6);

//Showcasing the absolute boolean
document.write("<br>");
document.write(12 === 12);

document.write("<br>");
document.write(12 === "13");

document.write("<br>");
document.write(13 === "13");

document.write("<br>");
document.write("14" === "13");

//Showcase the and boolean
document.write("<br>");
document.write(13 > 8 && 13 > 12);

document.write("<br>");
document.write(13 < 8 && 13 > 12);

//Showcasing the or boolean
document.write("<br>");
document.write(13 > 8 || 13 > 22);

document.write("<br>");
document.write(13 < 8 || 13 < 12);

//Function to display in html and showcase not boolean
function not_Function(){
    document.getElementById("notFuncFalse").innerHTML = !(20 > 10);
    document.getElementById("notFuncTrue").innerHTML = !(5 > 10);
}