var gindex;
function edituser(i){
    console.log(i)
    document.getElementById("upadateBtn").style.display="Block"
    document.getElementById("createBtn").style.display="none"
    
    gindex=i;
    document.getElementById("username").value=allusers[i].username
    
    document.getElementById("email").value=allusers[i].email;
    document.getElementById("password").value=allusers[i].password;
    document.getElementById("confirmpassword").value=allusers[i].confirmpassword;
    document.getElementById("displayname").value=allusers[i].displayname;
    document.getElementById("fname").value=allusers[i].fname;
    document.getElementById("lname").value=allusers[i].lname;
    document.getElementById("nickname").value=allusers[i].nickname;
    document.getElementById("website").value=allusers[i].website;
    document.getElementById("bio").value=allusers[i].bio;

    document.getElementById("jabber").value=allusers[i].jabber;
    document.getElementById("aloim").value=allusers[i].aloim;
    document.getElementById("yahooim").value=allusers[i].yahooim;

    allRadios.forEach((element)=>{
if(element.value==allusers[i].gender){
    element.checked=true
}
    })
    
}