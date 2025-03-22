var location1 = 2;
var location2 = 3;
var location3 = 4;

var guess; 
var hits = 0;
var guesses = 0;

var isSunk = false ; 
 
while (isSunk == false) {
    guess = prompt("Guess a Number (Enter number 0-6)");

    if (guess <0 || guess >6 ){
        alert("Please enter a valid number!")
    } 
    else{
        guesses += 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit!")

            if (hits == 3) {
                isSunk = true;
                alert("Battleship Sank")
            }
        }
        else{
            alert("Miss!")

        }
    }
}


var stats = "You Sank the Battleship at: " + guesses + "guesses " + "with the accuracy of: " + (3 / guesses);

alert(stats);


