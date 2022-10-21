var index=0
function edituser(i){
    index=i
    var selecteduser=users[i]
    document.getElementById("username").value=selecteduser.username
    
    document.getElementById("email").value=selecteduser.email
    document.getElementById("password").value=selecteduser.password
    document.getElementById("confirmpassword").value=selecteduser.confirmpassword
    document.getElementById("displayname").value=selecteduser.displayname
    document.getElementById("fname").value=selecteduser.fname
    document.getElementById("lname").value=selecteduser.lname
    document.getElementById("nickname").value=selecteduser.nickname
    document.getElementById("website").value=selecteduser.website
    document.getElementById("bio").value=selecteduser.bio

    document.getElementById("jabber").value=selecteduser.jabber
    document.getElementById("aloim").value=selecteduser.aloim
    document.getElementById("yahooim").value=selecteduser.yahooim
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