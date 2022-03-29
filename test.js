//Test Solution 

//Question No 1

const HumanBeing = {
    Name:'xyz',
    Age:8,
    Skills:'abc',
    Nationality:"Pakistani"
}

const ProcessHumanData = (HumanDetails) => {
    let Name = `My name is ${HumanDetails.Name}`;
    let Age = `My name is ${HumanDetails.Age}`;
    let Skills = `My name is ${HumanDetails.Skills}`;
    let Nationality = `My name is ${HumanDetails.Nationality}`;
    console.log(Name,Age,Skills,Nationality);
}

ProcessHumanData(HumanBeing);

//Question No 1


//Question No 2

const Table = (TableNuber) => {

    for(let i=1;i<=10;i++){
        console.log(`${TableNuber} x ${i} = ${TableNuber}`)
    }
}

Table();
//Question No 2

