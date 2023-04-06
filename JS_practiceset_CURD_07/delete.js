function deleteuser(i){
    UserDetails =UserDetails.filter((user,index)=>{
        return i !==index
    })
    displayUsers(UserDetails)
    }