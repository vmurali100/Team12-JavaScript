var index;
function edituser(i){
    index=i;
    var selectedUser=users[i]
    document.getElementById("actname").value=users[i].ActionName;
    document.getElementById("email").value=users[i].UserEmail ;
    document.getElementById("pass").value=users[i].Password;
    document.getElementById("fname").value = users[i].FristName;
    document.getElementById("lname").value = users[i].LastName;
    document.getElementById("disname").value = users[i].DispalyName;
    document.getElementById("website").value = users[i].Website;
    document.getElementById("role").value = users[i].UserRole;

    allRadios.forEach((element) => {
        if (element.value == users[i].gender) {
          element.checked = true;
        }
      });
    
      allSubjects.forEach((subj) => {
        subj.checked = false;
      });
    
      allSubjects.forEach((element) => {
        selectedUser.Subjects.forEach((sub, i) => {
          if (element.value == sub[i]) {
            element.checked = true;
          }
        });
      });
      document.getElementById("updateBtn").style.display = "block"
      document.getElementById("createBtn").style.display = "none"

}