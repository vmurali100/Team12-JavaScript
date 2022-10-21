function updateuser(){
    var user = {
        rtitle: document.getElementById("rtitle").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        rpassword: document.getElementById("rpassword").value,
        uname: document.getElementById("uname").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        dname: document.getElementById("dname").value,
        nname: document.getElementById("nname").value,
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