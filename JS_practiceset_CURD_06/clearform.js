var allRadios=document.getElementsByName("gender");
var allSubjects=document.getElementsByName("subj")
function clearform() {
    document.getElementById("urname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("compass").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("nname").value = "";
    document.getElementById("web").value = "";
    document.getElementById("bio").value = "";

    allRadios.forEach(function(ele){
        ele.checked=false
    })
    allSubjects.forEach((element)=>{
        element.checked=false
    })
  }