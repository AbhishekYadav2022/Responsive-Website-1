import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
  render() {
    return (
      <>
         <div className='card'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.paragraph}</p>
            <div className='link'>
                <h2>{this.props.link}</h2>
            </div>
         </div> 
      </>
    )
  }
}

export default Card