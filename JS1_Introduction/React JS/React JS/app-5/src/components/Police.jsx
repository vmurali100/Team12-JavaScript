import React, { Component } from 'react'

export default class Police extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Police: {
                name: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: "",
            },
            allusers: [],
        };
    }
    handlechange = (e) => {
        var newPolice = { ...this.state.Police };
        newPolice[e.target.name] = e.target.value;
        this.setState({ Police: newPolice });
    };
    adduser = () => {
        console.log(this.state.Police);
        var newAllusers =  [...this.state.allusers];
        newAllusers.push(this.state.Police);
        this.setState({ allusers: newAllusers });
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
                    <button type='button' onClick={this.adduser}>
                        Add User
                    </button>
                </form>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th >Name</th>
                            <th >UserName</th>
                            <th >Email</th>
                            <th >Password</th>
                            <th>Confirm Password</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allusers.map((usr) => <tr>
                            <td>{usr.name}</td>
                            <td>{usr.username}</td>
                            <td>{usr.email}</td>
                            <td>{usr.password}</td>
                            <td>{usr.confirmpassword}</td>
                            <td>{usr.message}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}
