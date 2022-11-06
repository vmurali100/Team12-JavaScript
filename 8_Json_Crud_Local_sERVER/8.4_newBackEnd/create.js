function adduser(){
    var user={
        fname : document.getElementById("fname").value ,
        lname : document.getElementById("lname").value
    }
    var sendinfo = new XMLHttpRequest();
    sendinfo.onreadystatechange = function(){
        if(sendinfo.readystate == 4 && sendinfo.status == 201){
            console.log("user added successfully")

        }
    }  
    sendinfo.open("POST","http://localhost:3000/users");
    sendinfo.setRequestHeader("Content-Type","application/json");
    sendinfo.send(JSON.stringify(user))
    console.log(user)
}