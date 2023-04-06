function updateUser() {
  var user = {
    ActionName: document.getElementById("actname").value,
    UserEmail: document.getElementById("email").value,
    Password: document.getElementById("pass").value,
    FristName: document.getElementById("fname").value,
    LastName: document.getElementById("lname").value,
    DispalyName: document.getElementById("disname").value,
    Website: document.getElementById("website").value,
    UserRole: document.getElementById("role").value,
    gender: "",
    Subjects: [],
  };
  var allRadios = document.getElementsByName("gender");
  allRadios.forEach((element) => {
    if (element.checked) {
      user.gender = element.value;
    }
  });
  var allSubjects = document.getElementsByName("subjects");

  allSubjects.forEach((element) => {
    if (element.checked) {
      user.Subjects.push(element.value);
    }
  });
  users[index] = user;
  document.getElementById("createBtn").style.display = "block";
  document.getElementById("updateBtn").style.display = "none";
  displayUsers(users);
  clearform();
}
// displayUsers;
