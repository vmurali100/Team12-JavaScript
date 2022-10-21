
var allDetailsArray=[];
var gIndex=null
var allGender=document.getElementsByName("gender");
var allSubjs=document.getElementsByName("subjects");

function submitForm(){
    var users={
        fName:document.getElementById("fName").value,
        lName:document.getElementById("lName").value,
        email:document.getElementById("email").value,
        pwd:document.getElementById("pwd").value,
        gender:"",
        subjects:[]
    }
    allGender.forEach((element)=>{
        if(element.checked){
            users.gender=element.value
        }
    })
    allSubjs.forEach((element)=>{
        //console.log(element.checked)
        if(element.checked){
            users.subjects.push(element.value)
        }
    })
    allDetailsArray.push(users)
    displayDataInTable(allDetailsArray)
    clearForm()
}

function clearForm(){
        document.getElementById("fName").value=""
        document.getElementById("lName").value=""
        document.getElementById("email").value=""
        document.getElementById("pwd").value=""

        allGender.forEach((element)=>{
            element.checked=false;
        })
        allSubjs.forEach(element=>{
            element.checked=false;
        })
}

function displayDataInTable(allDetailsArray){
    document.querySelector("tbody").innerHTML="";

    allDetailsArray.forEach((user,i)=>{
        var myTr=document.createElement("tr");
            for(a in user){
                var myTd=document.createElement("td")
                    myTd.innerHTML=user[a]
                myTr.appendChild(myTd)
            }

            var myEditTd=document.createElement("td")
                var editBtn=document.createElement("button")
                    editBtn.innerHTML="EDIT"
                    editBtn.setAttribute("onclick","editUser("+i+")")
                    editBtn.setAttribute("class","btn btn-outline-warning")
                myEditTd.appendChild(editBtn)
            myTr.appendChild(myEditTd)

            var myDelTd=document.createElement("td")
                var deleteBtn=document.createElement("button")
                deleteBtn.innerHTML="DELETE"
                deleteBtn.setAttribute("onclick","deleteUser("+i+")")
                deleteBtn.setAttribute("class","btn btn-outline-danger")
                myDelTd.appendChild(deleteBtn)
            myTr.appendChild(myDelTd)
        document.querySelector("tbody").appendChild(myTr)
    })
}

function deleteUser(i){
    allDetailsArray=allDetailsArray.filter((del,index)=>{
       console.log(i)
        //return allDetailsArray[i].email !==del.email
        return i !== index
    })
    displayDataInTable(allDetailsArray)
    clearForm()
}
var index=0
function editUser(i){
    var index=i;
    var selectedUser=allDetailsArray[i]
    // for(a in selectedUser){
    //     document.getElementById(a).innerHTML=selectedUser[a]
    // }
        document.getElementById("fName").value=selectedUser.fName
        document.getElementById("lName").value=selectedUser.lName
        document.getElementById("email").value=selectedUser.email
        document.getElementById("pwd").value=selectedUser.pwd
        
        allGender.forEach((gen)=>{
            if(gen.value==selectedUser.gender){
                gen.checked=true
            }
        })
       
        selectedUser.subjects.forEach((sub)=>{
            allSubjs.forEach((element)=>{
                if(element.value==sub){
                    element.checked=true
                }
            })
        })
document.getElementById("subButton").style.display="none"
document.getElementById("updateButton").style.display="block"
}

function updateForm(){
    var users={
        fName:document.getElementById("fName").value,
        lName:document.getElementById("lName").value,
        email:document.getElementById("email").value,
        pwd:document.getElementById("pwd").value,
        gender:"",
        subjects:[]
    }
    allGender.forEach((element)=>{
        if(element.checked){
            users.gender=element.value
        }
    })
    allSubjs.forEach((element)=>{
        //console.log(element.checked)
        if(element.checked){
            users.subjects.push(element.value)
        }
    })
    allDetailsArray[index]=users
    clearForm()
    displayDataInTable(allDetailsArray)
    document.getElementById("subButton").style.display="block"
    document.getElementById("updateButton").style.display="none"
}