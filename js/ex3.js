const travelingInfo = 
    {
        name:"Vandana",
        countries:[
            {
                name:"US",
                year: 2020
            },
            {
                name:"British Columbia",
                year: 2019
            },
            {
                name:"India",
                year: 2019
            },
            {
                name:"US",
                year:2018
            }
        ],
    };

fetch("https://thejsway-server.herokuapp.com/api/countries",{
    method:"POST",
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    },
    body: JSON.stringify(travelingInfo)
})
.then(response=>response.text())
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.error(err.message);
});