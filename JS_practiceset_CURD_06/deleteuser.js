function deleteuser(i){
    allUsers=allUsers.filter((user,index)=>{
        // return allUsers[i].email!==user.email
        return i !==index
    })
    displayUsers(allUsers)
}