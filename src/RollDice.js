import React, { Component } from 'react';
import Die from './Die';
import "./RollDice.css";


class RollDice extends Component {

    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'two', 
            winner1 : false,
            winner2: true, 
            tie: false, 
            rolling: false
        }
        this.roll =  this.roll.bind(this);
    }
    roll() {
        const side1 = Math.floor(Math.random() * this.props.sides.length);
        const side2 = Math.floor(Math.random() * this.props.sides.length);
        const newDie1 = this.props.sides[side1];
        const newDie2 = this.props.sides[side2];
const newWinner1 = side1 > side2;
const newWinner2 = side2 > side1;
const tie1 = side2 == side1;
        this.setState({die1 :newDie1, die2 :newDie2, winner1: newWinner1, winner2:newWinner2, tie: tie1, rolling: true});

        setTimeout(()=>{
            this.setState({rolling: false})
        }, 500) 
    
    }


    render() {


        return (
            <div>
<div className="Die"> 
                <Die face={this.state.die1}   rolling={this.state.rolling} />
        {  this.state.tie !== true &&  <h2>  {this.state.winner1 ? "Winner": "Loser" } </h2> }
                </div>
                <div className="Die"> 
                <Die face={this.state.die2} rolling={this.state.rolling} />
        {  this.state.tie !== true &&  <h2>  {this.state.winner2 ? "Winner": "Loser" } </h2> }
                </div>
        <div> 
     
            {this.state.tie &&  <h2>Tie</h2> }
            <button onClick={this.roll} className="rolling-btn" disabled={this.state.rolling}>{this.state.rolling? "Rolling..." : "Roll Dice" }</button> 
            
            </div>
               
            </div>



        )
    }
}
export default RollDice;