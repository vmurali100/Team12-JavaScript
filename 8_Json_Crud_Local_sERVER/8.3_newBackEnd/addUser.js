function addUser(){
    var users={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        arrivalDate:document.getElementById("arrivalDate").value,
        departureDate:document.getElementById("departureDate").value,
        flightNo:document.getElementById("flightNo").value,
        splReq:document.getElementById("splReq").value
    }
    var sendInfo=new XMLHttpRequest();
    sendInfo.onreadystatechange=function(){
        if(sendInfo.readyState== 4 && sendInfo.status==201){
            console.log("User Added SuccessFull")
        }
    }
    sendInfo.open("POST","http://localhost:3000/users");
    sendInfo.setRequestHeader("Content-Type","application/json")
    sendInfo.send(JSON.stringify(users))
    console.log(users)
}