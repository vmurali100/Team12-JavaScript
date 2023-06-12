function updateuser(){
    var selectuser=alluser[i]
    document.getElementById("username").value=selectuser.username,
    document.getElementById("email").value=selectuser.email,
    document.getElementById("password").value=selectuser.password,
    document.getElementById("cpassword").value=selectuser.cpassword,
    document.getElementById("dname").value=selectuser.dname,
    document.getElementById("fname").value=selectuser.fname,
    document.getElementById("lname").value=selectuser.lname,
    document.getElementById("create").style.display="block",
    document.getElementById("update").style.display="none",
    
    allradio.forEach((usr)=>{
         if(usr.value==selectuser.gender){
            usr.checked=true
         }
    })

    selectuser.subject.forEach((sub)=>{
        allsubjects.forEach((element)=>{
            if(element.value==sub){
                element.checked=true
            }
        })
    })
    alluser[index]=user
    clearuser()
    displayuser(alluser)
}