var alluser=[{
    username:"Revanthmukundha",
    email:"revanthreddy.mukundha@gmail.com",
    password:"rrr@rrr",
    cpassword:"rrr@rrr",
    dname:"Reddy Rough",
    fname:"Revanth",
    lname:"Reddy",
    gender:"Male",
    subject:"2nd Year"
},
{
    username:"Thanuja_mukundha",
    email:"revanthreddy.mukundha@gmail.com",
    password:12344,
    cpassword:12344,
    dname:"Reddy Rough",
    fname:"Thanuja",
    lname:"Reddy",
    gender:"FeMale",
    subject:"3rd Year"
},
{
    username:"mukundha",
    email:"mukundha@gmail.com",
    password:12344,
    cpassword:12344,
    dname:"Mukundha Reddy Rough",
    fname:"mukundha",
    lname:"Reddy",
    gender:"Male",
    subject:"4th Year"
}]
var allradio=document.getElementsByName("gender");
var allsubjects=document.getElementsByName("subject");
function createuser(){
    var user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        cpassword:document.getElementById("cpassword").value,
        dname:document.getElementById("dname").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        gender:"",
        subject:[],
    }
    allradio.forEach((element)=>{
        if(element.checked){
            user.gender=element.value
        }
    })

    allsubjects.forEach((element)=>{
        if (element.checked){
            user.subject.push(element.value)
        }
        console.log(element.checked)
    })
    alluser.push(user)
    displayuser(alluser)
    clearuser()
    
}
function clearuser(){
    document.getElementById("username").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("cpassword").value="";
    document.getElementById("dname").value="";
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";


    allradio.forEach((element)=>{
        element.checked=false
        allsubjects.forEach((element)=>{
    })
        element.checked=false
    })
}
displayuser(alluser)