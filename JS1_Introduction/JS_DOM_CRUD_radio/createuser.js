var allradios=document.getElementsByName("gender");
var custo = [
  { username: "kushi", email: "kushi@gmail.com", password: 223344, cpassword: 223344, dname: "kushi PC", fname: "kushi", lname: "PC", nname: "kush", website: "kushi.com", bio: "abbgdsjshdhdhd",jabber:"abcd",aol:"gghh",yahoo:"prashanth@yahoo.com",gender:"Female"},
{ username: "rama", email: "rama33@gmail.com", password: 289344, cpassword: 289344, dname: "raghu rama", fname: "raghu", lname: "Police", nname: "ranga", website: "rama.com", bio: "abbgdsjshdhdhhfhfd",jabber:"efgh",aol:"uuii",yahoo:"laliger@yahoo.com",gender:"Male"}
]
 
function createUser(){
    var user={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        cpassword:document.getElementById("cpassword").value,
        dname:document.getElementById("dname").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        nname:document.getElementById("nname").value,
        website:document.getElementById("website").value,
        bio:document.getElementById("bio").value,
        jabber:document.getElementById("jabber").value,
        aol:document.getElementById("aol").value,
        yahoo:document.getElementById("yahoo").value,
        gender:""

        
    }
    
      allradios.forEach((abc)=>{
        if(abc.checked){
            user.gender=abc.value
        }
      })
      
    console.log(user)
    custo.push(user)
    displayUsers(user)
    clearForm()
}
displayUsers(custo)