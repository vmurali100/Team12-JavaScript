vargIndex=null;
function editUser(i){
    gIndex=i;
    document.getElementById("fName").value=users[i].fName
    document.getElementById("lName").value=users[i].lName

    document.getElementById("addBtn").setAttribute("class","mx-5 px-4 btn btn-outline-success d-none")
    document.getElementById("updateBtn").setAttribute("class","mx-5 px-4 btn btn-outline-info")   
}
function updateUser(){
    var user={
        fName:document.getElementById("fName").value,
        lName:document.getElementById("lName").value
    }
    var sendInfo= new XMLHttpRequest();
    sendInfo.onreadystatechange=function(){
        if(sendInfo.readyState==4 && sendInfo.status==201){
            console.log("User Updated Successfully...")
            getAllUsersFromServer()
        }
    }
    sendInfo.open("PUT","http://localhost:3000/users/"+ users[gIndex].id);
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user))
    console.log(user)
}