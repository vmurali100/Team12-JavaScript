var  allRadios=document.getElementsByName("gender")
var allSubjects=document.getElementsByName("subject")
function clearform(){
    document.getElementById("inputEmail4").value="";
    document.getElementById("inputPassword4").value="";
    document.getElementById("inputAddress").value="";
    document.getElementById("inputAddress2").value="";
    document.getElementById("inputCity").value="";
    document.getElementById("inputState").value="";
    document.getElementById("inputZip").value="";
    
    allRadios.forEach((ele)=>{
        ele.checked=false
    })

    allSubjects.forEach((ele)=>{
        ele.checked=false
    })
}