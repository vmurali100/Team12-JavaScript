function displayuser(user){
    document.querySelector("tbody").innerHTML="";
    alluser.forEach((user,i)=>{
        var mytr=document.createElement("tr");
        for(a in user){
            var mytd=document.createElement("td");
            mytd.innerHTML=user[a];
            mytr.appendChild(mytd);
        }
        var edittd=document.createElement("td");
        var editbuttontd=document.createElement("button");
        editbuttontd.innerHTML="edit";
        edittd.appendChild(editbuttontd);
        mytr.appendChild(edittd);
        editbuttontd.setAttribute("onclick","edituser("+i+")");

        var deletetd=document.createElement("td");
        var deletebuttontd=document.createElement("button");
        deletebuttontd.innerHTML="delete";
        deletetd.appendChild(deletebuttontd);
        mytr.appendChild(deletetd);
        deletebuttontd.setAttribute("onclick","deletetuser("+i+")");

        document.querySelector("tbody").appendChild(mytr)


        })
    }


