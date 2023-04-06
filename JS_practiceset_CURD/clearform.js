var allRadios=document.getElementsByName("gender")
var allSubjects=document.getElementsByName("subjects")
function clearform(){

    document.getElementById("Fname").value="";
    document.getElementById("Lname").value="";
    document.getElementById("patronymic").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("age").value="";
    document.getElementById("author").value="";
    document.getElementById("bio").value="";
    
    allRadios.forEach((elmenet)=>{
        elmenet.checked=false
    })
    allSubjects.forEach((ele)=>{
        ele.checked=false
    })
}