function clearForm(){
            
    document.getElementById("ruser").value="";
    document.getElementById("uemail").value="";
    document.getElementById("uname").value="";
   document.getElementById("password").value="";
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("dname").value="";
   document.getElementById("website").value="";
   document.getElementById("urole").value="";
   document.getElementById("avatar").value="";
   allRadios.forEach((element)=>{
    element.checked =false
    })
    allSubjects.forEach((element)=>{
    element.checked=false
    })
}