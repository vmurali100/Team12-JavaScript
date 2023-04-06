var allSubjects = document.getElementsByName("subjects");
var allRadios = document.getElementsByName("gender");
function clearform() {
  document.getElementById("actname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pass").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("disname").value = "";
  document.getElementById("website").value = "";
  document.getElementById("role").value = "";

  allRadios.forEach(function (ele) {
    ele.checked = false;
  });
  allSubjects.forEach((element) => {
    element.checked = false;
  });
}
