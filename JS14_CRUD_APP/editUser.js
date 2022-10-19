var gIndex =null;
function edituser(i){
    console.log(i)
    document.getElementById("registerBtn").style.display="none"
    document.getElementById("updateBtn").style.display="block"
    gIndex=i;
    document.getElementById("fullName").value=allUsers[i].fullName;
    document.getElementById("userName").value=allUsers[i].userName;
    document.getElementById("email").value=allUsers[i].email;
    document.getElementById("phone").value=allUsers[i].phone;
    document.getElementById("password").value=allUsers[i].password;
    document.getElementById("confirmPass").value=allUsers[i].confirmPass;   

    allradio.forEach((abc)=>{
        if(abc.value == usre[i].gender){
            abc.checked=true
        }
    })
}