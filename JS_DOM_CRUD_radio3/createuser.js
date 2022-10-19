var allRadios=document.getElementsByName("gender");
var allUsers=[{Email:"prashanthlaliger@gmail.com",Password:8877,fname:"prashanth",lname:"kumar",displayname:"prashi",website:"prashanth.com",gender:"Male"},
{Email:"kuashi@gmail.com",Password:9955,fname:"kushi",lname:"swamy",displayname:"kushi",website:"kushi.com",gender:"Female"},]
function createuser(){
    var users={
        Email:document.getElementById("email").value,
        Password:document.getElementById("password").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        displayname:document.getElementById("displayname").value,
        website:document.getElementById("website").value,
        gender:""
    }
    
    allRadios.forEach((element)=>{
        if(element.checked){
            users.gender=element.value
        }
    })
    console.log(users)
    allUsers.push(users)
    displayUsers(allUsers)
    clearform()

}
displayUsers(allUsers)