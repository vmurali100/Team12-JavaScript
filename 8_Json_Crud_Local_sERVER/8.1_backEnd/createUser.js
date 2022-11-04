function createUser(){
    var user={
        fName:document.getElementById("fName").value,
        lName:document.getElementById("lName").value
    }
    var sendInfo=new XMLHttpRequest();
        sendInfo.onreadystatechange=function(){
            if(sendInfo.readyState ==4 && sendInfo.status==201){
                console.log("User Added Successfull")
        }
    }
    sendInfo.open("POST","http://localhost:3000/users")
    sendInfo.setRequestHeader("Content-Type","application/json")
    sendInfo.send(JSON.stringify(user))
    console.log(user)
}