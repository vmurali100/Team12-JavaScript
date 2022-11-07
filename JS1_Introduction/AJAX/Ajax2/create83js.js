function createuser(){
    var user={
        username:document.getElementById("username").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }

    var sendinfo=new XMLHttpRequest();
    sendinfo.onreadystatechange=function(){
        if(sendinfo.readyState==4 && sendinfo.status==201){
            console.log("successfully added user")
        }
    }
    sendinfo.open("POST","http://localhost:3000/users")
    sendinfo.setRequestHeader("Content-Type","application/json")
    sendinfo.send(JSON.stringify(user))
    console.log(user)
}