function deleteuser(i){
   alluser=alluser.filter((value , index)=>{
      return i !==index
   })
   displayuser(alluser)
}