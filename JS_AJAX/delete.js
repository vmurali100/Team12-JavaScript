function deleteUser(i){
    console.log(users[i])
    var delData = new XMLHttpRequest()
    delData.onreadystatechange = function(){
        if(delData.status == 200 && delData.readyState == 4){
            console.log("User Delete Success Fully")
            Clickhere()
        }
    }
    delData.open("DELETE","http://localhost:3000/allusers/"+users[i].id)
    delData.send();
}
