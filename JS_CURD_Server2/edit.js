var gIndex = null
function editUser(i){
    gIndex = i;
    document.getElementById("actname").value=users[i].ActionName
    document.getElementById("email").value=users[i].Email
    document.getElementById("pass").value=users[i].Password
    document.getElementById("fname").value=users[i].FirstName
    document.getElementById("lname").value=users[i].LastName
    document.getElementById("disname").value=users[i].DisplayName
    document.getElementById("website").value=users[i].Website
    document.getElementById("role").value=users[i].UserRole

    document.getElementById("updateBtn").style.display="block"
    document.getElementById("createBtn").style.display="none"
}

function updateUser(){
    var user = {
        ActionName: document.getElementById("actname").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("pass").value,
        FirstName: document.getElementById("fname").value,
        LastName: document.getElementById("lname").value,
        DisplayName: document.getElementById("disname").value,
        Website: document.getElementById("website").value,
        UserRole: document.getElementById("role").value,
    }

    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if(sendInfo.readyState == 4 && sendInfo.status == 201){
            console.log("User Updated Successfully")
            getAllUsersFromServer()
        }
    }

    sendInfo.open("PUT","http://localhost:3000/users/"+users[gIndex].id);
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user))
}