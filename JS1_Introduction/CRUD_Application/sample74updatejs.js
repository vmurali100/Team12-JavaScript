function updateuser(){
    var user = {
        firstname: document.getElementById("fname").value,
        lastname: document.getElementById("lname").value,
        birthday: document.getElementById("birthday").value,
        Email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
      };
      alluser[gindex] = user;
            displayuser(alluser)
            clearuser()
            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
}