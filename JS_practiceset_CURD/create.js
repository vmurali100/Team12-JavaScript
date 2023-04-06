var allusers=[]
function createuser(){
    var user={
        Fname:document.getElementById("Fname").vlaue,
        LastName:document.getElementById("Lname").value,
        Patronymic:document.getElementById("patronymic").value,
        Email:document.getElementById("email").value,
        Password:document.getElementById("password").value,
        Age:document.getElementById("age").value,
        Author:document.getElementById("author").value,
        Gender:"",
        Subjects:[],
        Bio:document.getElementById("bio").value,

    }
    var allRadios=document.getElementsByName("gender")

    allRadios.forEach((element)=>{
        if(element.checked){
            user.Gender=element.value
        }
    })
    var allSubjects=document.getElementsByName("subjects")

    allSubjects.forEach((element)=>{
        if(element.checked){
            user.Subjects=element.value
        }
    })
    console.log(user)
    clearform()
    allusers.push(user)
    displayUsers(allusers)
}
