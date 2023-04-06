function createuser(){
    var user = {
        Email:document.getElementById("inputEmail4").value,
        Password:document.getElementById("inputPassword4").value,
        Address:document.getElementById("inputAddress").value,
        Address2:document.getElementById("inputAddress2").value,
        City:document.getElementById("inputCity").value,
        State:document.getElementById("inputState").value,
        Zip:document.getElementById("inputZip").value,
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