const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);
let Value1;
let Value2;
let Value3;
let Value4;
let Result = 0; 


let GetButton1value = () => {
    try {
        Value1 = $('.value1').innerHTML;
        let GetInput = $('.one');
        GetInput.placeholder = Value1
    } catch (error) {
        console.log(error.message)
    }
}

let GetButton2value = () => {
    try {
        Value2 = $('.value2').innerHTML;
        let GetInput = $('.two');
        GetInput.placeholder = Value2
    } catch (error) {
        console.log(error.message)
    }
}

let GetButton3value = () => {
    try {
        Value3 = $('.value3').innerHTML;
        let GetInput = $('.three');
        GetInput.placeholder = Value3
    } catch (error) {
        console.log(error.message)
    }
}

let GetButton4value = () => {
    try {
        Value4 = $('.value4').innerHTML
        let GetInput = $('.four');
        GetInput.placeholder = Value4
    } catch (error) {
        console.log(error.message)
    }
}

let CalculateThePrice = () => {
    try {
        if(Value1 !== undefined){
            Result = Result +Value1
        }
        if(Value2 !== undefined){
            Result = Result +Value1
        }
        if(Value3 !== undefined){
            Result = Result +Value1
        }
        if(Value4 !== undefined){
            Result = Result +Value1
        }
        let ResultDiv = $('.Result');
        ResultDiv.innerHTML=`
        <h1>Hi How are you</h1>
        <h2>kjahsd</h2>
        `

    } catch (error) {
        console.log(error.message)
    }
}