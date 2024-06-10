function my_first_function() { //naming and creating my function
    var str1 = "this is button 1"; //giving string a value

    document.getElementById("Button_Text_1").innerHTML = str1; //assinging string to the html element associated with the ID
}

function myFunction(){ //naming and creating my function
    var sentence = "I am learning "; //giving string a value
    sentence += " a lot from this book!"; //giving string a value 

    document.getElementById("concatenate").innerHTML = sentence; //assinging string to the html element associated with the ID
}