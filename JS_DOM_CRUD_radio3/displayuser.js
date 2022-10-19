function displayUsers(allUsers){
    document.querySelector("tbody").innerHTML=""
    allUsers.forEach((users,i)=>{
        var myTr=document.createElement("tr");
        for(a in users){
            var myTd=document.createElement("td")
            myTd.innerHTML=users[a]
            myTr.appendChild(myTd)
        }
        
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.setAttribute("onclick","editUser("+i+")")
        editTd.appendChild(editBtn);
        myTr.appendChild(editTd)

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");

        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute("onclick","deleteUser("+i+")")
        deleteTd.appendChild(deleteBtn);
        myTr.appendChild(deleteTd)
        document.querySelector("tbody").appendChild(myTr)
    })
}