import React, { Component } from "react";

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
      lastname: 'ddthilindra'
    });
  };

  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name} {this.state.lastname}
        </h1>
        <h2>{`Hello ${this.state.name} ${this.state.lastname}`}</h2>
        <button onClick={this.changeName} >Change Name</button>
      </div>
    );
  }
}

export default MainComponent;
