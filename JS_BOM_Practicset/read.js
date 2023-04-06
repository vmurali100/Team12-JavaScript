Allusers = []
function getusers(){
    fetch("http://localhost:3000/users").then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        Allusers=data
        localStorage.setItem("allusers",JSON.stringify(Allusers))
        displayUser(Allusers)
    })
}
getusers()
 function displayUser(Allusers){
    Allusers.forEach((user,i) => {
        console.log(user);
        var myTr=document.createElement("tr")
        for(a in user){
            if(a !== "address" && a !== "company"){
            var myTd=document.createElement("td")
            myTd.innerHTML=user[a]
            myTr.appendChild(myTd)
            console.log(a);
        }
    }
    var editTd = document.createElement("td")
    var editbtn = document.createElement("button")
    editbtn.innerHTML="Edit"
    editTd.appendChild(editbtn)
    myTr.appendChild(editTd)
    
    var deleteTd = document.createElement("td")
    var deletebtn = document.createElement("button")
    deletebtn.innerHTML="Delete"
    deletebtn.setAttribute("onclick","DeleteUser("+i+")")
    deleteTd.appendChild(deletebtn)
    myTr.appendChild(deleteTd)

    document.querySelector("tbody").appendChild(myTr)
});
 }