import { Component } from "react";

class Custemer extends Component {
    constructor() {
        super()
        this.state = {
            Custemerdetalies: {
                CustemerName: "Gopi",
                CustemerEmail: "gopi@gmail.com",
                CustemerRole: "Worker",
            },
            showcustemer: false
        }
    }
    showcustemerInformation = () => {
        console.log("showcustemerInformation is called")
        //this.State({ showcustemer: true })
        let newCustemer = {
            CustemerName: "jambu",
            CustemerEmail: "jambu54@gmail.com",
            CustemerRole: "manger",
        }
        this.setState({ showcustemer: true, Custemerdetalies: newCustemer })
    }
    render() {
        return (
            <div>
                <h2>Welcome to custermers</h2>
                <button onClick={this.showcustemerInformation}>
                    Show Custemer detailes</button>
                {/* <p>{this.state.showcustemer && this.state.Custemerdetalies.CustemerName}</p> */}
                {/* {this.state.showcustemer ? c :<p>custermers information is not found</p>} */}
                { this.state.showcustemer ? <div>
                    <p>{this.state.Custemerdetalies.CustemerName}</p>
                    <p>{this.state.Custemerdetalies.CustemerEmail}</p>
                    <p>{this.state.Custemerdetalies.CustemerRole}</p>
                </div> : <p>custermers information is not found</p>}


            </div>
        );
    }
}
export default Custemer