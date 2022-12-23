import React, { Component } from 'react'

export default class Police extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Police: {
                id: "",
                name: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: "",
            },
            allusers: [
                {
                    id: "1",
                    name: "jaga",
                    username: "mallela",
                    email: "mallela7524@gmail.com",
                    password: "8976",
                    confirmpassword: "8976",
                    message: "jhhxnx",
                },
                {
                    id: "2",
                    name: "gaffa",
                    username: "ssce",
                    email: "ee",
                    password: "98",
                    confirmpassword: "98",
                    message: "jannu",
                },
                {
                    id: "3",
                    name: "kdcdc",
                    username: "433",
                    email: "r33",
                    password: "3r33",
                    confirmpassword: "3r33",
                    message: "mkslsd",
                },
            ],
            editIndex: null,
        };
    }
    handlechange = (e) => {
        var newPolice = { ...this.state.Police };
        newPolice[e.target.name] = e.target.value;
        this.setState({ Police: newPolice });
    };
    adduser = () => {
        console.log(this.state.Police);
        var newAllusers = [...this.state.allusers];
        newAllusers.push(this.state.Police);
        this.setState({ allusers: newAllusers });
        this.clearform();
    };
    clearform = () => {
        var newForm = {
            id: "",
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: "",
        };
        this.setState({ Police: newForm });
    };
    edituser = (usr, i) => {
        this.setState({ Police: usr, editIndex: i })
    }
    deleteuser = (usr) => {
        var lastestusers = this.state.allusers.filter((myuser) => myuser.email != usr.email);
        this.setState({ allusers: lastestusers });
    };
    
    updateuser = () => {
        var lastestusers = [...this.state.allusers];
        lastestusers[this.state.index] = this.state.person;
        this.setState({ allusers: lastestusers, editIndex: null });
        this.clearform()
    };

    render() {
        return (
            <div>
                <form >
                    <label htmlFor="name">Name :</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => {
                        this.handlechange(e)
                    }} /> {""}<br />
                    <label htmlFor="username">Username  :</label>
                    <input type="text" name="username" value={this.state.username} onChange={(e) => {
                        this.handlechange(e)
                    }} />{""}<br />
                    <label htmlFor="email">Email :</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => {
                        this.handlechange(e)
                    }} />{""}<br />
                    <label htmlFor="password">Password :</label>
                    <input type="text" name="password" value={this.state.password} onChange={(e) => {
                        this.handlechange(e)
                    }} />{""}<br />
                    <label htmlFor="confirmpassword">Confirm Password :</label>
                    <input type="text" name="confirmpassword" value={this.state.confirmpassword} onChange={(e) => {
                        this.handlechange(e)
                    }} />{""}<br />
                    <label htmlFor="message">Message :</label>
                    <input type="text" name="message" value={this.state.message} onChange={(e) => {
                        this.handlechange(e)
                    }} />{""}<br />
                    {this.state.editIndex !== null ? (
                        <button type='button' onClick={this.updateuser} className="btn btn-primary">
                            Update User
                        </button>
                    ) : (
                        <button type='button' onClick={this.adduser} className="btn btn-primary">
                            Add User
                        </button>

                    )}

                </form>
                <hr />
                <table className="table">   
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th >Name</th>
                            <th >UserName</th>
                            <th >Email</th>
                            <th >Password</th>
                            <th>Confirm Password</th>
                            <th>Message</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allusers.map((usr, i) => (<tr key={i}>
                            <td>{usr.name}</td>
                            <td>{usr.username}</td>
                            <td>{usr.email}</td>
                            <td>{usr.password}</td>
                            <td>{usr.confirmpassword}</td>
                            <td>{usr.message}</td>
                            <td>
                                <button className='btn btn-warning' onClick={() => { this.edituser(usr, i) }}>Edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { this.deleteuser(usr) }}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
