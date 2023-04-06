var gindex;
function edituser(i) {
  var selectedUser = allUsers[i];
  // for(a in selectedUser){
  gindex = i;
  document.getElementById("createBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "block";
  document.getElementById("urname").value = selectedUser.Username;
  document.getElementById("email").value = allUsers.Email;
  document.getElementById("pass").value = selectedUser.Password;
  document.getElementById("compass").value = selectedUser.confirmpassword;
  document.getElementById("fname").value = selectedUser.FristName;
  document.getElementById("lname").value = selectedUser.LastName;
  document.getElementById("nname").value = selectedUser.Nickname;
  document.getElementById("web").value = selectedUser.Website;
  document.getElementById("bio").value = selectedUser.Bio;

  // console.log(i);

  allRadios.forEach((element) => {
    if (element.value == allUsers[i].gender) {
      element.checked = true;
    }
  });

  allSubjects.forEach((subj) => {
    subj.checked = false;
  });

  allSubjects.forEach((element) => {
    selectedUser.Subjects.forEach((sub) => {
      if (element.value == sub) {
        element.checked = true;
      }
    });
  });
}
