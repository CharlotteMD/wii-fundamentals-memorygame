console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];


var checkForMatch = function() {

if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You've found a match!");
}
else 
{
alert("Sorry, try again.");
}

};

var flipCard = function(cardID) {

cardsInPlay.push(cards[cardID]);

	console.log("You picked " + cards[cardID]);

if(cardsInPlay.length === 2) {
	checkForMatch();
}
}

flipCard(0);
	flipCard(2);







/* Could you use truthys/falseys here?



/*
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/