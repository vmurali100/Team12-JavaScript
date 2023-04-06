var allusers=[
    // {username:"mallelajagadeesh",email:"mallelajagadeesh7524@gmail.com",password:1789,confirmpassword:1789,displayname:"Jagadeesh",fname:"M",lname:"jagadeesh",nickname:"jaga",website:"Hostar",bio:"crickter",jabber:"IT",aloim:"Benguluru",yahooim:"chittoor",gender:"male"},
    // {username:"mallelaradha",email:"mallelaradha7524@gmail.com",password:1779,confirmpassword:1779,displayname:"Radha",fname:"M",lname:"radha",nickname:"kutti",website:"Hostar",bio:"dancing",jabber:"former",aloim:"chittoor",yahooim:"chittoor",gender:"female"}
]


function createuser(){
    
    
    var user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        confirmpassword:document.getElementById("confirmpassword").value,
        displayname:document.getElementById("displayname").value,
        FristName: document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        nickname:document.getElementById("nickname").value,
        website:document.getElementById("website").value,
        bio:document.getElementById("bio").value,
        jabber:document.getElementById("jabber").value,
        aloim:document.getElementById("aloim").value,
        yahooim:document.getElementById("yahooim").value,
        gender:""
        
    }
    
    var allRadios =document.getElementsByName("gender");
    
     allRadios.forEach((element)=>{
        if(element.checked){
            user.gender=element.value
        }
        
    })
    console.log(user);
    clearform()
    allusers.push(user)
    displayUsers(allusers)
}
