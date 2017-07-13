import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

class Testing extends React.Component {
  render() {
    return (
      <div>
        <h1>React Starter Kit.</h1>
      </div>
    );
  }
}

ReactDOM.render(<Testing />, mountNode);