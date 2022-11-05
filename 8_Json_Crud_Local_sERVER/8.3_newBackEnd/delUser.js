function delUser(i){
    var delInfo=new XMLHttpRequest();
    delInfo.onreadystatechange=function(){
        if(delInfo.readyState==4 && delInfo.status==200){
            getAllUsersFormServer()
        }
    }
    delInfo.open("DELETE","http://localhost:3000/users/"+users[i].id)
    delInfo.send()
}