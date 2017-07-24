require('./click-function.js');

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Testing App</h1>
      <p>paragraph</p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);