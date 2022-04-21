let UserData = JSON.parse(localStorage.getItem('user-object'));

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
});