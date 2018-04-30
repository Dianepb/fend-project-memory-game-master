/*
 * 0 -Create a list that holds all of my cards
 */

const cards=document.querySelectorAll('.card');
 // creates a Nodelist that contains all the cards'classes and store it in a variable// 
const cardArray=[]; // create a variable array to store the cards of the Nodelist into an array
 cards.forEach(function(card){ // run the function that turns the Nodelist into an array 
    cardArray.push(card); 
});

/*
 * 0.1 Display the cards on the page
// the cards should be all hidden 


 *   0.1.1- shuffle the list of cards using the provided "shuffle" method below
 */


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Udacity instructions : 0.1.2 Assign the shuffled classes to the li elements of the list : select those elements and change the classes 
//  - loop through each card and create its HTML

// Replaces the new cards with the values of the shuffled array
function setCardsToHidden (){
  for (let i = 0; i < cards.length; i++) {
cards[i].innerHTML=cardArray[i].innerHTML;
// Let the game start with all cards hidden
cards[i].classList.remove("show", "open", "match", "disabled");
}
};

function restartGame () {
  shuffle(cardArray);
  setCardsToHidden(cards);

}

/*
*When a card is clicked, shows the other side of the card
*
*/
let clickedCardArray=[];//creates an empty array; to store the clicked cards. I use let instead of const, otherwise I will not be able to empty it by resetting its value. 
let matchedCardsArray=[];// /creates an empty array; to store the matched cards.

function manageClickedCards (){
if (arrayLength === 2 && firstClickedcard!=secondClickedcard) {
  clickedCardArray[0].classList.toggle('open');
  clickedCardArray[0].classList.toggle('show');
  clickedCardArray[1].classList.toggle('open');
  clickedCardArray[1].classList.toggle('show');
  clickedCardArray = [];// remove all cards from the array, seems to work better than splice method. 
}
else if (arrayLength === 2 && firstClickedcard===secondClickedcard){
  clickedCardArray[0].classList.toggle('match');
  clickedCardArray[1].classList.toggle('match');
  // I should push those cards in a new array 'Matchedcards';
  clickedCardArray.forEach(function(card){
  matchedCardsArray.push(card); 
  clickedCardArray = [];// remove all cards from the array, seems to work better than splice method. 
})
}

// Now, I have to store this in a function
 function cardIsClicked (){
    card.addEventListener('click',function(){
       this.classList.toggle('open'); // changes the background color of the card from black to blue 
       this.classList.toggle('show'); // make the symbols show
   });
};
}

// I tought it would make sense to comple all functions and store them to be invoked when a card is clicked

cardArray.forEach(function(card){ // I found this method much easier than the classical one 
  card.addEventListener('click',cardIsClicked);
  card.addEventListener('click',manageClickedCards);
});





// 6. Flip the card 
//Toggle class

// 7. Check those variables for match class
//if class===class  


/*
*
Hourray ! After hours of trying, I eventually made it ! 
Now, when I click on the card, the class 'open' is added, the symbol shows, and the card is added to a new array. 
Also, I'll have to store this in a function, to be called right after the restart game function.  
*
*/
// I tried to wrap it up in a function (line 121)
/*cardArray.forEach(function(card){ // I found this method much easier than the classical one 
 card.addEventListener('click',function(){
      this.classList.toggle('open'); // changes the background color of the card from black to blue 
      this.classList.toggle('show'); // make the symbols show
      clickedCardArray.push(card); // stores the value of the clicked cards in an array. I have to find a way to limit the maxiumum number of holded cards to 2. 
   });
});

//

let arrayLength=clickedCardArray.length
let firstClickedcard=clickedCardArray[0].innerHTML
// 3. Store the first element clicked in a variable and start the counter with this first click, a recursive function (one calling itself) will do this with setTimeout.
let secondClickedcard=clickedCardArray[1].innerHTML
// 5.  Second click and store this element as well in another variable.
// I tried to wrap this up in a function (line 103)
if (arrayLength === 2 && firstClickedcard!=secondClickedcard) {
  clickedCardArray[0].classList.toggle('open');
  clickedCardArray[0].classList.toggle('show');
  clickedCardArray[1].classList.toggle('open');
  clickedCardArray[1].classList.toggle('show');
  clickedCardArray = [];// remove all cards from the array, seems to work better than splice method. 
}
else if (arrayLength === 2 && firstClickedcard===secondClickedcard){
  clickedCardArray[0].classList.toggle('match');
  clickedCardArray[1].classList.toggle('match');
  // I should push those cards in a new array 'Matchedcards';
  clickedCardArray.forEach(function(card){
  matchedCardsArray.push(card); 
  clickedCardArray = [];// remove all cards from the array, seems to work better than splice method. 
}

*/


 
//  13. For the reset button, a button in html with an event listener that calls a function to start the game.
//const endOfGame =document.querySelector('#endOfGame');
//endOfGame.addEventListener('click',function(){
  //  console.log("a button was clicked"); // function to be changed of course. This is just the starting point. 
//});


// The popup can be section in html with display hidden that changes to visible once the matches are 8.


 /* - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
