function Letter(value) {
//     A string value to store the underlying character for the letter
    this.character = value;
//     A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
//     A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.check = function () {
        if (!this.guessed) {
            return "_"
        } else {
            return this.character
        }
    }
//     A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.guess = function (char) {
        if (this.character === char) {
            this.guessed = true
        }
    }
}


var words = [];
var
var exampleLetter = new Letter("s")
var exampleTwo = new Letter("B")
console.log(exampleLetter.check())
console.log(exampleTwo.character)
console.log(exampleLetter.guess("i"))
module.exports = Letter;