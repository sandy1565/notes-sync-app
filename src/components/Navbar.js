import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const { toggleNote,loginUser,loginButton, showNote } = this.props;
    
    return (
      <div className="nav-container">
        <div className="nav-logo">Notes</div>
        <div className="nav-button" onClick={() => toggleNote()} >
          { showNote ? 'Cancel' :  '+ Note' }
        </div> 
        <div className="nav-button" onClick={() => loginUser()} > 
            { loginButton ? 'Cancel' : 'Login'}
        </div>
      </div>
    );
  }
}

export default Navbar;