let UserData = JSON.parse(localStorage.getItem('user-object'));

UserData.forEach((element, i) => {
    let DivToShow = document.querySelector('.table-data');
    let TableData = document.createElement('td');
    TableData.appendChild(document.createTextNode(`${element.Name}`));
    DivToShow.appendChild(TableData);
});