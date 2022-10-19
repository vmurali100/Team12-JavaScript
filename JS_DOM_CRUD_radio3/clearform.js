function clearform(){
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("displayname").value="";
    document.getElementById("website").value="";
    allRadios.forEach((element)=>{
        element.checked=false
    })
}