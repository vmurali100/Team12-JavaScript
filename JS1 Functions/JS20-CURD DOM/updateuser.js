function updateuser(){
    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        adress: document.getElementById("adress").value,
        city: document.getElementById("city").value,
        pincode:document.getElementById("pincode").value,
        phonenumber:document.getElementById("phonenumber").value,
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