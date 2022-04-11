const { TemplatePage } = require('./TemplatePage');

let Quantity = 1;
let Result = 0;


let GetValue = () => {
    try {
        let Value = parseInt(document.querySelector('.value').dataset.value);
        // Result = Result+Value;

        Result += Value;
        document.querySelector('span').innerHTML = `Quantity ${Quantity}`;
        document.querySelector('.Result').innerHTML = TemplatePage;
        Quantity++;
    } catch (error) {
        console.log(error.message);
    }
}

document.querySelector('span').innerHTML = `Quantity ${Quantity}`;

