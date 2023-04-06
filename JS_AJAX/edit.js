function Edit(i){
var sendInfo = new XMLHttpRequest();
sendInfo.onreadystatechange = function (){
    if(sendInfo.readyState == 4 && sendInfo.status == 201){
        console.log("User Updated Successfully")
        Clickhere()
    }
}

sendInfo.open("PUT","http://localhost:3000/allusers/"+users[i].id);
sendInfo.setRequestHeader("Content-Type","application/json");
sendInfo.send(JSON.stringify(users))
}