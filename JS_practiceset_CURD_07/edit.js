var gindex;
function edituser(i) {
  var selectedUser = UserDetails[i];
  // for(a in selectedUser){
    gindex = i;
    document.getElementById("inputEmail4").value = selectedUser.Email;
    document.getElementById("inputPassword4").value = selectedUser.Password;
    document.getElementById("inputAddress").value = selectedUser.Address;
    document.getElementById("inputAddress2").value = selectedUser.Address2;
    document.getElementById("inputCity").value = selectedUser.City;
    document.getElementById("inputState").value = selectedUser.State;
    document.getElementById("inputZip").value = selectedUser.Zip;
    
    document.getElementById("Createbtn").style.display = "none";
    document.getElementById("Updatebtn").style.display = "block";
    // console.log(i);
    
    allRadios.forEach((element) => {
    if (element.value == UserDetails[i].gender) {
      element.checked = true;
    }
  });
  
  allSubjects.forEach((subj) => {
    subj.checked = false;
  });

  allSubjects.forEach((element) => {
    selectedUser.subjects.forEach((subj) => {
      if (element.value == subj) {
        element.checked = true;
      }
    });
  });
}
