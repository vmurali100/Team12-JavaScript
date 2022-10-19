function deleteUser(i){
    custo = custo.filter((user,index)=>{
        return i!==index
    })
    displayUser(custo)
}