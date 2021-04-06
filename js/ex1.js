
fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
    .then(response => response.json())
    .then(paintingInfo => {
        const paintingList = document.getElementById("paintings");
        paintingInfo.forEach(painting => {
            const trElement = document.createElement("tr");
            const tdElement1 = document.createElement("td");
            tdElement1.textContent = painting.name;
            
            const tdElement2 = document.createElement("td");
            tdElement2.textContent = painting.year;
            
            const tdElement3 = document.createElement("td");
            tdElement3.textContent = painting.artist;
            
            trElement.appendChild(tdElement1);
            trElement.appendChild(tdElement2);
            trElement.appendChild(tdElement3);
            
            paintingList.appendChild(trElement);
        });
    })
    .catch(err => {
        console.error(err.message);
    });