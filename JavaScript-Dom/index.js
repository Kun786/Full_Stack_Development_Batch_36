

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let ABC = () => {
    try {
        
        let SelectedObject = document.querySelectorAll('h1');
        
        SelectedObject.forEach(Element=>{
            Element.style.border = "1px solid black";
            Element.innerHTML="Hi"
        })
        
    } catch (error) {
        alert(error);
    }
}

let ChangeImage = () => {
    try {
        let SelectedObject = document.querySelector('.FirstImage');
        // let Element = document.createElement('h1');
        // let InnerHtml = document.createTextNode('kjashdkjas');
        // Element.appendChild(InnerHtml)
        // SelectedObject.appendChild(Element);

        let Element = document.createElement('ul');
        let InnerHtml = document.createElement('li');
        let data = document.createTextNode('Hi');

        InnerHtml.appendChild(data);
        Element.appendChild(InnerHtml);
        SelectedObject.appendChild(Element);

    } catch (error) {
        alert(error);
    }
}

// let AllElements = document.querySelectorAll('h1');
// let Object = {
//     Name:'abc',
//     Age:8
// }
// console.log(typeof(AllElements));
// for ( let properties in Object ) {
//     console.log(`${properties}: ${Object[properties]}`);
// }

// let NewArray = Array.from(AllElements);
// console.log(NewArray);
// AllElements.forEach((elements) => {
//     console.log(elements.innerHTML)
// })
// console.log(AllElements[2]);

const h1 = $('h1');
// console.log(h1.innerHTML);

const body = document.body;
// console.log(body);


let Submit = () => {
    try {
        let Email = document.querySelector('.email');
        let Password = document.querySelector('.password');
        let ShowResult = document.querySelector('.result');
        let Result = Email.value + Password.value;
        let CreateElement = document.createElement('h1');
        let CreateElementNode = document.createTextNode(Result);

        CreateElement.appendChild(CreateElementNode);
        ShowResult.appendChild(CreateElement);
    } catch (error) {
        alert(error.message);
    }
}

let Valid = (data) => {
    try {
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}