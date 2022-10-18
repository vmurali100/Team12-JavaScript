var allStudentsList=[];

var allRadios=document.getElementsByName("gender");

function regForm(){
    var students={
        name:document.getElementById("name").value,
        fatherName:document.getElementById("fatherName").value,
        address:document.getElementById("address").value,
        state:document.getElementById("state").value,
        city:document.getElementById("city").value,
        dob:document.getElementById("dob").value,
        pinCode:document.getElementById("pinCode").value,
        course:document.getElementById("course").value,
        email:document.getElementById("email").value
    }
    allRadios.forEach((element)=>{
        if(element.checked){
            students.gender=element.value
        }
    })
    console.log(students)
    clearForm()
    allStudentsList.push(students)
    displayDataInTable(allStudentsList)
}

function clearForm(){
    document.getElementById("name").value="";
    document.getElementById("fatherName").value="";
    document.getElementById("address").value="";
    document.getElementById("state").value="";
    document.getElementById("city").value="";
    document.getElementById("dob").value="";
    document.getElementById("pinCode").value="";
    document.getElementById("course").value="";
    document.getElementById("email").value=""
}

function displayDataInTable(students){
    document.getElementById("myTbody").innerHTML=""
    allStudentsList.forEach((students,i)=>{
        var myTr=document.createElement("tr")
        for(a in students){
            var myTd=document.createElement("td")
                myTd.innerHTML=students[a]
            myTr.appendChild(myTd)
        }
            var editTd = document.createElement("td");
                var editBtn = document.createElement("button");
                    editBtn.innerHTML = "Edit";
                    editBtn.setAttribute("onclick","editUser("+i+")")
                        editBtn.setAttribute("class","btn btn-success")
                    editTd.appendChild(editBtn);
            myTr.appendChild(editTd)

            var deleteTd = document.createElement("td");
            var deleteBtn = document.createElement("button");

            deleteBtn.innerHTML = "Delete";
                deleteBtn.setAttribute("onclick","deleteUser("+i+")")
                    deleteBtn.setAttribute("class","btn btn-danger")
                deleteTd.appendChild(deleteBtn);
                myTr.appendChild(deleteTd)
        document.getElementById("myTbody").appendChild(myTr)
    })
    
}
function deleteUser(i){
    allStudentsList.filter((students,index)=>{
        return i !==index
    })   
    displayDataInTable(allStudentsList)
}
var gIndex="";
function editUser(){
    var students={
        name:document.getElementById("name").value,
        fatherName:document.getElementById("fatherName").value,
        address:document.getElementById("address").value,
        state:document.getElementById("state").value,
        city:document.getElementById("city").value,
        dob:document.getElementById("dob").value,
        pinCode:document.getElementById("pinCode").value,
        course:document.getElementById("course").value,
        email:document.getElementById("email").value
    }
    allRadios.forEach((element)=>{
        if(element.checked){
            students.gender=element.value
        }
    })
    allStudentsList[gIndex]=students;
    console.log(students)
    clearForm()
    allStudentsList.push(students)
    displayDataInTable(allStudentsList)
}