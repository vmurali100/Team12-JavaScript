function createUser(){
    var user={
        fName:document.getElementById("fName").value,
        lName:document.getElementById("lName").value
        
    }
    var radioBtns=document.getElementsByName("gender");
    radioBtns.forEach((item) => {
        if(item.checked){
            console.log(item.value)
        }
    });

    console.log(radioBtns)
    console.log(user)   
}
