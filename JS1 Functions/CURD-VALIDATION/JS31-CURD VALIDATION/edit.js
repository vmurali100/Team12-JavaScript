var gIndex=null
function edituser(i){
    gIndex=i;
    document.getElementById("fname").value=users[i].fname
    document.getElementById("lname").value=users[i].lname

    document.getElementById("updateBtn").style.display="block"
    document.getElementById("addBtn").style.display ="none"
}



function updateuser(){
   
        var user ={
            fname:document.getElementById("fname").value,
            lname:document.getElementById("lname").value
        }
        var sendInfo =new XMLHttpRequest()
        sendInfo.onreadystatechange =function(){
            if(sendInfo.readyState ==4 && sendInfo.status  ==201){
                console.log(" User Updated")
                getAllUsersFromServer()
            }
        }
        sendInfo.open("PUT","http://localhost:3000/persons/"+users[gIndex].id);
        sendInfo.setRequestHeader("Content-Type","application/json");
        sendInfo.send(JSON.stringify(user))
       
    }
