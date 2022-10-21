var users=[
    {
        "rtitle": "ram",
        "email": "mallelajagadeesh7524@gmail.com",
        "password": "1789",
        "rpassword": "1789",
        "uname": "jagadeesh",
        "fname": "M",
        "lname": "jagadeesh",
        "dname": "mallela",
        "nname": "kutti",
        "gender": "male",
        "subjects": [
            "it"
        ]
    },
    {
        "rtitle": "seetha",
        "email": "radha96@gmail.com",
        "password": "77467",
        "rpassword": "77467",
        "uname": "kandukuri",
        "fname": "K",
        "lname": "Radha",
        "dname": "kutti",
        "nname": "mallela",
        "gender": "female",
        "subjects": [
            "it",
            "bpo"
        ]
    }
]
var allRadios=document.getElementsByName("gender");
var allSubjects=document.getElementsByName("subject");
function adduser(){
    var user = {
        rtitle: document.getElementById("rtitle").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        rpassword: document.getElementById("rpassword").value,
        uname: document.getElementById("uname").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        dname: document.getElementById("dname").value,
        nname: document.getElementById("nname").value,
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

