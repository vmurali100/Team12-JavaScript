var gIndex =null;
function edituser(i){
    console.log(i)
    document.getElementById("createBtn").style.display="none"
    document.getElementById("updateBtn").style.display="block"
    gIndex=i;
    document.getElementById("fname").value=usres[i].fname;
    document.getElementById("lname").value=usres[i].lname;
    document.getElementById("adress").value=usres[i].adress;
    document.getElementById("city").value=usres[i].city
    document.getElementById("pincode").value=usres[i].pincode;
    document.getElementById("phone").value=usres[i].phone;


    allRadios.forEach((element)=>{
        if(element.value == allUsers[i].gender){
            element.checked=true
        }
    })
}
