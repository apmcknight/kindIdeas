/* © 2018 by Adam McKnight, All Rights Reserved.*/

function newDeed(){
    // Getting JSON file
    const dataURL = "../assets/database.json";

    $.getJSON(dataURL, function(database){

        // Randomly generates quotes
        var randomNumber = Math.floor(Math.random() * (database.ideas.length));

        // Inserts Random Act into the HTML page
        document.getElementById('kindDeed').innerHTML = database.ideas[randomNumber];
    })
}

function hidePlaceholder(){
    // Hides placeholder text.
    var placeholder = document.getElementById("placeholder");
        if (placeholder.style.display === "none") {
            placeholder.style.display = "none";
        } else {
            placeholder.style.display = "none";
        }
}

module.exports = newDeed;
