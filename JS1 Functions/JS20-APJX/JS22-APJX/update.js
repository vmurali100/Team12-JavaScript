var gindex = null
function editplayer(i) {
    gindex = i;
    document.getElementById("fname").value = players[i].fname
    document.getElementById("lname").value = players[i].lname
    document.getElementById("tel").value = players[i].tel

    document.getElementById("address").value = players[i].address
    document.getElementById("city").value = players[i].city
    document.getElementById("state").value = players[i].state
    document.getElementById("zip").value = players[i].zip

    document.getElementById("updateBtn").style.display = "block"
    document.getElementById("addBtn").style.display = "none"
}
function updateplayer() {
    var user={
    fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
            tel: document.getElementById("tel").value,
                address: document.getElementById("address").value,
                    city: document.getElementById("city").value,
                        zip: document.getElementById("zip").value
}
var sendInfo = new XMLHttpRequest()
sendInfo.onreadystatechange = function () {
    if (sendInfo.readyState == 4 && sendInfo.status == 201) {
        console.log("User Upated Successfully")
        getdatafromserver()
    }
}

    sendInfo.open("PUT", "http://localhost:3000/player" + players[gindex].id);
    sendInfo.setRequestHeader("content-Type", "application/json");
    sendInfo.send(JSON.stringify(user))
}