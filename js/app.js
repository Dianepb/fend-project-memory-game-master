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

shuffle(cardArray);


//for (let i = 0; i < cards.length; i++) {
//cards[i].parentNode.removeChild(cards[i]);
//}

for (let i = 0; i < cards.length; i++) {
	cards[i].innerHTML=cardArray[i].innerHTML
}

/*
 *   0.1.2 Assign the shuffled classes to the li elements of the list : select those elements and change the classes 
 *   - loop through each card and create its HTML
*/
//cardsarray.forEach(card){
//for (let i = 0; i < cards.length; i++){
//   cards.appendChild(cardArray[i])
//}




 /*
 *   - add each card's HTML to the page // there I think I can apply the appendChild method 
*/

//var newCard = forEach cardArray function (){
//    cards.appendChild (newCard)
//}


// 2. Add an event listener to the list
// I can not see how to d this 

//test=$('.card')
// returns 
//w.fn.init(16) [li.card, li.card, li.card.match, li.card, li.card, li.card.match, li.card, li.card, li.card, li.card, li.card, li.card, li.card.open.show, li.card, li.card, li.card, prevObject: w.fn.init(1)]
/* test.addEventListener('click',function(){
*    console.log("a button was clicked");
*});
*/
// The code above doesn't work....




// 3. Store the first element clicked in a variable and start the counter with this first click, a recursive function (one calling itself) will do this with setTimeout.

//let firstCardClicked=card.nodevalue



 // 4.Flip the card to be visible (css animation, assign a new class to the clicked card).

//Toggle class

// 5.  Second click and store this element as well in another variable.

//let firstCardClicked="";

// 6. Flip the card 
//Toggle class

// 7. Check those variables for match class
//if class===class  





 
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
