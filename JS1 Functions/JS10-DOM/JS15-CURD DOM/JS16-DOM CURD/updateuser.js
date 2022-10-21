function updateuser(){
    var user ={
                
        ruser :document.getElementById("ruser").value,
        uemail:document.getElementById("uemail").value,
        uname:document.getElementById("uname").value,
       password :document.getElementById("password").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        dname:document.getElementById("dname").value,
       website :document.getElementById("website").value,
       urole :document.getElementById("urole").value,
       avatar :document.getElementById("avatar").value,
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