import React, { Component } from 'react';
import Ball from './../ball/Ball';
import './Lottery.css';

export default class Lottery extends Component {

   static defaultProps = {
      title: 'Lottery Ticket',
      numBalls: 5,
      maxNum: 70
   }

   constructor(props) {
      super(props);
      this.state = { numbers: Array.from({ length: this.props.numBalls }) };

      this.handleButtonClick = this.handleButtonClick.bind(this);
   };
   generateNumbers() {
      /*  this.setState(curState => ({
          numbers: curState.numbers.map(
             number => Math.floor(Math.random() * this.props.maxNum) + 1
          )
       })); */

      let newNumbers = [];
      for (let i = 0; i < this.props.numBalls; i++) {
         let random = Math.floor(Math.random() * this.props.maxNum) + 1;
         if (newNumbers.includes(random)) {
            i--;
         } else {
            newNumbers.push(random);
         }
      }
      this.setState((state) => {
         return { numbers: newNumbers };
      });

   }

   handleButtonClick() {
      this.generateNumbers();

   };

   render() {
      return (
         <section className='Lottery'>
            <h1 className='Lottery__title'>{this.props.title}</h1>
            <div className="Lottery__balls">
               {this.state.numbers.map((number, index) => (
                  <Ball key={index} number={number} />
               ))}
            </div>
            <div className="Lottery__button">
               <button onClick={this.handleButtonClick}>Generate</button>
            </div>
         </section>
      );
   };
};
