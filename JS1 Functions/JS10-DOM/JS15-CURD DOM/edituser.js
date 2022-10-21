var index=0
function edituser(i){
    index=i
    var selecteduser=users[i]
    document.getElementById("fname").value = selecteduser.fname
    document.getElementById("lname").value = selecteduser.lname
    document.getElementById("email").value = selecteduser.email
    document.getElementById("password").value = selecteduser.password
    document.getElementById("age").value = selecteduser.age
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