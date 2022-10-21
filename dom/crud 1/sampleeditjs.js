function edituser(i){
    console.log(i)
    document.getElementById("serial").value="";
    document.getElementById("password").value="";
    document.getElementById("firstname").value="";
    document.getElementById("lastname").value="";
    document.getElementById("nickname").value="";
    document.getElementById("create").style.display="none";
    document.getElementById("update").style.display="block";
    gindex=i;
    allradios.forEach((element)=>{
        if(element.value==alluser[i].gender){
            element.checked=true
        }
    })
}
