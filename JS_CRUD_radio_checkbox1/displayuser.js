function displayUser(users){
    document.querySelector("tbody").innerHTML=""
    users.forEach((user,i)=>{
        var tr1=document.createElement("tr");
        for (a in user){
            var td1=document.createElement("td")
            td1.innerHTML=user[a]
            tr1.appendChild(td1)
        }
        var editTd=document.createElement("td");
        var editBtn=document.createElement("button");
        editBtn.innerHTML="EDit";
        editBtn.setAttribute("onclick","edituser("+i+")")    
        editTd.appendChild(editBtn);
        tr1.appendChild(editTd)


        var Deletetd =document.createElement("td");
        var delButton=document.createElement("button");
        delButton.innerHTML="Delete";
        delButton.setAttribute("onclick","deleteuser("+i+")")
        
        Deletetd.appendChild(delButton);
        tr1.appendChild(Deletetd)

        document.querySelector("tbody").appendChild(tr1)

    })
}