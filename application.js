/* © 2018 by Adam McKnight, All Rights Reserved. http://www.adammcknight.co */

// Stores the Kind Ideas
var kind = [
    "Smile at a random person! 😀",
    "Open the door for someone when entering a building.",
    "Pay for the the Coffee or Meal of the person behind you.",
    "Tell someone they look perfect today!",
    "Give someone a $20 bill and walk away.",
    "Leave a bottle of watter inside your mailbox.",
    "After shoping, help someone put the bags in their car.",
    "Close your eyes, and scroll through your contacts. Call the person you land on, and tell them 'You're Worth It!' ",
    "Hug a member of your family",
    "While at the checkout, buy a giftcard; Then give it to someone walking in!"]



function newDeed(){
    // Randomly generates quotes
    var randomNumber = Math.floor(Math.random() * (kind.length));

    // Inserts Random Act into the HTML page
    document.getElementById('kindDeed').innerHTML = kind[randomNumber];
}

function hidePlaceholder(){
    // Hides placeholder text
    var placeholder = document.getElementById("placeholder");
        if (placeholder.style.display === "none") {
            placeholder.style.display = "none";
        } else {
            placeholder.style.display = "none";
        }
}
