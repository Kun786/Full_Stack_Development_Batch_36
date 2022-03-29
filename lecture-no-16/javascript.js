const squareNum = x => x*x;
console.log(squareNum(2));

const sayHi = _ => console.log('hi');
sayHi();


let obj = {
    Name:'xyz',
    ShowName : () => {
        console.log(`My Name is`+ this.Name);
    }
}

obj.ShowName();

function Ar(){ 100 }
const ar = ()=> 100;
Ar();
console.log(Ar());

// function Car(Name){
//     this.brand = Name;
// }

// const Car = (Name) => {
//     this.brand = Name;
// }

// let carData = new Car('KIA');
// console.log(carData);
