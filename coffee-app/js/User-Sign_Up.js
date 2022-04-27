const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);

let UserObject = {
    Name: String,
    House: String,
    Email: String,
    Phone: Number,
    Coffee: String
}

let SubmitUserDetails = () => {
    try {
        let EmptyArray = [];
        let Name = $('.Name').value;
        let House = $('.House').value;
        let Email = $('.Email').value;
        let Phone = $('.Phone').value;
        let Coffee = document.querySelector('.radio:checked').value; // input[name="flexRadioDefault"]
        let Password = $('.password').value;

        

        
        UserObject.Name = Name;
        UserObject.House = House;
        UserObject.Email = Email;
        UserObject.Phone = Phone;
        UserObject.Coffee = Coffee;
        UserObject.Password = Password;
        
       

        
        

        let GetData = JSON.parse(localStorage.getItem('user-object'));
       
        if (GetData === null) {
            EmptyArray.push(UserObject);
            localStorage.setItem('user-object', JSON.stringify(EmptyArray));
        } else {
            EmptyArray.push(UserObject);
           let Data =  GetData.forEach((Object) => {
                console.log('yes');
                console.log(Object);
                EmptyArray.push(Object);
            })
            localStorage.setItem('user-object', JSON.stringify(EmptyArray));
        }
        // Database.Document.save(UserObject)
        // localStorage.setItem('user-object',JSON.stringify(GetData));
        alert('Sign-Up Successfuly')
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

// let GetData = JSON.parse(localStorage.getItem('user-object'));
// let Result  = $('.Result');
// Result.innerHTML = `
// <h1>
// Name:${GetData.Name}<br>
// Email:${GetData.Email}<br>
// House:${GetData.House}<br>
// AccessCard:${GetData.Token}<br>

// </h1>
// `


// {
//     Name:kjahkjsah
// }

// JSON = Javscript Object Notation

// {
//     "Name":"kjhaskd"
// }


let SplitString = () => {
    try {
        let String = "Bearer 98182hedub197h12e9u88dh1297ey87g87";
        let SplitString = String.split(" ");
        let RealToken = SplitString[1];
        console.log(RealToken);
        console.log(SplitString);
    } catch (error) {
        console.log(error.message);
    }
}

let RandomTokenGenerator = () => {
    try {
        let Random = (Math.random()) * 100;
        let RandomWhole = Math.floor(Random);
        // let RealToken = Random.toString().split('.');
        // console.log(RealToken);
        // RealToken = RealToken[1];
        // console.log(RealToken);
        console.log(Random);
        console.log(RandomWhole);
    } catch (error) {
        console.log(error.message);
    }
}

let SubString = () => {
    try {
        // let RandomKey = Math.random().toString();
        RandomKey = "0.908798798"
        RandomKey = RandomKey.substring(2)
        console.log(RandomKey);
    } catch (error) {
        console.log(error.message);
    }
}





