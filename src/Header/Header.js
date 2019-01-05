import React, { Component } from 'react';
import Instructions from '../Instructions/Instructions.js';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showInstructions: false
    }
  }
  
  toggleShowInstructions = () => {
    this.setState({ showInstructions: !this.state.showInstructions })
  }

  render() {
    return (
      <header className="App-header">
        <h1>FlexboxQuiz</h1>
        <i className="far fa-question-circle" onClick={this.toggleShowInstructions}></i>
        <Instructions 
          showInstructions={this.state.showInstructions}
          toggleShowInstructions={this.toggleShowInstructions}/>
      </header>
    );
  }
}

export default Header;