var bird1 = {name:"Pygmy Owl", species: "Owl",gender: "femail",img: ''};
var bird2 = {name: 'Magpie', species: "bird", gender: "male", img:''};

console.log(bird1);
console.log(bird2);

function Bird(name,species,gender,img,predator){
  this.name = name;
  this.species=species;
  this.gender=gender;
  this.img=img;
  this.predator = predator ? true : false;
}

var bird3 = new Bird("Raven","Crazy Bird", "male",'',true);
console.log(bird3);

var bird4 = new Bird("Egale","Bald","female",'');
var bird5 = new Bird("crow","scavenger","male",'');
var bird6 = new Bird("parrot","pirate","male",'');

console.log(bird4,bird5,bird6);

var birds = new Array();
birds.push(bird3,bird4,bird5,bird6);

console.log(birds);

var app = new Vue({
  el: "#app",
  data: {
    title:title,
    birds:birds,
    name:undefined,
    species:undefined,
    gender: undefined,
    img: undefined
  }

});
