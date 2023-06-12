function displayuser(users) {
  document.querySelector("tbody").innerHTML="";
  users.forEach((user, i) => {
    var mytr = document.createElement("tr");
    for (a in user) {
      var mytd = document.createElement("td");
      mytd.innerHTML = user[a];
      mytr.appendChild(mytd);
    }

    var edittd = document.createElement("td");
    var editbtntd = document.createElement("button");
    editbtntd.innerHTML = "EDIT";
    edittd.appendChild(editbtntd);
    mytr.appendChild(edittd);
    editbtntd.setAttribute("class", "btn btn-warning");
    editbtntd.setAttribute("onclick", "edituser(" + i + ")");

    var deletetd = document.createElement("td");
    var deletebtntd = document.createElement("button");
    deletebtntd.innerHTML = "DELETE";
    deletetd.appendChild(deletebtntd);
    mytr.appendChild(deletetd);
    deletebtntd.setAttribute("class", "btn btn-danger");
    deletebtntd.setAttribute("onclick", "deleteuser(" + i + ")");

    document.querySelector("tbody").appendChild(mytr);
  });
}
