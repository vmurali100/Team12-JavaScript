var gIndex = null
function editUser(i){
    gIndex = i;
    document.getElementById("rtitle").value =users[i].rtitle
    document.getElementById("email").value =users[i].email
    document.getElementById("password").value =users[i].password
    document.getElementById("rpassword").value =users[i].rpassword
    document.getElementById("uname").value =users[i].uname
    document.getElementById("dname").value = users[i].dname
    document.getElementById("nname").value = users[i].nname

    document.getElementById("fname").value = users[i].fname
    document.getElementById("lname").value = users[i].lname
   
   
    document.getElementById("updateBtn").style.display="block"
    document.getElementById("addBtn").style.display="none"
}

function updateUser(){
    var user = {
        rtitle: document.getElementById("rtitle").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        rpassword: document.getElementById("rpassword").value,
        uname: document.getElementById("uname").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        dname: document.getElementById("dname").value,
        nname: document.getElementById("nname").value
    }

    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if(sendInfo.readyState == 4 && sendInfo.status == 201){
            console.log("User Updated Successfully")
            getAllUsersFromServer()
        }
    }

    sendInfo.open("PUT","http://localhost:3000/users"+users[gIndex].id);
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user))
}