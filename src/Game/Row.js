import React, { Component } from 'react';
import Tile from './Tile.js';

class TileRow extends Component {
    constructor(props) {
        super(props);
        this.tiles = this.props.tiles;
    }

    render() {
        var tileList = this.tiles.map(function(id) {
            return <Tile xpos={this.xpos} ypos={this.ypos} contains={this.contains}></Tile>
        });

        return(
            <div classname="rows">
            {tileList}
            </div>
        )
    }
}

export default TileRow;