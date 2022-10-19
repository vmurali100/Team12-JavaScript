var index=0
function updateUser(i){
    index=i
    var user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        confirmpassword:document.getElementById("cpassword").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        nname:document.getElementById("nname").value,
        dname:document.getElementById("dname").value,
        website:document.getElementById("website").value,
        bio:document.getElementById("bio").value,
        jabber:document.getElementById("jabber").value,
        aol:document.getElementById("aol").value,
        yahoo:document.getElementById("yahoo").value,
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
       users[index]=user
       clearform()
       displayUser(users)
       document.getElementById("createBtn").style.display="none"
    document.getElementById("updateBtn").style.display="block"
}