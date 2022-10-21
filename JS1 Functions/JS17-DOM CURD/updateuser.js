function updateuser(){
    var user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        confirmpassword:document.getElementById("confirmpassword").value,
        displayname:document.getElementById("displayname").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        nickname:document.getElementById("nickname").value,
        website:document.getElementById("website").value,
        bio:document.getElementById("bio").value,
        jabber:document.getElementById("jabber").value,
        aloim:document.getElementById("aloim").value,
        yahooim:document.getElementById("yahooim").value,
        gender:"",
        subjects:[]
    
    }
    allRadios.forEach((element)=>{
        if(element.checked){
        user.gender=element.value
        }
        })
        allSubjects.forEach((element)=>{
            console.log(element.checked)
        if(element.checked){
            user.subjects.push(element.value)
        }
        
        })
        users[index]=user
        clearForm()
        displayusers(users)
        document.getElementById("adduserBtn").style.display="Block"
        document.getElementById("updateuserBtn").style.display="none"
}