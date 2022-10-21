
var users =[
    {
        "fname": "M",
        "lname": "jagadeesh",
        "email": "mallelajagadeesh7524@gmail.com",
        "password": "1789",
        "age": "23",
        "gender": "male",
        "subjects": [
            "css",
            "java"
        ]
    },
    {
        "fname": "K",
        "lname": "Radha",
        "email": "radha96@gmail.com",
        "password": "7746",
        "age": "45",
        "gender": "female",
        "subjects": [
            "react"
        ]
    },
    {
        "fname": "M",
        "lname": "Geetha",
        "email": "geetha8897@gmail.com",
        "password": "77467",
        "age": "38",
        "gender": "female",
        "subjects": [
            "html",
            "java"
        ]
    }
]
var allRadios=document.getElementsByName("gender");
var allSubjects=document.getElementsByName("subject");
function adduser(){
var user={
    fname:document.getElementById("fname").value,
    lname:document.getElementById("lname").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,
    age:document.getElementById("age").value,
    gender:"",
    subjects:[]
    

   
}
allRadios.forEach((element)=>{
if(element.checked){
user.gender=element.value
}
})
allSubjects.forEach((element)=>{
    console.log(element.checked)
if(element.checked){
    user.subjects.push(element.value)
}

})
console.log(user)
users.push(user)
displayusers(users)
clearForm()
}
displayusers(users)