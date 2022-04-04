
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
