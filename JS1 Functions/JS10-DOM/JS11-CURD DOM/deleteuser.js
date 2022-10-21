function deleteuser(i){
allusers =allusers.filter((user,index)=>{
    return i !==index
})
displayusers(allusers)
}