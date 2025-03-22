// variables declaration 

var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

let guess; 
let hits = 0;
let guesses = 0;

let isSunk = false ; 


while (isSunk == false) {
    guess = prompt("Guess number 0-6 (Enter number 0-6)");

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
                alert("Battleship Sank!")
            }
        }
        else{
            alert("Miss!")

        }
    }
}


var stats = "You sank the battleship using: " + guesses + "guesses " + "with the accuracy of: " + (3 / guesses);

alert(stats);

