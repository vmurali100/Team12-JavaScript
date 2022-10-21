var users=[
    {
        "fname": "M",
        "lname": "jagadeesh",
        "adress": "nrpet",
        "city": "chittoor",
        "pincode": "517419",
        "phonenumber": "7995321587",
        "gender": "male",
        "subjects": [
            "mba"
        ]
    },
    {
        "fname": "M",
        "lname": "Geetha",
        "adress": "nrpet",
        "city": "chittoor",
        "pincode": "517419",
        "phonenumber": "8897350127",
        "gender": "female",
        "subjects": [
            "10th"
        ]
    },
    {
        "fname": "ammu",
        "lname": "m",
        "adress": "nrpet",
        "city": "chittoor",
        "pincode": "517419",
        "phonenumber": "7995321587",
        "gender": "female",
        "subjects": [
            "10th",
            "inter",
            "degree"
        ]
    }
]
var allRadios=document.getElementsByName("gender");
var allSubjects=document.getElementsByName("subject");
function adduser(){
    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        adress: document.getElementById("adress").value,
        city: document.getElementById("city").value,
        pincode:document.getElementById("pincode").value,
        phonenumber:document.getElementById("phonenumber").value,
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



