var gIndex=null;
function edituser(i){
    console.log(i)
    document.getElementById("createBtn").style.display="none"
    document.getElementById("updateBtn").style.display="block"
    gIndex=i;
    document.getElementById("username").Value=custo[i].username;
    document.getElementById("email").Value=custo[i].emali;
    document.getElementById("password").Value=custo[i].password;
    document.getElementById("cpassword").Value=custo[i].cpassword;
    document.getElementById("dname").Value=custo[i].dname;
    document.getElementById("fname").Value=custo[i].fname;
    document.getElementById("lname").Value=custo[i].lname;
    document.getElementById("nname").Value=custo[i].nname;
    document.getElementById("website").Value=custo[i].website;
    document.getElementById("boi").Value=custo[i].bio;
    document.getElementById("jabber").Value=custo[i].jabber;
    document.getElementById("aol").Value=custo[i].aol;
    document.getElementById("yahoo").Value=custo[i].yahoo;
    allradios.forEach((abc)=>{
        if(abc.value == custo[i].gender){
            abc.checked=true
        }
    })
}