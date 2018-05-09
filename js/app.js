/*
 * 0 -Create a list that holds all of my cards
 */
const body=document.getElementsByTagName('body');
let cards=document.querySelectorAll('.card');
 // creates a Nodelist that contains all the cards'classes and store it in a variable// 
const cardArray=[]; // creates a variable array to store the cards of the Nodelist into an array
const oldCards=$('.deck').children();
const deck=$('.deck')

cards.forEach(function(card){ // runs the function that turns the Nodelist into an array 
    cardArray.push(card); 
});



/*
 * 0.1 Display the cards on the page
* the cards should be all hidden 
*/

 
// Replaces the new cards with the values of the shuffled array
//function setCardsToHidden (){
//  for (let i = 0; i < cards.length; i++) {
//cards[i]=cardArray[i];// replaces the cards of the initial deck with the ones of the shuffled array
//cards[i].classList.remove("show", "open", "match", "disabled");// Lets the game start with all cards hidden
//}
//};

//test OK
function removeExistingCards (){
	oldCards.remove();
}

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

//test ok
function appendNewCards(){
deck.append(cardArray)
}

// test ok
function setCardsToHidden (){
cardArray.forEach(function(card){
card.classList.remove("show", "open", "match", "disabled");// Lets the game start with all cards hidden
});
}

// test OK - lets all cards hidden at the beginning of the game 
body.onload= restartGame();

//test ok
function restartGame () {
	removeExistingCards();
  	shuffle(cardArray);
  	appendNewCards();
  	setCardsToHidden(cards);
}

function playAgain(){
	restartGame ();
	closeModal ();
}

/*
*When a card is clicked, shows the other side of the card
*
*/
let clickedCardArray=[];//creates an empty array; to store the clicked cards. I use let instead of const, otherwise I will not be able to empty it by resetting its value. 
let matchedCardsArray=[];// /creates an empty array; to store the matched cards.
let arrayLength=clickedCardArray.length
const modal = document.getElementById('myModal');


// function that shows the cards and their symbols 
 function cardIsClicked (){
       this.classList.toggle('open'); // changes the background color of the card from black to blue 
       this.classList.toggle('show'); // make the symbols show
       clickedCardArray.push(this); // stores the value of the clicked cards in an array
	};

// function that compares cards values - with nested if, to make sure that function executes when the ClickedCardArray has 2 items, innerhtml property replaced by lastElementChild to identify cards, and a setTimeoutfunction, to have the opportunity to see the cards toggling
function manageClickedCards (){

if (clickedCardArray.length === 1) { // initializes the timer once the first card is clicked
	start=new Date();
}	

else if (clickedCardArray.length === 2) 
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
      // function that is making the pop-up show at the end of the game 
      if (matchedCardsArray.length===16){
      end=new Date();
      document.getElementById("totalTime").innerHTML = timeSpent();
      modal.style.display = "block";
      }
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



// function that is closing the pop up
 function closeModal() { // When the user clicks on button, closes the modal
    modal.style.display = "none";
}

// test
if (matchedCardsArray.length===16){
	console.log('test')
}


//test chrono

var start=0;
var end=0;
var diff=0;

function timeSpent(){
//	diff=end-start;
	diff = new Date(end-start);
	var sec = diff.getSeconds();
	var min = diff.getMinutes();
	return ""+min+" min "+sec+" sec";
}

