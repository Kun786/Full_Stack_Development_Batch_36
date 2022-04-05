
let ABC = () => {
    try {
        
        let SelectedObject = document.querySelector('h1');
        SelectedObject.innerHTML="Hi"
        SelectedObject.style.border = "1px solid black";
        
    } catch (error) {
        alert(error);
    }
}

let ChangeImage = () => {
    try {
        let SelectedObject = document.querySelector('.FirstImage');
        let Element = document.createElement('h1');
        let InnerHtml = document.createTextNode('kjashdkjas');
        Element.appendChild(InnerHtml)
        SelectedObject.appendChild(Element);

    } catch (error) {
        alert(error);
    }
}

let AllElements = document.querySelectorAll('h1');
let Object = {
    Name:'abc',
    Age:8
}
// console.log(typeof(AllElements));
// for ( let properties in Object ) {
//     console.log(`${properties}: ${Object[properties]}`);
// }

AllElements.forEach((elements) => {
    console.log(elements.innerHTML)
})
console.log(AllElements[2]);