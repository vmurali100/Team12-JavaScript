function deleteuser(i){
    var deleteInfo =new XMLHttpRequest()
    deleteInfo.onreadystatechange =function(){
        if(deleteInfo.readyState == 4&& deleteInfo.status == 200){
            getAllUsersFromServer()
        }
    }
    deleteInfo.open("DELETE","http://localhost:3000/custermers/"+users[i].id);
    deleteInfo.send()
    }