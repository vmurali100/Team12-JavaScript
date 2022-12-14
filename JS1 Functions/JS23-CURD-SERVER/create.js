function addUser(){
    var user = {
        fname:document.getElementById("fname").value ,
        lname:document.getElementById("lname").value,
        adress:document.getElementById("adress").value,
        city:document.getElementById("city").value,
        pincode:document.getElementById("pincode").value,
       phonenumber:document.getElementById("phonenumber").value
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