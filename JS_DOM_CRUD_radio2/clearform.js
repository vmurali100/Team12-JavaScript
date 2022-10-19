function clearform(){
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("adress").value="";
    document.getElementById("city").value="";
    document.getElementById("pincode").value="";
    document.getElementById("phone").value="";
     allradio.forEach((abc)=>{
        abc.checked=false
     })


} 