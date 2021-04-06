
document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
    
    const formData = new FormData(e.target);

    
    const tableElem = document.createElement("table");
    tableElem.id = "DataEnteredTable";

    //create row element for header
    const headerTrElem = document.createElement("tr");
    //create th element and add value
    const keyThElem = document.createElement("th");
    keyThElem.textContent = "Key";
    keyThElem.id = "heading";

    const valueThElem = document.createElement("th");
    valueThElem.textContent = "Value";
    valueThElem.id = "heading";

    headerTrElem.appendChild(keyThElem);
    headerTrElem.appendChild(valueThElem);
    
    //Creating Name Row Element
    const nameTrElem = document.createElement("tr");

    const nameKeyElem = document.createElement("td");
    nameKeyElem.textContent = "name";

    const nameValueElem = document.createElement("td");
    nameValueElem.textContent = formData.get("name");

    nameTrElem.appendChild(nameKeyElem);
    nameTrElem.appendChild(nameValueElem);
    
    //Creating Email Row Element
    const emailTrElem = document.createElement("tr");

    const emailKeyElem = document.createElement("td");
    emailKeyElem.textContent = "email";

    const emailValueElem = document.createElement("td");
    emailValueElem.textContent = formData.get("email");

    emailTrElem.appendChild(emailKeyElem);
    emailTrElem.appendChild(emailValueElem);
    
    //Creating Payment Row Element
    const paymentTrElem = document.createElement("tr");

    const paymentKeyElem = document.createElement("td");
    paymentKeyElem.textContent = "payment";

    const paymentValueElem = document.createElement("td");
    paymentValueElem.textContent = document.querySelector('input[name="payment"]').value;

    paymentTrElem.appendChild(paymentKeyElem);
    paymentTrElem.appendChild(paymentValueElem);
    
    //Creating Promotion Row Element
    const promoTrElem = document.createElement("tr");

    const promoKeyElem = document.createElement("td");
    promoKeyElem.textContent = "promotion";

    const promoValueElem = document.createElement("td");
    var promoValue = formData.get("signup");
    if(promoValue == null) {
        promoValue = "on";
    }
    promoValueElem.textContent = promoValue;
    
    promoTrElem.appendChild(promoKeyElem);
    promoTrElem.appendChild(promoValueElem);

    //Creating Location Row Element
    const locationTrElem = document.createElement("tr");

    const locationKeyElem = document.createElement("td");
    locationKeyElem.textContent = "location";

    const locationValueElem = document.createElement("td");
    locationValueElem.textContent = formData.get("location");
    
    locationTrElem.appendChild(locationKeyElem);
    locationTrElem.appendChild(locationValueElem);
 
    //Appending row elements in the table
    tableElem.appendChild(headerTrElem);
    tableElem.appendChild(nameTrElem);
    tableElem.appendChild(emailTrElem);
    tableElem.appendChild(paymentTrElem);
    tableElem.appendChild(promoTrElem);
    tableElem.appendChild(locationTrElem);

    const divElem = document.getElementById("result");
    divElem.innerHTML = "";
    divElem.appendChild(tableElem);
});
