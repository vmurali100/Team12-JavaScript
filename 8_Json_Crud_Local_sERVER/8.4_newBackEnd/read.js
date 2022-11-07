var data=[]
function getallusersfromserver(){
    var getusers = new XMLHttpRequest()
    getusers.onreadystatechange = function(){
        if (getusers.readyState == 4 && getusers.status == 200){
            data = JSON.parse(getusers.response)
            console.log(data)
        }
    }
    getusers.open("GET","http://localhost:3000/users");
    getusers.send()
}

getallusersfromserver()