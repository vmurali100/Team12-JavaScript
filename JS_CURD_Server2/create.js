function createuser(){
    var user = {
        ActionName: document.getElementById("actname").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("pass").value,
        FirstName: document.getElementById("fname").value,
        LastName: document.getElementById("lname").value,
        DisplayName: document.getElementById("disname").value,
        Website: document.getElementById("website").value,
        UserRole: document.getElementById("role").value,
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