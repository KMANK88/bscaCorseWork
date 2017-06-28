function roll(){


console.log("hello");
  return { d1: Math.floor(Math.random() *6 +1),
          d2: Math.floor(Math.random() *6 +1)};
}

function checker (){
  var roll1 =  roll();
  if((roll1.d1 + roll1.d2) === 7 ||(roll1.d1 + roll1.d2) === 11){
    console.log("I win ", roll1.d1,roll1.d2);
  }else {
     console.log("I didnt win Di " + roll1.d1, roll1.d2)
   }
}
    checker();
