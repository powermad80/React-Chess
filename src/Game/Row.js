import React, { Component } from 'react';
import Tile from './Tile.js';

class TileRow extends Component {
    constructor(props) {
        super(props);
        this.tiles = this.props.tiles;
    }

    render() {
        var tileList = this.tiles.map(function(tiles) {
            return <Tile xpos={tiles.xpos} ypos={tiles.ypos} contains={tiles.contains} color={tiles.color}></Tile>
        });

        return(
            <div classname="rows">
            {tileList}
            </div>
        )
    }
}

export default TileRow;