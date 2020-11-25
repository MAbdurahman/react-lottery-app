import React, { Component } from 'react'
import './Ball.css';

export default class Ball extends Component {
   render() {
      return (
         <figure className='Ball'>
            {this.props.number}
         </figure>
      );
   };
};
