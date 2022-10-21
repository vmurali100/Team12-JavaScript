var allradios = document.getElementsByName("gender");
var gindex = null
var alluser = [
    {
        serial: "imli",
        password: 1234,
        firstname: "imli",
        lastname: "rathore",
        nickname:"imli",
        gender: "female",
    },
];
function createuser() {
    var user = {
        serial: document.getElementById("serial").value,
        password:document.getElementById("password").value,
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        nickname:document.getElementById("nickname").value,
        gender:"",
    };
    console.log(user);

    allradios.forEach((element) => {
        if(element.checked) {
            user.gender = element.value;

        }
    });
    console.log(user);
    clearuser();
    alluser.push(user);
    displayuser(alluser);
}
displayuser(alluser)




        
    

    




    
