function subForm(){
    var student={
        name:document.getElementById("fName").value,
        fatherName:document.getElementById("lNam").value,
        address:document.getElementById("email").value,
        state:document.getElementById("mob").value
    }
    allRadios.forEach((element)=>{
        if(element.checked){
            students.gender=element.value
        }
    })
}