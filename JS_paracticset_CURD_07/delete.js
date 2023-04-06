function deleteuser(i ){
    users=users.filter((users,index)=>{
        return i !==index
    })
    displayUsers(users)
}