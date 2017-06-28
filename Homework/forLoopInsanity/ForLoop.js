// RULES:
// loops must be encapsulated in a function
// Array can not be hard coded (pass the array to the function)
// When challenge is passed, comment or delete just the function call (dont clutter your console)

// challenge One
// loop through the names array, and print names that being with the letter 'A'
// bonus: Allow your function to accept the Letter, as a parameter



var names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];


for(var i=0; i< names.length; i+=1){
var filterNames = names.filter(function(word) {
    return word[0] === "A";
});

}
//console.log(filterNames)

// challenge Two
// loop through the numbers array, and print numbers greater than 10
// bonus: Allow your function to accept the comparison Number, as a parameter
var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
function myNumbers (arr){
var acceptingNumbers = '';
for(var i =0; i<=arr.length; i+=1){
	if(arr[i] > 10){
		acceptingNumbers += arr[i] + " ";
	}
}
return(acceptingNumbers)
}
//console.log(myNumbers(numbers));


// challenge Three
// loop through the numbers array, and print numbers greater than 10, but less than 50

var acceptingNumbers = '';
function numbersFunction(arr){
for(var i =0; i<=arr.length; i+=1){
	if(arr[i] > 10 && arr[i] <50 && arr[i] % 2 === 1){
		acceptingNumbers += arr[i] + " ";
	}
}return acceptingNumbers;
}
//console.log(numbersFunction(numbers))


// bonus: Only print the odd numbers that meet these conditions

// challenge Four
// loop through the array of random items, and print ONLY Numbers
// bonus: Tell the function to return numbers, or strings, as a parameter
var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];
var AddItems =' ';

function myRandomArray(arr){
	for(i =0; i<arr.length; i+=1){
		if(typeof arr[i]==='number'){
			AddItems += arr[i] + ' ';
		}
	}return AddItems;
}
//console.log(myRandomArray(randomItems));

// challenge Five
// loop through the array of customer objects, and print ONLY their names
// bonus: Print only customer names that begin with the letter 'A'
var customers = [
	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
  {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
];

function myCustomers(arr) {
var CustomerNames =  " ";
for (var i = 0; i < arr.length; i++) {
  if(arr[i].name.charAt(0)=== 'A'){
    CustomerNames += arr[i].name + " ";
  }
}return CustomerNames;
}
//console.log(myCustomers(customers));


// challenge Six
// loop through the array of customers, and print ONLY customers that are 'gold' and 'paid'
// bonus: Return a completely new array that meets these conditions.

function myCustomers2 (arr){
  var CustomerOptions = [];

  for (var i = 0; i < arr.length; i++) {
  if(arr[i].tier === "gold" && arr[i].paid === true){
    var person = {name: arr[i].name, email: arr[i].email, tier: arr[i].tier, paid: arr[i].paid}
    CustomerOptions.push(person);

  }


}return console.log(CustomerOptions);
}
myCustomers2(customers);
