function udpateUser(){
    var user = {
        fullName:document.getElementById("fullName").value,
        userName:document.getElementById("userName").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        password:document.getElementById("password").value,
        confirmPass:document.getElementById("confirmPass").value,
        gender:""
    }
    allRadios.forEach((element)=>{
        if(element.checked){
            user.gender = element.value
        }
    })
    allUsers[gIndex]=user;
    document.getElementById("registerBtn").style.display="block"
    document.getElementById("updateBtn").style.display="none";
    displayUsers(allUsers);
    clearForm()
}