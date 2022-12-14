var gindex =null
function edituser(i){
    gindex =i;
    document.getElementById("fname").value =users[i].fname
        document.getElementById("lname").value =users [i].lname
        document.getElementById("email").value  =users[i].email

        document.getElementById("updateBtn").style.display="block"
        document.getElementById("addBtn").style.display="none"
}


function updateuser(){
    var user ={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value

       
    }
    var sendInfo =new XMLHttpRequest()
    sendInfo.onreadystatechange =function(){
        if(sendInfo.readyState == 4 && sendInfo.status ==201){
            console.log("User Updated Successfully")
            getAllUsersFromServer()
        }
    }
    sendInfo.open("PUT","http://localhost:3000/users"+users[gindex].id);
    sendInfo.setRequestHeader("content-Type","application/json");
    sendInfo.send(JSON.stringify(user))
     
}