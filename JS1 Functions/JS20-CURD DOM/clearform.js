function clearForm(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = ""
    document.getElementById("adress").value = "";
    document.getElementById("city").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("phonenumber").value = "";
    allRadios.forEach((element)=>{
        element.checked=false
            })
            allSubjects.forEach((element)=>{
        element.checked=false
            })
}