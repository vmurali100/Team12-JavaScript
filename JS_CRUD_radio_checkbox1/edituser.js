function edituser(i){
    var selecteduser=users[i]
    // for(a in selecteduser){
    //     document.getElementById(a).value=selecteduser[a]
    // }
    document.getElementById("username").value=selecteduser.username
        document.getElementById("email").value=selecteduser.email
        document.getElementById("password").value=selecteduser.password
        document.getElementById("cpassword").value=selecteduser.confirmpassword
        document.getElementById("fname").value=selecteduser.fname
        document.getElementById("lname").value=selecteduser.lname
        document.getElementById("nname").value=selecteduser.nname
        document.getElementById("dname").value=selecteduser.dname
        document.getElementById("website").value=selecteduser.website
        document.getElementById("bio").value=selecteduser.bio
        document.getElementById("jabber").value=selecteduser.jabber
        document.getElementById("aol").value=selecteduser.aol
        document.getElementById("yahoo").value=selecteduser.yahoo
        
    allRadios.forEach((usr)=>{
        if(usr.value==selecteduser.gender){
            usr.checked=true
        }
    })
    allSubjects.forEach((sub)=>{
        sub.checked=false
    })
    allSubjects.forEach((element)=>{
        selecteduser.subjects.forEach((sub)=>{
            if(element.value==sub){
                element.checked=true
            }
        })
    })
    document.getElementById("createBtn").style.display="block"
    document.getElementById("updateBtn").style.display="none"
}