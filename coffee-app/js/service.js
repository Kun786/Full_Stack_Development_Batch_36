let UserData = JSON.parse(localStorage.getItem('user-object'));
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
    </tr>
    `
   
    TotalUserLength = (i+1);
});

let TotalUsers = document.querySelector('.TotalUsers');
TotalUsers.innerHTML = `${TotalUserLength}`