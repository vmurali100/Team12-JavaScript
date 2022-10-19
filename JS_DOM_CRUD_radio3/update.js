function udpateUser(){
    var users={
        Email:document.getElementById("email").value,
        Password:document.getElementById("password").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        displayname:document.getElementById("displayname").value,
        website:document.getElementById("website").value,
        gender:""

    }
    allRadios.forEach((element)=>{
        if(element.checked){
            users.gender = element.value
        }
    })
    allUsers[gIndex]=users;
    document.getElementById("registerBtn").style.display="block"
    document.getElementById("updateBtn").style.display="none";
    displayUsers(allUsers);
    clearForm()

}