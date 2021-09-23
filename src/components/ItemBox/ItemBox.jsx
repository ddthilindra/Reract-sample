import React, { Component } from "react";
import "./ItemBoxStyle.css";
import ItemImage from "./ItemImage";


class ItemBox extends Component {
  render() {
    return (
      <div className="box" align="center">
        <h2>{this.props.title}</h2>
        <ItemImage image={this.props.image}/>
        <h2 style={{color:'red', fontStyle:'bold'}}>{`Rs.${this.props.price}`}</h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default ItemBox;
