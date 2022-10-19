var allRadios = document.getElementsByName("gender");
var allUsers = [
    {
        fullName:"Murali",
        userName:"Krishna",
        email:"murali@gmail.com",
        phone:9663856625,
        password:"123",
        confirmPass:"123",
        gender:"Male"
    },
    {
        fullName:"VMR",
        userName:"KK",
        email:"murali@gmail.com",
        phone:9844007925,
        password:"123",
        confirmPass:"123",
        gender:"Female"
    },
    {
        fullName:"Ram",
        userName:"Ravi",
        email:"ram@gmail.com",
        phone:9663856625,
        password:"123",
        confirmPass:"123",
        gender:"NA"
    }

]
function registerUser(){
    var user = {
        fullName:document.getElementById("fullName").value,
        userName:document.getElementById("userName").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        password:document.getElementById("password").value,
        confirmPass:document.getElementById("confirmPass").value,
        gender:""
    }
    allRadios.forEach((element)=>{
        if(element.checked){
            user.gender = element.value
        }
    })
    console.log(user)
    allUsers.push(user)
    displayUsers(allUsers)
    clearForm()
}

displayUsers(allUsers)
