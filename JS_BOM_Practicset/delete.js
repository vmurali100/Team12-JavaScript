function DeleteUser(i){
    // console.log("Delete User called");
    window.location.href="delete.html?"+Allusers[i].id
    
}
var url = window.location.href
var userid = url.substring(url.indexOf("?")+1)
var Allusers =JSON.parse(localStorage.getItem("allusers"))
var userstobedelete = Allusers.find((user)=>{
    return user.id == userid
})

for(a in userstobedelete){
    var myLi = document.createElement("li")
    myLi.innerHTML=userstobedelete[a]
}

console.log("Users to be Delete...",userstobedelete);
 

function confirmdelete(){
    fetch("http://localhost:3000/users/"+userstobedelete.id,{method:"DELETE"}).then()
    localStorage.setItem("allusers",JSON.stringify(newusers))
    window.location.href="index.html"
}