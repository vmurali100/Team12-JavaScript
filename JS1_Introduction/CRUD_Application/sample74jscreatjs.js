var allradios=document.getElementsByName("gender");
var alluser=[];
function registeruser(){
     var user={
        firstname:document.getElementById("fname").value,
        lastname:document.getElementById("lname").value,
        birthday:document.getElementById("birthday").value,
        birthday:document.getElementById("birthday").value,
        Email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
     }
     console.log(user)

     
     allradios.forEach((element)=>{
        if(element.checked){
            user.gender=element.value
        }
     })
     console.log(user)
     clearuser()
}