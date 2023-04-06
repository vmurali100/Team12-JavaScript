var allRadios =document.getElementsByName("gender");
function clearform(){
    document.getElementById("username").value="";
    
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("confirmpassword").value="";
    document.getElementById("displayname").value="";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value="";
    document.getElementById("nickname").value="";
    document.getElementById("website").value="";
    document.getElementById("bio").value="";
    document.getElementById("jabber").value="";
    document.getElementById("aloim").value="";
    document.getElementById("yahooim").value="";
    
allRadios.forEach((element)=>{
element.checked =false
})

}