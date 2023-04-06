function deleteuser(i){
    allusers =allusers.filter((user,index)=>{
        return i !==index
    })
    displayUsers(allusers)
    }