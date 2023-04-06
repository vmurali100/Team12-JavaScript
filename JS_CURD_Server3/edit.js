var gIndex = null;
function editUser(i) {
  gIndex = i;

  document.getElementById("urname").value = users[i].Username;
  document.getElementById("email").value = users[i].Email;
  document.getElementById("pass").value = users[i].Password;
  document.getElementById("compass").value = users[i].confirmpassword;
  document.getElementById("fname").value = users[i].FirstName;
  document.getElementById("lname").value = users[i].LastName;
  document.getElementById("nname").value = users[i].Nickname;
  document.getElementById("web").value = users[i].Website;
  document.getElementById("bio").value = users[i].Bio;

  document.getElementById("updateBtn").style.display = "block";
  document.getElementById("addBtn").style.display = "none";
}

function updateUser() {
  var user = {
    Username: document.getElementById("urname").value,
    Email: document.getElementById("email").value,
    Password: document.getElementById("pass").value,
    confirmpassword: document.getElementById("compass").value,
    FirstName: document.getElementById("fname").value,
    LastName: document.getElementById("lname").value,
    Nickname: document.getElementById("nname").value,
    Website: document.getElementById("web").value,
    Bio: document.getElementById("bio").value,
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
