// alert("test");
//
// Create an English to Spanish dictionary. Provide the options below:
//     ```
// Press 1 to list all English to Spanish translations, press 2 to list all Spanish to English translations, press 3 to enter a new English translation, press 4 to enter a new Spanish translation, and press 5 or 'q' to quit.
// ```
// Use an array for the English translation and a different array for the Spanish translation. Make sure both arrays are outside of the main function so it can be accessed anywhere in the program. Each word in the array should corrispond with the same word/index of the other array.
//
//     To work as a group, have one person clone the repo first, include the .gitignore file, push the .gitignore, then the other person clone the repo. Each person should create their own JavaScript file and put them in the index.html file as seen below. The main.js file, shouldn't have large pieces of code in it. It should be comprised of functions. If you want to call a function, make sure it's code is in the JavaScript file ABOVE the one you're calling it in . Example:
//
//     ``` javascript
// <script type="text/javascript" src="person1.js"></script>
// <script type="text/javascript" src="person2.js"></script>
// <script type="text/javascript" src="main.js"></script>
// ```
//
// ### Challenge
// Create a sixth option that will search for an English word and give you the Spanish translation. It should work by entering the entire word, not a piece of the word (that will make it more difficult).

function kandice() {
    alert("Welcome to the Dictionary");
    let userInput = prompt(`Press 
1. for English to Spanish 
2. for Spanish to English 
3. Enter an English word add to dictionary
4. Enter a Spanish word to add to dictionary
5. or "q" quit`);
}

kandice();







let spanishArray = ["rosa", "rojo", "verde", "azul", "amarillo"];
let englishArray = ['pink', 'red', 'green', 'blue', 'yellow'];




spanishArray.forEach(function (EachNameS)
{
    console.log(EachNameS + " is the spanish word for" + englishArray)
});
console.log(spanishArray);



englishArray.forEach(function (EachNameE)
{
    console.log("This is the English name for " + EachNameE)
});
console.log(englishArray);

// function jessTest() {
//     // let userInput;
//     while (userInput !== 'q' || '5')
//     {
//         // userInput = prompt("Press 1 to list English to Spanish Translation. Press 2 to list Spanish to English Translation. Press 3 to enter a new English Translation. Press 4 to enter new English Translation. Press 5 or Q to Quit");
//
//         if (userInput === '1') {
//             alert("");
//         } else if (userInput === '2') {
//             alert();
//         } else if (userInput === '3') {
//             alert();
//         } else if (userInput === "4") {
//
//             alert();
//         } else {
//             alert("Goodbye");
//         }
//     }
//
// }
// jessTest();

