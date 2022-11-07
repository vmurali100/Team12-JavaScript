function updateuser(){
    var user={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
    }
    var sendinfo=new XMLHttpRequest();
    sendinfo.onreadystatechange=function(){
        if(sendinfo.readyState==4 && sendinfo.status==201){
            console.log("successfully update user")
            readuser()
        }
    }
    sendinfo.open("PUT","http://localhost:3000/users/"+users[gindex].id)
    sendinfo.setRequestHeader("Content-Type","application/json")
    sendinfo.send(JSON.stringify(user))
    console.log(user)
}