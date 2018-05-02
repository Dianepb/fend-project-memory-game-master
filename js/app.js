/*
 * 0 -Create a list that holds all of my cards
 */

const cards=document.querySelectorAll('.card');
 // creates a Nodelist that contains all the cards'classes and store it in a variable// 
const cardArray=[]; // creates a variable array to store the cards of the Nodelist into an array
 cards.forEach(function(card){ // runs the function that turns the Nodelist into an array 
    cardArray.push(card); 
});

/*
 * 0.1 Display the cards on the page
* the cards should be all hidden 
*/

 //   0.1.1- shuffle the list of cards using the provided "shuffle" method below
 
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


// Replaces the new cards with the values of the shuffled array
function setCardsToHidden (){
  for (let i = 0; i < cards.length; i++) {
cards[i]=cardArray[i];// replaces the cards of the initial deck with the ones of the shuffled array
cards[i].classList.remove("show", "open", "match", "disabled");// Lets the game start with all cards hidden
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
let arrayLength=clickedCardArray.length



// function that shows the cards and their symbols 
 function cardIsClicked (){
       this.classList.toggle('open'); // changes the background color of the card from black to blue 
       this.classList.toggle('show'); // make the symbols show
       clickedCardArray.push(this); // stores the value of the clicked cards in an array
	};

/*
* Old function manageClikedCards
*

// function that compares cards values 
function manageClickedCards (){
//	console.log(clickedCardArray);
	let firstClickedcard=clickedCardArray[0].lastElementChild;
	let secondClickedcard=clickedCardArray[1].lastElementChild;
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
}

*/

// function that compares cards values - with nested if, to make sure that function executes when the ClickedCardArray has 2 items, innerhtml property replaced by lastElementChild to identify cards, and a setTimeoutfunction, to have the opportunity to see the cards toggling
function manageClickedCards (){

if (clickedCardArray.length === 2) 
{
    if (clickedCardArray[0].outerHTML!=clickedCardArray[1].outerHTML) {
        setTimeout(function (){
        clickedCardArray[0].classList.toggle('open');
        clickedCardArray[0].classList.toggle('show');
        clickedCardArray[1].classList.toggle('open');
        clickedCardArray[1].classList.toggle('show');
        clickedCardArray = [];// remove all cards from the array, seems to work better than splice method. 
     },500)
     }
    else if (clickedCardArray[0].outerHTML===clickedCardArray[1].outerHTML){
      setTimeout(function (){
      clickedCardArray[0].classList.toggle('match');
      clickedCardArray[1].classList.toggle('match');
      // I should push those cards in a new array 'Matchedcards';
      clickedCardArray.forEach(function(card){
      matchedCardsArray.push(card); 
      clickedCardArray = [];// remove all cards from the array, seems to work better than splice method. 
      });
    },500)
}
}
}

// function that is compiling the other functions, and store them to be invoked when a card is clicked
cardArray.forEach(function(card) {
  card.addEventListener('click',cardIsClicked);
  	card.addEventListener('click',manageClickedCards);
   });

// function that is making the pop-up show at the end of the game 
if (matchedCardsArray.length===16){
  modal.style.display = "block"; // source = https://www.w3schools.com/howto/howto_css_modals.asp
}

// function that is closing the pop up
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
span.onclick = function() { // When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
}