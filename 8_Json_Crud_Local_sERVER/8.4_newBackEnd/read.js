var users=[]
function getallusersfromserver(){
    var getusers = new XMLHttpRequest()
    getusers.onreadystatechange = function(){
        if (getusers.readyState == 4 && getusers.status == 200){
            users = JSON.parse(getusers.response)
            console.log(users)
        }
    }
    getusers.open("GET","http://localhost:3000/users");
    getusers.send()
}

getallusersfromserver()