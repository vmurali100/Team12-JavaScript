var users=[]
function getAllUsersFromServer(){
    var getUsers=new XMLHttpRequest();
    getUsers.onreadystatechange=function(){
        if(getUsers.readyState==4 && getUsers.status==200){
            users=JSON.parse(getUsers.response);
            console.log(users)
            displayUser(users)
        }
    }
    getUsers.open("GET", "http://localhost:3000/users")
    getUsers.send()
}
function displayUser(users){
    document.querySelector("tbody").innerHTML="";
    users.forEach((user,i) => {
        var myTr=document.createElement("tr")
            for(a in user){
                var myTd=document.createElement("td");
                    myTd.innerHTML=user[a]
                myTr.appendChild(myTd)
            }
            var myEditTd=document.createElement("td")
            var editButton=document.createElement("button")
                editButton.innerHTML="EDIT"
                editButton.setAttribute("class","btn btn-outline-primary")
                editButton.setAttribute("onclick","editUser("+i+")")
            myEditTd.appendChild(editButton)
            myTr.appendChild(myEditTd)

            var myDelTd=document.createElement("td")
            var delButton=document.createElement("button")
                delButton.innerHTML="DELETE"
                delButton.setAttribute("class","btn btn-outline-danger")
                delButton.setAttribute("onclick","deleteUser("+i+")")
                myDelTd.appendChild(delButton)
            myTr.appendChild(myDelTd)
            
        document.querySelector("tbody").appendChild(myTr)
    });
}
getAllUsersFromServer()