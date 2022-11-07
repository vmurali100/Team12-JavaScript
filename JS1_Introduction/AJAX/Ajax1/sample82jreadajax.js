var users=[]
function readuser(){
   var getuser=new XMLHttpRequest()
   getuser.onreadystatechange=function(){
    if(getuser.readyState==4 && getuser.status==200){
        users=JSON.parse(getuser.response)
            console.log(users)
            displayuser(users)
        }
   }
    getuser.open("GET","http://localhost:3000/users");
    getuser.send()
}
readuser()