function addUser(){
    var user = {
        Username: document.getElementById("urname").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("pass").value,
        confirmpassword: document.getElementById("compass").value,
        FirstName: document.getElementById("fname").value,
        LastName: document.getElementById("lname").value,
        Nickname: document.getElementById("nname").value,
        Website: document.getElementById("web").value,
        Bio: document.getElementById("bio").value,
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