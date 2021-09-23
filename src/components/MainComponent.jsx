import React, { Component } from "react";
import ItemBox from "./ItemBox/ItemBox";

import car from '../images/vehicle/car.jpg'

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "deshitha",
      lastname: "thilindra",
    };
  }

  changeName = () => {
    this.setState({
      lastname: "ddthilindra",
    });
  };

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name} {this.state.lastname}
        </h1>
        <h2>{`Hello ${this.state.name} ${this.state.lastname}`}</h2>
        <button onClick={this.changeName}>Change Name</button>
        <div style={{ display: "flex" }}>
          <ItemBox title="Museratti" price="40000" image={car} desc="n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"/>
          <ItemBox title="BMW" price="50000" image={car} desc="n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"/>
          <ItemBox title="TOYOTA" price="60000" image={car} desc="n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"/>
          <ItemBox title="GTR" price="30000" image={car} desc="n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"/>
          <ItemBox title="Supra" price="40000" image={car} desc="n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia"/>
        </div>
      </div>
    );
  }
}

export default MainComponent;
