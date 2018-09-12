import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.xpos = props.xpos;
        this.ypos = props.ypos;
        this.contains = props.contains;
        this.style = {
            background: this.isOdd(props.xpos, props.ypos)
        }
    }

    isOdd = (xpos, ypos) => {
        if ((xpos + ypos) % 2 === 0) {
            return "white";
        }
        else {
            return "grey";
        }
    }

    render() {
        return (
            <button className="tile" style={this.style}>{this.contains}</button>
        )
    }
}

export default Tile;