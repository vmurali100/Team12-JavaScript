var gindex = null;
function edituser(i) {
  gindex = i;
  document.getElementById("fname").value = users[i].fname;
  document.getElementById("lname").value = users[i].lname;
  document.getElementById("update").style.display="block";
  document.getElementById("create").style.display="none";
}
