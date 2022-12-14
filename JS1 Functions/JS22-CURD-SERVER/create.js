function adduser(){
    var user ={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value
    }
    var sendInfo =new XMLHttpRequest();
    sendInfo.onreadystatechange =function(){
        if(sendInfo.readyState ==4&& sendInfo.status ==201){
            console.log("User Added Sucessfully")
        }

    }
    sendInfo.open("POST","http://localhost:3000/users");
    sendInfo.setRequestHeader("content-Type","application/json")
    sendInfo.send(JSON.stringify(user))
     console.log(user)
}