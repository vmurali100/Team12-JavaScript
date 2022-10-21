function deleteuser(i){
    alluser=alluser.filter((user,index)=>{
        return i !==index})
        display(alluser)
    }
