let SignInUser = () => {
    try {
        let Email = document.querySelector('.Email').value;
        let Password = document.querySelector('.Password').value;

        // Step 1 : Yar database say data get 
       
        //Tareeka 1 or Method 1 to get Local-Storage
        // let UserDataMethod1 = JSON.parse(localStorage.getItem('user-object'));
        // console.log(UserDataMethod1);

        //Tareeka 2 or Method 2 to get Local-Storgae
        let UserDataMethod2 = localStorage.getItem('user-object');
        let ParsedData = JSON.parse(UserDataMethod2);
        
        ParsedData.some(Objects => {
            
            // yar yahan check karo agar to input say email aa raha hai agar to wo object k email say mill jae
            // to kaya user-dashboard pay janay do warna alert kro incorrect email
            if(Objects.Email === Email && Objects.Password===Password){
                window.open('user-dashboard.html',"_self");
            }
            if(Objects.Email !== Email){
                console.log(Email);
            }   
            return
        });
    } catch (error) {
        console.log(error.message);
    }
}


