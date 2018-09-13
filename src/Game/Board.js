import React, { Component } from 'react';
import TileRow from './Row.js';

var startingLayout = [
    {piece: "Rook"},
    {piece: "Knight"},
    {piece: "Bishop"},
    {piece: "Queen"},
    {piece: "King"},
    {piece: "Bishop"},
    {piece: "Knight"},
    {piece: "Rook"}
];

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
                    contains: {piece: "none"},
                    color: "",
                    onClick: {}
                })
                tileId++;
            }
        }

        for (i = 0; i < 8; i++) {
            tileList[i].contains = startingLayout[i];
            tileList[i].color = "White";
            tileList[63 - i].contains = startingLayout[i];
            tileList[63 - i].color = "Black";
            tileList[i + 8].contains = {piece: "Pawn", firstMove: true};
            tileList[i + 8].color = "White";
            tileList[55 - i].contains = {piece: "Pawn", firstMove: true};
            tileList[55 - i].color = "Black";
        }

        return tileList;
    }

    render() {
        var rows = [];
        for (var i = 0; i < 8; i++) {
            rows.push(this.state.tiles.slice(i * 8, 8 * (i + 1)));
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
}

export default Board;