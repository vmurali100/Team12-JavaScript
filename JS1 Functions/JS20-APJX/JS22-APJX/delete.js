function deleteplayer(i) {
    var deleteInfo = new XMLHttpRequest()
    deleteInfo.onreadystatechange = function () {
        if (deleteInfo.readyState == 4 && deleteInfo.status == 200) {
            console.log("user deleteted successfully")
        }
    }
    deleteInfo.open("DELETE", "http://localhost:3000/player" +player[i].id);
    deleteInfo.send()
}