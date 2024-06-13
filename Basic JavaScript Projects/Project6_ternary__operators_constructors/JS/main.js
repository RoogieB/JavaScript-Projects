//Checks if someone is taller than 52 cm
function ride_Function(){
    var height, canRide;
    height = document.getElementById("Height").value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = canRide + " to ride."
}

//Checks if someone is older than 18
function voting_Age(){
    var age, canVote;
    age = document.getElementById("Age").value;
    canVote = (age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = canVote + " to vote!"
}

//Vehicle class with 4 overload arguaments
function Vehicle(make , model , colour , year){
    this.Vehicle_Make = make;
    this.Vehicle_Model = model;
    this.Vehicle_Colour = colour;
    this.Vehicle_Year = year;
}

//Creating 3 objects of Vehicle class
var Jack = new Vehicle("Dodge" , "Viper" , "Red" , 2020);
var Emily =new Vehicle("Jeep" , "Trail Hawk" , "White and Black", 2019);
var Erik = new Vehicle("Ford" , "Pinto" , "Mustard" , 1971);

//Displays text on index.html of Emilys Vehicle
function myFunction(){
    document.getElementById("Keywords_And_Constructors").innerHTML =
    "Emily drive a " + Emily.Vehicle_Colour + " -Coloured " + Emily.Vehicle_Model +
    " Manufactured in " + Emily.Vehicle_Year;
}

//Class for pet with 3 overload arguaments
function Pet(Specie , Colour , Age){
    this.Pet_Specie = Specie;
    this.Pet_Colour = Colour;
    this.pet_Age = Age;
}

//Creating 2 instances of pet object
var Luna = new Pet("Cat" , "Ginger" , 8);
var Dingo = new Pet("Dog" , "Grey" , 15);

//displaying text of Luna the pet variables
function petText(){
    document.getElementById("Pets").innerHTML =
    "My Pet Luna is a " + Luna.Pet_Specie + " , She\'s " +
    Luna.pet_Age + " years old and is the colour " + Luna.Pet_Colour; 
}

//Nested function which returns a number increased by 1 to be displayed
function countFunc(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var startingPoint = 9;
        function plusOne() {startingPoint += 1;}
        plusOne();
        return startingPoint;
    }
}