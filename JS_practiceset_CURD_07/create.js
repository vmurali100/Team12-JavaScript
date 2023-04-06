var UserDetails=[]


function Clickme(){
    var user={
    Email:document.getElementById("inputEmail4").value,
    Password:document.getElementById("inputPassword4").value,
    Address:document.getElementById("inputAddress").value,
    Address2:document.getElementById("inputAddress2").value,
    City:document.getElementById("inputCity").value,
    State:document.getElementById("inputState").value,
    Zip:document.getElementById("inputZip").value,
    gender:"",
    subjects:[]

}
var allSubjects=document.getElementsByName("subject")

var allRadios=document.getElementsByName("gender")

    allRadios.forEach((element)=>{
        if(element.checked){
            user.gender=element.value
        }
    })

allSubjects.forEach((element)=>{
    if(element.checked){
        user.subjects.push(element.value)
    }
})
    console.log(user);
    UserDetails.push(user)
    clearform()
    displayUsers(UserDetails)
}
displayUsers(UserDetails)