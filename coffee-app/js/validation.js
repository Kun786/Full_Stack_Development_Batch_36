let Check = () => {
    let NumberChecker = /^[-+]?[0-9]+$/;
	let AlaphabetChecker=/^[a-zA-z]+$/;

    // const regForNumber = new RegExp('^[0-9]+$');
    // const number = /\d/;
    // const re = /ab+c/;

    let GetName = document.querySelector('.name').value;
    let GetAge = document.querySelector('.age').value;
    // if(!value2.match(numbers)){
    //     console.log('Only Numbers Allowed')
    // }
    // console.log(!GetAge.match(number));
    if(!GetName.match(AlaphabetChecker) || !GetAge.match(NumberChecker)){
        console.log(`Please Follow the Rules ${GetName}`);
        return
    }


    // console.log('DataBase Called');
    let UserObject = {
        Name:GetName,
        Age:GetAge
    }
    localStorage.setItem('new-user',JSON.stringify(UserObject))
}