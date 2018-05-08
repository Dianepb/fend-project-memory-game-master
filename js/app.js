/*
 * 0 -Create a list that holds all of my cards
 */
const body=document.getElementsByTagName('body');
let cards=document.querySelectorAll('.card');
 // creates a Nodelist that contains all the cards'classes and store it in a variable// 
const cardArray=[]; // creates a variable array to store the cards of the Nodelist into an array
 cards.forEach(function(card){ // runs the function that turns the Nodelist into an array 
    cardArray.push(card); 
});


//test
// let cards=document.querySelectorAll('.card');




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

// test
//cards=[];



function restartGame () {
  shuffle(cardArray);
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

if (clickedCardArray.length === 1) { // initializes the timer once the first card is clicked
	chronoStart();
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
      modal.style.display = "block";
      chronoStop();
      }
      clickedCardArray = [];// remove all cards from the array, seems to work better than splice method. 
      });
    },500)
}
}
}

// lets all cards hidden at the beginning of the game 
body.onload= restartGame();

// function that is compiling the other functions, and store them to be invoked when a card is clicked
cardArray.forEach(function(card) {
  card.addEventListener('click',cardIsClicked);
  	card.addEventListener('click',manageClickedCards);
   });



// function that is closing the pop up
 function closeModal() { // When the user clicks on button, closes the modal
    modal.style.display = "none";
}

// function timer (I was largely inspired by this source : https://www.proglogic.com/code/javascript/time/chronometer.php)
var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	start = new Date()
	chrono()
}
function chronoContinue(){
	start = new Date()-diff
	start = new Date(start)
	chrono()
}

function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
}

 if (matchedCardsArray.length===16){
 	function chronoStop(){
	clearTimeout(timerID)
}
 }

function chronoStop(){
	clearTimeout(timerID)
}

if (matchedCardsArray.length===16){
	console.log('test')
}
