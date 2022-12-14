function adduser(){
    var user ={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value
    }
    var sendInfo =new XMLHttpRequest()
    sendInfo.onreadystatechange =function(){
        if(sendInfo.readyState ==4 && sendInfo.status  ==201){
            console.log("Add User")
        }
    }
    sendInfo.open("POST","http://localhost:3000/persons");
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user))
    console.log(user)
}