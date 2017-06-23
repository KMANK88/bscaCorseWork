


function generateDeck(){

var handDelt = [];

  for(var i=1; i<= 52; i+=1){

    handDelt.push(i);
  }return handDelt;
}
var deck = generateDeck();
//console.log(deck);

function shuffle(deckIn) {
  for(var j =0; j<deckIn.length; j+=1){

  var currentCard = deckIn.indexOf(deckIn[j]);
  var swapIndex = deckIn.indexOf(deckIn[Math.floor(Math.random() * deckIn.length)]);
var tempCard = deckIn[currentCard]
  deckIn[currentCard] = deckIn[swapIndex];
  deckIn[swapIndex] = tempCard;
  }
//console.log("Shuffel deck",deckIn)
//console.log("Shuffel deck length", deckIn.length)
return deckIn;
}

 deck = shuffle(deck);

var checkArray = [];

deck.forEach(function(card,index){
  if(deck.indexOf(card) === index){
    checkArray.push(card);
  }
});
console.log(checkArray.length);
