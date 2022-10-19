function deleteuser(i){
    users=users.filter((usr)=>{
        return users[i].username!==usr.username
    })
displayUser(users)
}