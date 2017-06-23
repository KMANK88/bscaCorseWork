

function generateDeck(){

var handDelt = [];

  for(var i=1; i<= 52; i+=1){

    handDelt.push(i);

  }return handDelt;
}


function deckMap(deckIn){
    for(var i=0; i<deckIn.length;i+=1){

      var card = ' ';

    if(deckIn[i] <=13){

      deckIn[i]= deckIn[i] + 'C';

    }else if(deckIn[i]<=26){

            //conditions        if true                  or false
        deckIn[i] = (deckIn[i]%13 !==0) ? (deckIn[i]%13) + 'H' : '13H';

    }else if (deckIn[i]<= 39){

    deckIn[i] = (deckIn[i]%13 !==0) ? (deckIn[i]%13) + 'D' : '13D';

  }else if (deckIn[i]<=52){

      deckIn[i] = (deckIn[i]%13 !==0) ? (deckIn[i]%13) + 'S' : '13S';


  }else {

    console.log("To many cards");

    }
  }
return deckIn

}


var deck = generateDeck();

deckMap(deck);
console.log("Mapped deck:" , deck)

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
//console.log(checkArray.length);
