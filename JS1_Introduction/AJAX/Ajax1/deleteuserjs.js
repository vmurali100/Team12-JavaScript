function deleteuser(i){
   var delinfo=new XMLHttpRequest();
   delinfo.onreadystatechange=function(){
    if(delinfo.readyState==4 && delinfo.status==200){
        readuser()
    }
   }
   delinfo.open("DELETE","http://localhost:3000/users/"+users[i].id)
   delinfo.send()
}