function clearuser(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("birthday").value="";
    document.getElementById("email").value="";
    document.getElementById("phone").value="";

    allradios.forEach((element)=>{
       element.checked=false
    })
}