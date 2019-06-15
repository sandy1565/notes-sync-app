import React, { Component } from 'react';

class Error extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.resetError();
    }, 2000);
  }

  render() {
    const { error } = this.props;
    return (
      <div className="flash-container">
        {error} 
      </div>
    );
  }
}

export default Error;