function clickme(){
    var allUsers=[]
    var user={
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value
    }


var allRadioBtns=document.getElementsByName("gender");

allRadioBtns.forEach(function(gen){
    if(gen.checked){
        user.gender=gen.value
    }
    displayUsers(user)
    allUsers.push(user)
    console.log(allUsers);
})
}
function displayUsers(users){
    document.querySelector("tbody").innerHTML=""
    users.forEach(function(user,i){
        var myTr=document.createElement("tr")
        var myTd1=document.createElement("td")
        myTd1.innerHTML=user.fname
        var myTd2=document.createElement("td")
        myTd2.innerHTML=user.lname

        myTr.appendChild(myTd1)
        myTr.appendChild(myTd2)
        document.querySelector("tbody").appendChild(myTr)

    })
}