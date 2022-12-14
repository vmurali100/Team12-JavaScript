var gIndex=null
function edituser(i){
    gIndex=i;
    document.getElementById("name").value=users[i].name
    document.getElementById("rollno").value=users[i].rollno
    document.getElementById("class").value=users[i].class
    document.getElementById("school").value=users[i].school

    document.getElementById("updateBtn").style.display="block"
    document.getElementById("addBtn").style.display ="none"
}



function updateuser(){
   
        
    var user = {
        name: document.getElementById("name").value,
        rollno: document.getElementById("rollno").value,
       class: document.getElementById("class").value,
        school: document.getElementById("school").value,

       
    }
    var sendInfo =new XMLHttpRequest()
    sendInfo.onreadystatechange =function(){
        if(sendInfo.readyState ==4 && sendInfo.status  ==201){
            console.log(" User Updated")
            getAllUsersFromServer()
        }
    }
    sendInfo.open("PUT","http://localhost:3000/students/"+users[gIndex].id);
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user))
    
}
