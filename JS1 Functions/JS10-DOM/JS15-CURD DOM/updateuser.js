function updateuser(){
    var user={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        age:document.getElementById("age").value,
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