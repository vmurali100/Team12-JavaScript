function clearform() {
    document.getElementById("username").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("cpassword").value = ""
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("nname").value = ""
    document.getElementById("dname").value = ""
    document.getElementById("website").value = ""
    document.getElementById("bio").value = ""
    document.getElementById("jabber").value = ""
    document.getElementById("aol").value = ""
    document.getElementById("yahoo").value = ""
    allRadios.forEach((element) => {
        element.checked = false
    })
    allSubjects.forEach((element) => {
        element.checked = false
    })
}