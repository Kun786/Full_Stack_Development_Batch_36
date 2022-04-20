let SignInUser = () => {
    try {
        // Step 1 : Yar database say data get 
       
        //Tareeka 1 or Method 1 to get Local-Storage
        // let UserDataMethod1 = JSON.parse(localStorage.getItem('user-object'));
        // console.log(UserDataMethod1);

        //Tareeka 2 or Method 2 to get Local-Storgae
        let UserDataMethod2 = localStorage.getItem('user-object');
        let ParsedData = JSON.parse(UserDataMethod2);
        console.log(ParsedData);
    } catch (error) {
        console.log(error.message);
    }
}


