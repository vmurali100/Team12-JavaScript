function clearuser(){
    document.getElementById("fullname").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("cpass").value="";

    allradios.forEach((element)=>{
       element.checked=false
    })
}