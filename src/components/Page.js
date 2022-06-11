import React, { Component } from "react";

class Page extends Component {
    pageStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '1.5rem',
        
    }
    headingStyle = {
        color: 'white'
    }
  render() {
    return (
      <>
        <div className="container" style={this.pageStyle}>
            <h1 style={this.headingStyle}>This is heading.</h1>
            <p style={this.paraStyle}>This is a paragraph.</p>
            <ul>
                <li>First Item</li>
                <li>Second Item</li>
                <li>Third Item</li>
                <li>Fourth Item</li>
            </ul>
        </div>
      </>
    );
  }
}

export default Page;
