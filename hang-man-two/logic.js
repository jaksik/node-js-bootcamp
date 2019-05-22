var word = require ("./word.js");
var inquirer = require ("inquirer");


var mountains = ["Elbert", "Longs", "Evans", "Pikes", "Shavano", "Uncomphagre"];
var random = Math.floor(Math.random() * mountains.length + 1);
var randomMountain = "";
var letterBlanks = [];
var wordComplete = false;

var wins = 0;
var losses = 0;
var newGame = false;


function playGame() {
    if (!wordComplete) {
        inquirer
            .prompt([
                type: "input",
                message: "Guess a letter between A-Z",
                name: "userInput"
            ])
            .then(function (input) {

            })
    } else {

    }
}

function startGame() {
    randomMountain = "";
    randomMountain = mountains[random];
    console.log(randomMountain);

}