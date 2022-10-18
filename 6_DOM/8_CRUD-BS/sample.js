var allUserData=[]
var gIndex=null;
var radioBtns=document.getElementsByName("gender");
function subForm(){
    var user={
        email:document.getElementById("email").value,
        pwd:document.getElementById("pwd").value,
        gender:""

    }

    radioBtns.forEach(data=>{
        if(data.checked){
            user.gender=data.value
        }
    })
    allUserData.push(user)
    displayData(allUserData)
    clearForm()
}
function clearForm(){
    document.getElementById("email").value="";
    document.getElementById("pwd").value="";
}
function displayData(allUserData){
    document.getElementById("myTbody").innerHTML="";

    allUserData.forEach((user,i)=>{
        var myTr=document.createElement("tr")

            for(a in user){
                var myTd=document.createElement("td")
                    myTd.innerHTML=user[a]
                myTr.appendChild(myTd)
            }
            var editTd=document.createElement("td")
                editBtn=document.createElement("button")
                    editBtn.innerHTML="EDIT"
                    editBtn.setAttribute("onclick","editUser("+i+")")
                    editBtn.setAttribute("class","btn btn-info")
                editTd.appendChild(editBtn)
            myTr.appendChild(editTd)

            var delTd=document.createElement("td")
                delBtn=document.createElement("button")
                    delBtn.innerHTML="DELETE"
                    delBtn.setAttribute("onclick","deleteUser("+i+")")
                    delBtn.setAttribute("class","btn btn-danger")
                delTd.appendChild(delBtn)
            myTr.appendChild(delTd)

        document.getElementById("myTbody").appendChild(myTr)
    })
}
function deleteUser(i){
    allUserData=allUserData.filter((user,index)=>{
        return i !==index
    })
    displayData(allUserData)
}

var gIndex=null;
function editUser(i){
    gIndex=i;
    console.log(i)
    document.getElementById("email").value=allUserData[i].email;
    document.getElementById("pwd").value=allUserData[i].pwd;
    radioBtns.forEach((element)=>{
        if(element.value==allUserData[i].gender){
            element.checked=true
        }
    })
    document.getElementById("updateBtn").setAttribute("class","d-block btn btn-primary")
    document.getElementById("subBtn").setAttribute("class","d-none")    
}
function updateForm(){
    var user={
        email:document.getElementById("email").value,
        pwd:document.getElementById("pwd").value,
        gender:""

    }

    radioBtns.forEach(data=>{
        if(data.checked){
            user.gender=data.value
        }
    })
    document.getElementById("updateBtn").setAttribute("class","d-none")
    document.getElementById("subBtn").setAttribute("class","d-block btn btn-success") 
    
    allUserData[gIndex]=user;
    displayData(allUserData)
    clearForm()
        
}
