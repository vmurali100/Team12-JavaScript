var gIndex=null
function editUser(i){
    gIndex=i;
    document.getElementById("name").value=users[i].name,
    document.getElementById("email").value=users[i].email,
    document.getElementById("arrivalDate").value=users[i].arrivalDate,
    document.getElementById("departureDate").value=users[i].departureDate,
    document.getElementById("flightNo").value=users[i].flightNo,
    document.getElementById("splReq").value=users[i].splReq

    document.getElementById("submitBtn").setAttribute("class","btn btn-outline-success d-none mx-5")
    document.getElementById("updateBtn").setAttribute("class","btn btn-outline-warning mx-5")
}
function updateUser(){
    var user={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        arrivalDate:document.getElementById("arrivalDate").value,
        departureDate:document.getElementById("departureDate").value,
        flightNo:document.getElementById("flightNo").value,
        splReq:document.getElementById("splReq").value
}
}