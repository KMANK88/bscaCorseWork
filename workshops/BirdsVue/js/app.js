var bird1 = {name:"Pygmy Owl", species: "Owl",gender: "femail",img: ''};
var bird2 = {name: 'Magpie', species: "bird", gender: "male", img:''};

console.log(bird1);
console.log(bird2);

function Bird(name,species,gender,img){
  this.name = name;
  this.species=species;
  this.gender=gender;
  this.img=img;
}

var bird3 = new Bird("Raven","Crazy Bird", "male",'');
console.log(bird3);
