var users=[
    {
        "ruser": "jagadeesh",
        "uemail": "mallelajagadeesh7524@gmail.com",
        "uname": "jagadeesh",
        "password": "7746",
        "fname": "M",
        "lname": "jagadeesh",
        "dname": "mallela",
        "website": "hostar",
        "urole": "it",
        "avatar": "crime,",
        "gender": "male",
        "subjects": [
            "javas"
        ]
    },
    {
        "ruser": "radha",
        "uemail": "radha96@gmail.com",
        "uname": "mallela",
        "password": "77468",
        "fname": "K",
        "lname": "Radha",
        "dname": "kutti",
        "website": "Hostar",
        "urole": "itb",
        "avatar": "crime,",
        "gender": "female",
        "subjects": [
            "html7",
            "reactanta"
        ]
    }
]
var allRadios=document.getElementsByName("gender");
var allSubjects=document.getElementsByName("subject");
function adduser(){
    var user ={
                
        ruser :document.getElementById("ruser").value,
        uemail:document.getElementById("uemail").value,
        uname:document.getElementById("uname").value,
       password :document.getElementById("password").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        dname:document.getElementById("dname").value,
       website :document.getElementById("website").value,
       urole :document.getElementById("urole").value,
       avatar :document.getElementById("avatar").value,
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

