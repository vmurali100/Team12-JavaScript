function deleteUser(i){
    allUsers = allUsers.filter((user,index)=>{
        return i !==index
    })

    displayUsers(allUsers)
}