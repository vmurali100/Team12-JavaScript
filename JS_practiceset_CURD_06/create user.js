var allUsers = [];

function createuser() {
  var user = {
    Username: document.getElementById("urname").value,
    Email: document.getElementById("email").value,
    Password: document.getElementById("pass").value,
    confirmpassword: document.getElementById("compass").value,
    FristName: document.getElementById("fname").value,
    LastName: document.getElementById("lname").value,
    Nickname: document.getElementById("nname").value,
    Website: document.getElementById("web").value,
    Bio: document.getElementById("bio").value,
    gender: "",
    Subjects:[]
  };
  var allRadios = document.getElementsByName("gender");
  allRadios.forEach((element) => {
    if (element.checked) {
      user.gender = element.value;
    }
  });
  var allSubjects=document.getElementsByName("subj");

  allSubjects.forEach((element)=>{
    if(element.checked){
      user.Subjects.push(element.value);
    }
  })
  console.log(user);
  clearform();
  allUsers.push(user);
  displayUsers(allUsers);
}
