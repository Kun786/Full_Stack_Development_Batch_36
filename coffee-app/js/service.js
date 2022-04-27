let UserData = JSON.parse(localStorage.getItem('user-object'));// Array local-storagr [objs]
let TotalUserLength = 0;

UserData.forEach((element, i) => {
    let DivToShow = document.querySelector('.table-data');
    DivToShow.innerHTML += `
    <tr>
    <td>${i+1}</td>
    <td>${element.Name}</td>
    <td>${element.Email}</td>
    <td>${element.Coffee}</td>
    <td>${element.House}</td>
    <td>${element.Phone}</td>
    <td><button class="btn btn-outline-danger" onclick="DeleteUser('${element.Email}')">Delete</button></td>
    </tr>
    `
   
    TotalUserLength = (i+1);
});

let TotalUsers = document.querySelector('.TotalUsers');
TotalUsers.innerHTML = `${TotalUserLength}`

// NumberArray = [1,2,4,5,6,7]

// NumberArray.forEach(ele => {
//     console.log(ele)
// })

let DeleteUser = (UserEmail) => {
    let NewUserData = UserData.filter((Object) => {
        return !(UserEmail===Object.Email)
    } );
    localStorage.setItem('user-object',JSON.stringify(NewUserData));
}