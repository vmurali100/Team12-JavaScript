function udpateUser(){
    var user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        cpassword:document.getElementById("cpassword").value,
        dname:document.getElementById("dname").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        nname:document.getElementById("nname").value,
        website:document.getElementById("website").value,
        bio:document.getElementById("bio").value,
        jabber:document.getElementById("jabber").value,
        aol:document.getElementById("aol").value,
        yahoo:document.getElementById("yahoo").value,
        gender:""

    }
    allradios.forEach((abc)=>{
        if(abc.checked){
            user.gender = abc.value
        }
    })
    custo[gIndex]=user;
    document.getElementById("createBtn").style.display="none";
    document.getElementById("updateBtn").style.display="block"
    
    displayUsers(custo);
    clearForm()
}