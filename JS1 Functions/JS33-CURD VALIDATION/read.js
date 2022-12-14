var users = []
function getAllUsersFromServer() {
    var getusers = new XMLHttpRequest()
    getusers.onreadystatechange = function () {
        if (getusers.readyState == 4 && getusers.status == 200) {
            users = JSON.parse(getusers.response);
            console.log(users)
            displayusers(users)
        }

    }
    getusers.open("GET", "http://localhost:3000/custermers");
    getusers.send()
}

function displayusers(users) {
    document.querySelector("tbody").innerHTML = ""
    users.forEach((user, i) => {
        var myTr = document.createElement("tr")
        for (a in user) {
            var myTd = document.createElement("td")
            myTd.innerHTML = user[a]
            myTr.appendChild(myTd)
        }
        var editTd = document.createElement("td");
        var editButton = document.createElement("Button");
        editButton.setAttribute("onclick","edituser("+i+")")

        editButton.innerHTML = "EDIT"
        editTd.appendChild(editButton);
        myTr.appendChild(editTd)

   
    var deleteTd = document.createElement("td");
    var deleteButton = document.createElement("Button")
    deleteButton.setAttribute("onclick","deleteuser("+i+")")

    deleteButton.innerHTML = "DELETE"
    deleteTd.appendChild(deleteButton);
    myTr.appendChild(deleteTd)



    document.querySelector("tbody").appendChild(myTr)
    });
}
getAllUsersFromServer()