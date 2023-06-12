function edituser(i){
    console.log(i)
    document.getElementById("fullname").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("cpass").value="";
     document.getElementById("submit").style.display = "none";
     document.getElementById("update").style.display = "block";
     gindex = i;
 
     allradios.forEach((element)=>{
      if(element.value==alluser[i].gender){
         element.checked=true
      }
     })
 }