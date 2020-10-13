import React from 'react';
import ReactDOM from 'react-dom';
import Celebrities from './Celebrities/Celebrities.jsx';

import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <>
        <Celebrities
          url="http://home/day27-git-basics/a%20list%20of%20celebrities/API/"
        />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
