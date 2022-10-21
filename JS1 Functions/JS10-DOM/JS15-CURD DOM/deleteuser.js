function deleteuser(i){
    users=users.filter((user,index)=>{
return i !==index
    })
    displayusers(users)
}