function upadateuser() {
  var user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmpassword: document.getElementById("confirmpassword").value,
    displayname: document.getElementById("displayname").value,
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    nickname: document.getElementById("nickname").value,
    website: document.getElementById("website").value,
    bio: document.getElementById("bio").value,
    jabber: document.getElementById("jabber").value,
    aloim: document.getElementById("aloim").value,
    yahooim: document.getElementById("yahooim").value,
    gender: "",
  };

  allRadios.forEach((element) => {
    if (element.checked) {
      user.gender = element.value;
    }
  });

  allusers[gindex] = user;
  document.getElementById("upadateBtn").style.display = "none";
  document.getElementById("createBtn").style.display = "Block";
  displayUsers(allusers);
  clearform();
}
