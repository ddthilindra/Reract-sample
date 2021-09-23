import React, { Component } from 'react';
import './ItemBoxStyle.css'
class ItemImage extends Component {
    render() {
        return (
            <div>
                <img className="prod-img" src={this.props.image} alt="item"/>
            </div>
        );
    }
}

export default ItemImage;
