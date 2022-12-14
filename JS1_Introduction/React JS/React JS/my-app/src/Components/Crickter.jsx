import { Component } from "react";

class Crickter extends Component {
    constructor() {
        super()
        this.state = {
            ShowHeading: true,
            ShowImages: true,
            Welcome: "King is form in cricket",
            Crickterplayerdetailes: {
                fname: "Virat",
                lname: "Kohli",
                state: "Benguluru",
            },
            Centuries: ["Aus", "Bng", "Wi", "Sl", "Pak", "Sa", "Eng", "Nz", "Afg"],
            Images: ["https://images.news18.com/ibnlive/uploads/2022/10/collage-maker-30-oct-2022-06.13-pm-166713384716x9.jpg",
                "https://static.toiimg.com/photo/msid-95062568/95062568.jpg"],
        }
    }
    render() {
        return (<div>
            {this.state.ShowHeading && <h2>{this.state.Welcome}</h2>}
            <hr />
            <ul>
                {Object.values(this.state.Crickterplayerdetailes).map((val, i) => {
                    return <li key={i}>{val}</li>
                })}


            </ul>
            <hr />
            <ul>
                {this.state.Centuries.map((val, i) =>
                    <li key={i}>{val}</li>)}
            </ul>
            <div>
                {/* {this.state.ShowImages && this.state.Images.map((val, i) =>
                 <img src={val} alt="" key={i} style={{width:150,height:150}} />)} */}
                 {this.state.ShowImages ?this.state.Images.map((val, i) =>
                 <img src={val} alt="" key={i} style={{width:150,height:150}} />): <p>There are no images</p>}
            </div>

        </div>
        );

    }
}
export default Crickter