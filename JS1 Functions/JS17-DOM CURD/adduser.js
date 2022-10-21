var users=[
    {
        "username": "mallelajagadesh",
        "email": "mallelajagadeesh7524@gmail.com",
        "password": "1789",
        "confirmpassword": "1789",
        "displayname": "Jagaddeh",
        "fname": "M",
        "lname": "jagadeesh",
        "nickname": "jaga",
        "website": "Hostar",
        "bio": "Crickter",
        "jabber": "it",
        "aloim": "Benguluru",
        "yahooim": "Chittoor",
        "gender": "male",
        "subjects": [
            "cricket"
        ]
    },
    {
        "username": "chadana",
        "email": "chandana788@gmail.com",
        "password": "77467",
        "confirmpassword": "77467",
        "displayname": "potti",
        "fname": "a",
        "lname": "chanadna",
        "nickname": "oye",
        "website": "youtube",
        "bio": "farmer",
        "jabber": "employee",
        "aloim": "tirupathi",
        "yahooim": "Chittoor",
        "gender": "female",
        "subjects": [
            "kabadi"
        ]
    }
]
var allRadios=document.getElementsByName("gender");
var allSubjects=document.getElementsByName("subject");
function adduser(){
    var user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        confirmpassword:document.getElementById("confirmpassword").value,
        displayname:document.getElementById("displayname").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        nickname:document.getElementById("nickname").value,
        website:document.getElementById("website").value,
        bio:document.getElementById("bio").value,
        jabber:document.getElementById("jabber").value,
        aloim:document.getElementById("aloim").value,
        yahooim:document.getElementById("yahooim").value,
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
