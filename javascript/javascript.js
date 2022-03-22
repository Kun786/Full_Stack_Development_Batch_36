// const ProcessData = (ObjectValue) => {
//         let Name = "My Name Is " + ObjectValue.Name;
//         let Age = "My Age Is " + ObjectValue.Age;
//         let IdNumber = "My IdNumber Is " + ObjectValue.IdNumber;
//         let FatherName = "My Name Is " + ObjectValue.FatherName;

//         console.log(Name,'\n',Age,'\n',IdNumber,'\n',FatherName)
// }

// let UserDetails = {
//     Name:'Hussain',
//     Age:22,
//     IdNumber:12345678,
//     FatherName:"Ali"
// }

// ProcessData(UserDetails);


const Table = (TableNumber) => {
    for (let start = 1; start<=10; start++){
        let Result = 0;
        Result = TableNumber* start
        console.log(TableNumber + `x ${start} =` + Result);
    }
}

Table(8);

let number = 8;

console.log(`My age is ${number}`);





