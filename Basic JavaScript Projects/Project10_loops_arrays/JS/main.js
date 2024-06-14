//shows while loop in action
function callLoop(){
    var digit = "";
    var x = 1;
    while(x < 11){
        digit += "<br>" + x;
        x++; 
    }
    document.getElementById("loop").innerHTML = digit;
}

//returns the length of string
function stringLength(){
    var text = "This city seems so quite these days"
    var length = text.length;

    document.getElementById("lengthText").innerHTML = length;
}

//for loop in action
function forLoop(){
    var insttruments = ["guitar" , "drums" , "piano" , 
        "bass" , "violin" , "trumpet" , "flute"];
    var content = "";
    var index;

    for (y = 0; y < insttruments.length; y++){
        content += insttruments[y] + "<br>";
    }
    document.getElementById("list_Of_Instruments").innerHTML = content;
}

//create array and return one of the states
function arrayFunction(){
    var catPics = [];
    catPics[0] = "sleeping";
    catPics[1] = "playing";
    catPics[2] = "eating";
    catPics[3] = "purring";

    document.getElementById("array").innerHTML = "In this picture the cat is "
    + catPics[2] + ".";
}

//using const 
function constFunc(){
    const musical_instruments = {type:"guitar", brand:"fender", color:"black"};
    musical_instruments.color = "blue";
    musical_instruments.price = "£500"

    document.getElementById("constant").innerHTML = "the cost of the " +
    musical_instruments.type + " was " + musical_instruments.price;
}

//using the let word to create a container
function letFunc(){
    var random = 76;
    var text = "";
    text += random + "<br>";

    temp();

    function temp(){
        let random = 43;
        document.getElementById("let").innerHTML = random;
        text += random + "<br>";
    }

    text += random + "<br>";

    document.getElementById("let").innerHTML = text;
}

//returns description of car
let car = {
    make: "Dodge ",
    model: "viper ",
    year: "2021 ",
    colour: "red",
    description : function(){
        return "the car is a " + this.make + this.model + this.year + this.colour;
    }
};
document.getElementById("carObject").innerHTML = car.description();

//breaking out of for loop
function breakFunc(){
    var text = "";
    for (var i = 0; i < 5; i++) {
    if (i === 3) break;
    text += i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

//skipping one iteration in for loop
function continueFunc(){
    var text = "";
    for(var x = 0; x < 10; x++){
        if(x == 3){
            continue
        }
        text += x + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}
