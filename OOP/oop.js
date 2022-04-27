function Human(name,age,heigth){
    this.name = name,
    this.age = age,
    this.heigth = heigth
}

let Ali = new Human('ALI',22,18);
console.log(Ali);
let Amir = new Human('Amir',25,35);
console.log(Amir);

// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

let Bird = function(name,color){
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird('Alexis','Black');
console.log(crow);
console.log(crow instanceof Bird);

let canary = {
    name:'Mildred',
    color:'yellor',
    numLegs:2
}
console.log(canary);
console.log(canary instanceof Bird);



//hasOwnProperty this will tell you that a object which is the instance of a constructor will havs seoerate copy of the 
// properties

function Bird2(name){
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird2("Donald");
let canary2 = new Bird2("Tweety");

let ownProps = [];

for ( let property in duck ){
    if(duck.hasOwnProperty(property)){
        ownProps.push(property);
    }
}

console.log(ownProps);



const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false


function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 2;
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");


  class insaan {
      name;
      constructor(InputName){
          this.name = InputName
      };
      MyName(){
          return `My name is ${this.name}`
      }
  }

  insaan.prototype.fuel = 'food';
  let Hassan = new insaan('Hassan');
  let MyName = Hassan.MyName();
  console.log(MyName);
  console.log(Hassan)