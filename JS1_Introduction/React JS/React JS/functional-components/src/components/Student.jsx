import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Student = () => {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    getAllUsers();
  }, []);


const handleChange = (e) => {
  let newUser = { ...user };
  newUser[e.target.name] = e.target.value;
  setUser(newUser);
};
const handleSubmit = () => {
  axios.post("http://localhost:3202/Rohit", user).then(() => {

    getAllUsers();
    clearForm()
  });
};
const getAllUsers = () => {
  axios.get("http://localhost:3202/Rohit").then((response) => {
    console.log(response.data);
    setUsers(response.data);
  });
};
const editUser = (usr) => {
  setIsEdit(true)

  setUser(usr);
};
const deleteUser = (usr) => {
  axios.delete("http://localhost:3202/Rohit/" + usr.id).then(() => {
    getAllUsers();
  });
};
const handleUpdate = (usr) => {
  axios.put("http://localhost:3202/Rohit/" + user.id, user).then(() => {
    getAllUsers();
    setIsEdit(false)
    clearForm()
  });
};
const clearForm = () => {
  setUser({
    email: "",
    password: "",
  })

}



  return (
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlfor="exampleInputEmail1" className="form-label" >Email address</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={(e) => { handleChange(e); }} />

        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputPassword1" className="form-label" >Password</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => { handleChange(e); }} />
        </div>
        {isEdit ? (<button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>) : (
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        )

        }


      </form>
      <hr />
      <table classname="table">
        <thead>
          <tr>
            <th >Id</th>
            <th >Email</th>
            <th >Password</th>
            <th >Edit</th>
            <th >Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, i) => (<tr key={i}>
            <td>{usr.id}</td>
            <td>{usr.email}</td>
            <td>{usr.password}</td>
            <td >
              <button className='btn btn-warning' onClick={() => { (editUser(usr)) }}>Edit</button>
            </td>
            <td>
              <button className='btn btn-danger' onClick={() => { (deleteUser(usr)) }}>Delete</button>
            </td>
          </tr>))}
        </tbody>
      </table>
      {/* <button onClick={() => { setage(65) }}>change age</button>
      <h2>{age}</h2> */}
    </div>
  );
};

export default Student;