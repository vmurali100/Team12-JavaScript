function deleteUser(i){
    var deleteInfo= new XMLHttpRequest();
    deleteInfo.onreadystatechange=function(){
        if(deleteInfo.readyState==4 && deleteInfo.status==200){
            getAllusersFromserver()
        }
    }
    deleteInfo.open("DELETE","http://localhost:3000/users/"+users[i].id);
    deleteInfo.send()
}