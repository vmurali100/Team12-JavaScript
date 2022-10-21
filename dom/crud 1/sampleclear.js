function clearuser(){
    document.getElementById("serial").value="";
    document.getElementById("password").value="";
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("nickname").value="";

    allradios.forEach((element)=>{
        element.checked=false
    })



    
}