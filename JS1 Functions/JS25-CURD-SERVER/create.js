function addUser(){
    var user = {
        rtitle: document.getElementById("rtitle").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        rpassword: document.getElementById("rpassword").value,
        uname: document.getElementById("uname").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        dname: document.getElementById("dname").value,
        nname: document.getElementById("nname").value
    }

    var sendInfo = new XMLHttpRequest();
    sendInfo.onreadystatechange = function (){
        if(sendInfo.readyState == 4 && sendInfo.status == 201){
            console.log("User Added Successfully")

        }
    }

    sendInfo.open("POST","http://localhost:3000/users");
    sendInfo.setRequestHeader("Content-Type","application/json");
    sendInfo.send(JSON.stringify(user))
    console.log(user)
}