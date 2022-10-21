function updateuser(){
    var user ={
        serial :document.getElementById("serial").value,
        password :document.getElementById("password").value,
        firstname :document.getElementById("firstname").value,
        lastname :document.getElementById("lastname").value,
        nickname :document.getElementById("nickname").value,
    };
    alluser[gindex]=user;
    displayuser(alluser)
    clearuser()
    document.getElementById("create").style.display="block";
    document.getElementById("update").style.display="none";
    }
