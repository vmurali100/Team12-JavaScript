var users = []
function getAllUsersFromServer(){
    var getUsers = new XMLHttpRequest()
    getUsers.onreadystatechange = function(){
        if(getUsers.readyState == 4 && getUsers.status == 200){
            users = JSON.parse(getUsers.response);
            console.log(users)

            displayUsers(users)
        }
    }

    getUsers.open("GET","http://localhost:3000/users");
    getUsers.send()
}

function displayUsers(users){
    document.querySelector("tbody").innerHTML = ""
    users.forEach((user,i)=>{
        var myTr = document.createElement("tr")
        for(a in user){
            var myTd = document.createElement("td");
            myTd.innerHTML = user[a]
            myTr.appendChild(myTd)
        }

        var editTd = document.createElement("td");
        var editButton = document.createElement("button")
        editButton.setAttribute("onclick","editUser("+i+")")
        editButton.innerHTML = "EDIT"
        editTd.appendChild(editButton);
        myTr.appendChild(editTd)
        
        var deleteTd = document.createElement("td")
        var deleteButton = document.createElement("button")
        deleteButton.setAttribute("onclick","deleteUser("+i+")")
        deleteButton.innerHTML = "DELETE";
        deleteTd.appendChild(deleteButton);
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    })
}
getAllUsersFromServer()