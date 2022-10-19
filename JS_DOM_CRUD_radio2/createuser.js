var allradio=document.getElementsByName("gender")
var usres=[{fname:"prashanth",lname:"kumar",adress:"#10",city:"banglore",pincode:577518,phone:8095812375},
{fname:"rathan",lname:"lal",adress:"#45",city:"mysore",pincode:677518,phone:8095812375}]
function createuser(){
    var user={
        firstname:document.getElementById("fname").value,
        lastname:document.getElementById("lname").value,
        adress:document.getElementById("adress").value,
        city:document.getElementById("city").value,
        pincode:document.getElementById("pincode").value,
        phone:document.getElementById("phone").value,
        gender:""

    }
    
    allradio.forEach((abc)=>{
        if(abc.checked){
            user.gender=abc.value
        }
    })
    console.log(user)
    usres.push(user)
    displayuser(usres)
    clearform()
}
