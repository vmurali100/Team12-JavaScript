function clearForm(){
    document.getElementById("fname").value=""
    document.getElementById("lname").value=""
    document.getElementById("email").value=""
    document.getElementById("password").value=""
    document.getElementById("age").value=""
    allRadios.forEach((element)=>{
element.checked =false
})
allSubjects.forEach((element)=>{
element.checked=false
})
}