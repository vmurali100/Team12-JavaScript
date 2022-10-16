var allradios = document.getElementsByName("gender");
var gindex=null
var alluser = [
  {
    firstname: "Revanth",
    lastname: "Reddy",
    birthday: "02-09-2000",
    Email: "revanthreddy@gmail.com",
    phone: 9353610141,
    gender:"Male",
  },
  {
   firstname: "Revanth",
   lastname: "Reddy",
   birthday: "02-09-2000",
   Email: "revanthreddy@gmail.com",
   phone: 9353610141,
   gender:"Male",
 },
 {
   firstname: "Revanth",
   lastname: "Reddy",
   birthday: "02-09-2000",
   Email: "revanthreddy@gmail.com",
   phone: 9353610141,
   gender:"Male",
 },
];
function registeruser() {
  var user = {
    firstname: document.getElementById("fname").value,
    lastname: document.getElementById("lname").value,
    birthday: document.getElementById("birthday").value,
    Email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };
  console.log(user);

  allradios.forEach((element) => {
    if (element.checked) {
      user.gender = element.value;
    }
  });
  console.log(user);
  clearuser();
  alluser.push(user);
  displayuser(alluser);
}
displayuser(alluser)