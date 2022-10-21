var index=0
function edituser(i){
    index=i
    var selecteduser=users[i]
    document.getElementById("ruser").value=selecteduser.ruser
                document.getElementById("uemail").value=selecteduser.uemail
                document.getElementById("uname").value=selecteduser.uname
               document.getElementById("password").value=selecteduser.password
                document.getElementById("fname").value=selecteduser.fname
                document.getElementById("lname").value=selecteduser.lname
                document.getElementById("dname").value=selecteduser.dname
               document.getElementById("website").value=selecteduser.website
               document.getElementById("urole").value=selecteduser.urole
               document.getElementById("avatar").value=selecteduser.avatar
    allRadios.forEach((user)=>{
if(user.value=selecteduser.gender){
    user.checked=true
}
    })
    allSubjects.forEach((sub)=>{
sub.checked=false
    })

    selecteduser.subjects.forEach((sub)=>{
console.log(sub)
allSubjects.forEach((element)=>{
if(element.value==sub){
    element.checked=true
}
})
    })
    document.getElementById("adduserBtn").style.display="none"
    document.getElementById("updateuserBtn").style.display="Block"
}