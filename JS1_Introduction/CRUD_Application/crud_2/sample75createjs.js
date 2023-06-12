var allradios = document.getElementsByName("gender");
var gindex=null
var alluser=[]
function createuser(){
    var user={
        fullname:document.getElementById("fullname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        confirmpassword:document.getElementById("cpass").value,
    };
    console.log(user)

    allradios.forEach((element)=>{
      if (element.checked){
        user.gender=element.value;
      }
    });
    console.log(user);
  clearuser();
  alluser.push(user);
  displayuser(alluser);
}
