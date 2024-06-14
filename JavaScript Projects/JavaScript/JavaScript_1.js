function ColourFunc(){
    var colourOutput;
    var colour = document.getElementById("Colour_Input").value;
    var colourString = " is a great colour!"

    switch(colour) {
        case "Red":
            colourOutput = "Red" + colourString;
        break;
        case "Yellow":
            colourOutput = "Yellow" + colourString;
        break;
        case "Green":
            colourOutput = "Green" + colourString;
        break;
        case "Blue":
            colourOutput = "Blue" + colourString;
        break;
        case "Pink":
            colourOutput = "Pink" + colourString;
        break;
        case "Purple":
            colourOutput = "Purple" + colourString;
        break;
        default:
        "Please enter the colour exactly as shown on the list";
    }
    document.getElementById("output").innerHTML = colourOutput;
}

function Hello_World_Func(){
    var a = document.getElementsByClassName("Click");
    a[0].innerHTML  = "the text has been changed";
}

function addGraphic(){
    var c = document.getElementById("ID_Name");
    var ctx = c.getContext("2d");

    // Create Gradient
    const my_gradient = ctx.createLinearGradient(0, 0, 500, 250);
    my_gradient.addColorStop(0, "black");
    my_gradient.addColorStop(0.5, "red");
    my_gradient.addColorStop(1, "white");

    // Fill Rectangle
    ctx.fillStyle = my_gradient;
    ctx.fillRect(0, 0, 500, 250);

    ctx.beginPath();
    ctx.arc(400, 125, 60, 0, 2 * Math.PI);
    ctx.stroke();
}