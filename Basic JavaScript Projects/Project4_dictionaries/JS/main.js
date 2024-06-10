//My Javascript dictionary , Key value pairs
function my_Dictionary(){
    var Animal = {
        Species:"Cat",
        Age: 14,
        Colour:"Orange",
        Habitat:"Home",
        Friend:"Dingo"
    };

    delete Animal.Colour; // Deleting one of the key value pairs

    document.getElementById("Dictionary1").innerHTML = Animal.Friend; //return the cats friends name
    document.getElementById("Dictionary2").innerHTML = Animal.Colour; //returns deleted value as undefined

}