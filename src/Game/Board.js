import React, { Component } from 'react';
import Tile from './Tile.js';
import TileRow from './Row.js';

class Board extends Component {

    constructor() {
        super();
        this.state = {
            tiles: this.initTiles()
        }
    }

    initTiles() {
        var tileList = [];
        var tileId = 1;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                tileList.push({
                    id: tileId,
                    xpos: i,
                    ypos: j,
                    contains: "nothing"
                })
                tileId++;
            }
        }

        return tileList;
    }

    renderTile(x, y) {
        return (
            <Tile xpos={x} ypos={y}></Tile>
        )
    }

    renderRow(y) {

        return (
            <div>
                {this.renderTile(1, y)}
                {this.renderTile(2, y)}
                {this.renderTile(3, y)}
                {this.renderTile(4, y)}
                {this.renderTile(5, y)}
                {this.renderTile(6, y)}
                {this.renderTile(7, y)}
                {this.renderTile(8, y)}
            </div>
        )
    }

    render() {
        var rows = [];
        for (var i = 0; i < 8; i++) {
            rows.push(this.state.tiles.slice(i * 8, 8 * i));
        }

        return (
           <div class="rows">
                <TileRow tiles={rows[0]}></TileRow>
                <TileRow tiles={rows[1]}></TileRow>
                <TileRow tiles={rows[2]}></TileRow>
                <TileRow tiles={rows[3]}></TileRow>
                <TileRow tiles={rows[4]}></TileRow>
                <TileRow tiles={rows[5]}></TileRow>
                <TileRow tiles={rows[6]}></TileRow>
                <TileRow tiles={rows[7]}></TileRow>
            </div>
        )
    }

    /*render() {
        return (
            <div class="rows">
                {this.renderRow(1)}
                {this.renderRow(2)}
                {this.renderRow(3)}
                {this.renderRow(4)}
                {this.renderRow(5)}
                {this.renderRow(6)}
                {this.renderRow(7)}
                {this.renderRow(8)}
            </div>
        )
    }*/
}

export default Board;