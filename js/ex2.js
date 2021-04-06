const lookupElem = ()=>{
    const inputElement = document.getElementById("username");
    const userName = inputElement.value;

    fetch("https://api.github.com/users/" + userName)
        .then(response=>response.json())
        .then(display=>{

            const pElement=document.createElement("p");
            const imgElement=document.createElement("img");
            imgElement.width = 200;
            imgElement.src=display.avatar_url;
            pElement.appendChild(imgElement);

            const displayInfo=document.getElementById("userinfo")
            displayInfo.innerHTML="";
    
            // 1st Row
            const trElement1=document.createElement("tr");
            trElement1.innerHTML=`<td>Name</td><td>${display.name}</td>`;
            // 2nd Row
            const trElement2=document.createElement("tr");
            trElement2.innerHTML=`<td>Blog</td><td>${display.blog}</td>`;
            // 3rd Row
            const trElement3=document.createElement("tr");
            trElement3.innerHTML=`<td>Created</td><td>${display.created_at}</td>`;
            
            //creating Table Element
            const tableElement=document.createElement("table");
            tableElement.id = "userDetail"
            tableElement.appendChild(trElement1);
            tableElement.appendChild(trElement2);
            tableElement.appendChild(trElement3);

            displayInfo.appendChild(pElement);
            displayInfo.appendChild(tableElement);
        })

        .catch(err=>{
            console.error(err.message);
        })
}
document.getElementById("lookup").addEventListener("click",lookupElem);
