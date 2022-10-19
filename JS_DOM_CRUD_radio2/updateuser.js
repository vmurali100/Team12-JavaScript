function udpateUser(){
    var user={
        firstname:document.getElementById("fname").value,
        lastname:document.getElementById("lname").value,
        adress:document.getElementById("adress").value,
        city:document.getElementById("city").value,
        pincode:document.getElementById("pincode").value,
        phone:document.getElementById("phone").value,
        gender:""

    }
    allradio.forEach((abc)=>{
        if(abc.checked){
            user.gender = abc.value
        }
    })
    usres[gIndex]=user;
    document.getElementById("createBtn").style.display="block"
    document.getElementById("updateBtn").style.display="none";
    displayuser(usres);
    clearform()
}