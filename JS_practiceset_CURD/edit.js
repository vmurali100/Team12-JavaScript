var index;

function edituser(i) {
  index = i;
  var selectedUser = allusers[i];
  document.getElementById("Fname").value = selectedUser.Fname;
  document.getElementById("Lname").value = selectedUser.LastName;
  document.getElementById("patronymic").value = selectedUser.Patronymic;
  document.getElementById("email").value = selectedUser.Email;
  document.getElementById("password").value = selectedUser.Password;
  document.getElementById("age").value = selectedUser.Age;
  document.getElementById("author").value = selectedUser.Author;
  document.getElementById("bio").value = selectedUser.Bio;

  allRadios.forEach((element) => {
    if (element.value == allusers[i].Gender) {
      element.checked = true;
    }
  });

  allSubjects.forEach((subj) => {
    subj.checked = false;
  });

  allSubjects.forEach((ele) => {
    selectedUser.Subjects.forEach((subj) => {
      if (ele.value == subj) {
        ele.checked = true;
      }
    });
  });
//   console.log(i);
}
