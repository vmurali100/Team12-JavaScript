function displayUsers(custo){
    document.querySelector("tbody").innerHTML=""
    custo.forEach((user,i)=>{
        var tr1=document.createElement("tr");
        for (a in user){
            var td1=document.createElement("td")
            td1.innerHTML=user[a]
            tr1.appendChild(td1)
        }
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.setAttribute("onclick","edituser("+i+")")
        editTd.appendChild(editBtn);
        tr1.appendChild(editTd)

        var delTd = document.createElement("td");
        var delButton = document.createElement("button");

        delButton.innerHTML = "Delete";
        delButton.setAttribute("onclick","deleteUser("+i+")")
        delTd.appendChild(delButton);
        tr1.appendChild(delTd)
        document.querySelector("tbody").appendChild(tr1)
    })
}