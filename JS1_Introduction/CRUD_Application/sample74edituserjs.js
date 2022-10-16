function edituser(i){
   console.log(i)
   document.getElementById("fname").value=alluser[i].firstname;
    document.getElementById("lname").value=alluser[i].lastname;
    document.getElementById("birthday").value=alluser[i].birthday;
    document.getElementById("email").value=alluser[i].Email;
    document.getElementById("phone").value=alluser[i].phone;
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";
    gindex = i;
}