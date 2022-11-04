var users=[]
function getAllusersFromserver(){
    var getUsers=new XMLHttpRequest()
    getUsers.onreadystatechange=function(){
        if(getUsers.readyState==4 && getUsers.status==200){
            users=JSON.parse(getUsers.response)
            displayUsers(users)
            console.log(users)
        }
    }
    getUsers.open("GET","http://localhost:3000/users");
    getUsers.send()
}
function displayUsers(users){
    document.querySelector("tbody").innerHTML=""
    users.forEach((user,i)=>{
        var mytr=document.createElement("tr")  
        for (a in user){
            var mytd=document.createElement("td");
            mytd.innerHTML=user[a]
            mytr.appendChild(mytd)
        }
        var  editTd=document.createElement("td");
            var editbtn=document.createElement("button")
                editbtn.setAttribute("onclick","editUser("+i+")")
                editbtn.innerHTML="EDIT"
            editTd.appendChild(editbtn)
        mytr.appendChild(editTd)

        var  delTd=document.createElement("td");
            var delbtn=document.createElement("button")
                delbtn.setAttribute("onclick","deleteUser("+i+")")
                delbtn.innerHTML="DELETE";
            delTd.appendChild(delbtn)
        mytr.appendChild(delTd)

        document.querySelector("tbody").appendChild(mytr)
    })
}
getAllusersFromserver()