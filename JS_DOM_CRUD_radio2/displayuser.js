function displayuser(usres){
    document.querySelector("tbody").innerHTML=""
    usres.forEach((user,i)=>{
        var tr1=document.createElement("tr");
        for (a in user){
            var td1=document.createElement("td")
            td1.innerHTML=user[a]
            tr1.appendChild(td1)
        }
        var editTd=document.createElement("td");
        editBtn.setAttribute("onclick","edituser("+i+")")
        var editBtn=document.createElement("button");
        editBtn.innerHTML="EDit";
        editTd.appendChild(editBtn);
        tr1.appendChild(editTd)


        var Deletetd =document.createElement("td");
        delButton.setAttribute("onclick","deleteuser("+i+")")
        var delButton=document.createElement("button");
        delButton.innerHTML="Delete";
        Deletetd.appendChild(delButton);
        tr1.appendChild(Deletetd)

        document.querySelector("tbody").appendChild(tr1)

    })
}