
function clearForm(){
    document.getElementById("fullName").value="";
    document.getElementById("userName").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";
    document.getElementById("password").value="";
    document.getElementById("confirmPass").value="";        
    // Handle Gender 
    allRadios.forEach((element)=>{
        element.checked = false
    })

}