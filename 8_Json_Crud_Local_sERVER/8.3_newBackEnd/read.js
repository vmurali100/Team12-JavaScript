var users=[]
function getAllUsersFormServer(){
    var getUsers=new XMLHttpRequest();
    getUsers.onreadystatechange=function(){
        if(getUsers.readyState==4 && getUsers.status==200){
            users=JSON.parse(getUsers.response)
            console.log(users)
            displayUsers(users)
        }
    }
    getUsers.open("GET","http://localhost:3000/users")
    getUsers.send()
}
function displayUsers(users){
    document.getElementById("myTBody").innerHTML="";
    users.forEach((user,i) => {
        var myTr=document.createElement("tr")
            for(a in user){
                var myTd=document.createElement("td")
                    myTd.innerHTML=user[a]
                myTr.appendChild(myTd)
            }

            var myEditTd=document.createElement("td")
                var myEditBtn=document.createElement("button")
                    myEditBtn.innerHTML="EDIT"
                    myEditBtn.setAttribute("onclick","editUser("+i+")")
                    myEditTd.appendChild(myEditBtn)
            myTr.appendChild(myEditTd)

            var mydelTd=document.createElement("td")
                var myDelBtn=document.createElement("button")
                    myDelBtn.innerHTML="DELETE"
                    myDelBtn.setAttribute("onclick","delUser("+i+")")
                    mydelTd.appendChild(myDelBtn)
            myTr.appendChild(mydelTd)
            
        document.getElementById("myTBody").appendChild(myTr)
    });
}
getAllUsersFormServer()