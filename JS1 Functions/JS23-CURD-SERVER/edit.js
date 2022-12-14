var gIndex = null
function editUser(i){
    gIndex = i;
    document.getElementById("fname").value = users[i].fname
    document.getElementById("lname").value = users[i].lname
    document.getElementById("adress").value =users[i].adress
    document.getElementById("city").value =users[i].city
    document.getElementById("pincode").value =users[i].pincode
    document.getElementById("phonenumber").value =users[i].phonenumber

    document.getElementById("updateBtn").style.display="block"
    document.getElementById("addBtn").style.display="none"
}

function updateUser(){
    var user = {
        fname:document.getElementById("fname").value ,
        lname:document.getElementById("lname").value,
        adress:document.getElementById("adress").value,
        city:document.getElementById("city").value,
        pincode:document.getElementById("pincode").value,
       phonenumber:document.getElementById("phonenumber").value

    
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