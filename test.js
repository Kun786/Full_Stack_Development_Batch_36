//Test Solution 

//Question No 1

const HumanBeing = {
    Name:'xyz',
    Age:8,
    Skills:'abc',
    Nationality:"Pakistani"
}

const ProcessHumanData = (HumanDetails) => {
    let Name = `My name is ${HumanDetails.Name}`;
    let Age = `My name is ${HumanDetails.Age}`;
    let Skills = `My name is ${HumanDetails.Skills}`;
    let Nationality = `My name is ${HumanDetails.Nationality}`;
    console.log(Name,Age,Skills,Nationality);
}


//Question No 1


//Question No 2

const Table = (TableNuber) => {
    let a = [1,2,3,4,5,6,7,8,9,10];
    // for(let i=1;i<=10;i++){
    //     if(i%2 === 0){
    //         console.log(i);
    //     }
    // }
    const NewArray = a.filter(key => {
         key%2==0
    })
    console.log(`Hi+${NewArray}`);
}


Table();
//Question No 2



function NormalFunction(){return 100}



//Swaping two Strings without third variable
const Swap = () =>{
    // let a = 8;
    // let b = 12;
    // [a,b]=[b,a]; // Yahan main Es6 ka feature Destructuring Assignment Array Matching Use kar raha hoon
    // console.log(a,b);
    let a = 8;
    let b = 10;
    let tempo;
    tempo = a; // tempo value 8
    a = b; // a value 10
    b = tempo;
    console.log(a,b);
}
Swap();
//Swaping two Strings without third variable

// Reverse a String Using Recursion
const ReverseString = (str) => {
    if (str === "") {
        return "";
    } else {
        return ReverseString(str.substr(1)) + str.charAt(0); // Yeh wo Recursive method hai jo string reverse kar raha hai
    }
}

// console.log(ReverseString('IMRAN'));
// Reverse a String Using Recursion

//Swap Two INtegers Without Temporary Variable
const SwapIntegers = () =>{
    let a = 8;
    let b = 11;
    [a,b]=[b,a]; // Yahan main Es6 ka feature Destructuring Assignment Array Matching Use kar raha hoon Jo swap kar rahi hai
    console.log(a,b);
}
SwapIntegers();
//Swap Two INtegers Without Temporary Variable


//Nth LArgest Element in Array
const largestElements = (numbers) => {
    
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        let elements = numbers[i];
        if (elements > largest) {
            largest = elements;
        }
    }
    return largest;
}
const numbers = [2, 3, 4, 8, 12, 2, 4];
// console.log(largestElements(numbers));
//Output: 8
//Nth LArgest Element in Array

const check = async (req, res) => {
    const a = await functionOne().then(result => {
        console.log(result);
        return result;
    }).error(error => {
        console.log(error);
        return error;
    })

    const b = await functionOne().then(result => {
        console.log(result);
        return result;
    }).error(error => {
        console.log(error)
        return error;
    })
}





const Bind = () => {
    // let Email = EmailFromInput;
    // let Password = PasswordFromInput;

    // let UserObject = {
    //     Email:Email,
    //     Password:Password
    // }
    // let Users = []
    // Users.push(UserObject);

    // now send this data to backend

}



// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);



const checkPassCode = (token) => {
    // if(token === 'yes'){
    //     console.log('Please Enter');
    // }else if(token === null){
    //     console.log('Please provide an argument');
    // }else{
    //     console.log('You are not authorized');
    // }
 
}

checkPassCode(2);