var globalVar = 5; //global variable

//for creating local variable
function localVar(){
    var localVariable = 10;

}

//Dsiplays the values and error with local variable in console
document.write(globalVar);
document.write(localVariable);
console.log(localVariable);
console.log(globalVar);

//if current hour is less than 8pm then greet them , else tell them we are closed
function ifStatementFunc(){
    if(new Date().getHours() < 20){
        document.getElementById("ifStatements").innerHTML = "Hello , How are you?"
    }
    else{
        document.getElementById("ifStatements").innerHTML = "Hello , We are Closed"
    }
}

//if persons age less than 18 dont let them in , if more than 18 greet them
function ifStatementFunc2(){
    var age = document.getElementById("old").value;
    if(age < 18){
        document.getElementById("entry").innerHTML = "You cannot enter";
    }
    else{
        document.getElementById("entry").innerHTML = "Welcome in";
    }
}