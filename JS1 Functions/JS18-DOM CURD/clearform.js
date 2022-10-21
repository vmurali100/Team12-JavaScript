function clearForm(){
    document.getElementById("rtitle").value = "";;
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("rpassword").value = "";
    document.getElementById("uname").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("nname").value = "";
    document.getElementById("dname").value = "";
    allRadios.forEach((element)=>{
        element.checked=false
            })
            allSubjects.forEach((element)=>{
        element.checked=false
            })
}