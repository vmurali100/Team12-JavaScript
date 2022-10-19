var gIndex=null;
function editUser(i){
    console.log(i)
    document.getElementById("createBtn").style.display="none"
    document.getElementById("updateBtn").style.display="block"
    gIndex=i;
    document.getElementById("email").value=allUsers[i].email;
    document.getElementById("password").value=allUsers[i].password;
    document.getElementById("fname").value=allUsers[i].fname;
    document.getElementById("lname").value=allUsers[i].lname;
    document.getElementById("displayname").value=allUsers[i].displayname;
    document.getElementById("website").value=allUsers[i].website;
    allRadios.forEach((element)=>{
        if(element.value == users[i].gender){
            element.checked=true
        }
    })
    

}