//adds the strings together
function fullSentence(){
    var part_1 = "I have "
    var part_2 = "made this into "
    var part_3 = "a full "
    var part_4 = "sentence "

    var wholeSentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = wholeSentence;
}

//returns only portion of string
function sliceMethod(){
    var sentence = "Here come the 3 sheriffs up over the hill"
    var section = sentence.slice(20,34);
    document.getElementById("slice").innerHTML = section;
}

//finds position of the string
function searchString(){
    var text = "there was some yellow clouds in the sky"
    var position = text.search("yellow");

    document.getElementById("search").innerHTML = position;
}

//makes the text upper case
function toUpperCaseString(){
    var text = "There was a loud noise behind me"
    document.getElementById("upperCase").innerHTML = text.toUpperCase();
}

//converts the number to string
function numToString(){
    var x = 3492;
    document.getElementById("toStringMethod").innerHTML = x.toString();
}

//truncates number after decimal to specified lengh
function precisionMethod(){
    var x = 32341213.18212984698123
    document.getElementById("toPrecisionMethod").innerHTML = x.toPrecision(8);
}

//truncates the number 
function toFixedMethod(){
    var x = 239.38227
    document.getElementById("toFixed").innerHTML = x.toFixed(2);
}

//used already internally by javascript , simply gets the value of the variable
function valueOfMethod(){
    var x = "Hello World!"
    document.getElementById("valueOf").innerHTML = x.valueOf();
}