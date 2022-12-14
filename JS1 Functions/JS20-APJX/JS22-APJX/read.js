var player=[]
function getdatafromserver(){
    var getInfo =new XMLHttpRequest()
  getInfo.onreadystatechange=function(){
    if(getInfo.readyState ==4 && getInfo.status ==200){
        console.log(getInfo.response)
         player=JSON.parse(getInfo.response)
        displayplayer(player)

        
    }
  }
  var api_url=" http://localhost:3000/player"
  getInfo.open("GET",api_url);
  getInfo.send()
}

function displayplayer(player){
    document.querySelector("tbody").innerHTML=""
    console.log(player.length)
    player.forEach((player,i) => {
        var myTr =document.createElement("tr")
        for(a in player){
            var myTd=document.createElement("td")
            myTd.innerHTML=player[a]
            myTr.appendChild(myTd)
        }

        var editTd=document.createElement("td")
        var editButton=document.createElement("button")
        editButton.setAttribute("onclick","editplayer("+i+")")
        editButton.innerHTML="Edit"
        editTd.appendChild(editButton)
        myTr.appendChild(editTd)

        var deleteTd=document.createElement("td")
        var deleteButton=document.createElement("button")
        deleteButton.setAttribute("onclick","deleteplayer("+i+")")
        deleteButton.innerHTML="Delete"
        deleteTd.appendChild(deleteButton)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)

        
    });

    

}
