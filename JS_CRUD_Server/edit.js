var gIndex = null;
function editUser(i) {
  gIndex = i;

  document.getElementById("inputEmail4").value=users[i].Email;
  document.getElementById("inputPassword4").value=users[i].Password;
  document.getElementById("inputAddress").value=users[i].Address;
  document.getElementById("inputAddress2").value=users[i].Address2;
  document.getElementById("inputCity").value=users[i].City;
  document.getElementById("inputState").value=users[i].State;
  document.getElementById("inputZip").value=users[i].Zip;

  document.getElementById("Updatebtn").style.display = "block";
  document.getElementById("Createbtn").style.display = "none";
}

function updateUser() {
  var user = {
        Email:document.getElementById("inputEmail4").value,
        Password:document.getElementById("inputPassword4").value,
        Address:document.getElementById("inputAddress").value,
        Address2:document.getElementById("inputAddress2").value,
        City:document.getElementById("inputCity").value,
        State:document.getElementById("inputState").value,
        Zip:document.getElementById("inputZip").value,
  };

  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function () {
    if (sendInfo.readyState == 4 && sendInfo.status == 201) {
      console.log("User Updated Successfully");
      getAllUsersFromServer();
    }
  };

  sendInfo.open("PUT", "http://localhost:3000/users/" + users[gIndex].id);
  sendInfo.setRequestHeader("Content-Type", "application/json");
  sendInfo.send(JSON.stringify(user));
}
