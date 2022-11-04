var gIndex=null
function editUser(i){
    gIndex=i;
    document.getElementById("fname").value=users[i].fname
    document.getElementById("lname").value=users[i].lname
    document.getElementById("email").value=users[i].email
    document.getElementById("password").value=users[i].password
    document.getElementById("phone").value=users[i].phone


    document.getElementById("updatebtn").style.display="block"
    document.getElementById("addbtn").style.display="none"
}
function updateUser(){
    var user={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        phone:document.getElementById("phone").value,
    }
    var sendInfo= new XMLHttpRequest();
    sendInfo.onreadystatechange=function(){
        if(sendInfo.readyState==4 && sendInfo.status==201){
            console.log("user updated succesfully")
            getAllusersFromserver()
        }
    }
    sendInfo.open("PUT","http://localhost:3000/users/"+users[gIndex].id)
    sendInfo.setRequestHeader("Content-Type","application/json")
    sendInfo.send(JSON.stringify(user))
    console.log(user)

}