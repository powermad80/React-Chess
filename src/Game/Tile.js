import React, { Component } from 'react';
import BlackPawn from './Pieces/Pawn_Black.png';
import WhitePawn from './Pieces/Pawn_White.png';
import BlackRook from './Pieces/Rook_Black.png';
import WhiteRook from './Pieces/Rook_White.png';
import BlackQueen from './Pieces/Queen_Black.png';
import WhiteQueen from './Pieces/Queen_White.png';
import BlackKnight from './Pieces/Knight_Black.png';
import WhiteKnight from './Pieces/Knight_White.png';
import BlackBishop from './Pieces/Bishop_Black.png';
import WhiteBishop from './Pieces/Bishop_White.png';
import BlackKing from './Pieces/King_Black.png';
import WhiteKing from './Pieces/King_White.png';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.xpos = props.xpos;
        this.ypos = props.ypos;
        this.contains = props.contains;
        this.color = props.color;
        this.style = {
            background: this.isOdd(props.xpos, props.ypos)
        }
    }

    tileContent(content, color) {

        var isBlack = (color === "Black") ? true : false;

        switch (content) {
            case ("none"):
                return "";
            
            case ("Pawn"):
                return (isBlack) ? BlackPawn : WhitePawn;
            
            case ("Rook"):
                return (isBlack) ? BlackRook : WhiteRook;

            case ("Queen"):
                return (isBlack) ? BlackQueen : WhiteQueen;

            case ("Knight"):
                return (isBlack) ? BlackKnight : WhiteKnight;

            case ("Bishop"):
                return (isBlack) ? BlackBishop : WhiteBishop;

            case ("King"):
                return (isBlack) ? BlackKing : WhiteKing;

            default:
                return "error";
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
            <button className="tile" style={this.style}>
            <img src={this.tileContent(this.contains.piece, this.color)} className="piece" alt={this.contains.piece} />
            </button>
        )
    }
}

export default Tile;