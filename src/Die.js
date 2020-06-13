import React, { Component } from 'react';
import './Die.css';


class Die extends Component {
    render(){
        return (
     <div> 
            <i className={`fas fa-dice-${this.props.face} dice ${this.props.rolling && 'shaking'}`}></i> 
       
        {/* {this.props.isTie ? <h2>Tie </h2> : <h2>{this.props.isWinner? "Winner" : "Loser"} </h2> } */}
         
         </div>
        )
    }
}
export default Die;