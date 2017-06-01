import React from 'react';
import PropTypes from 'prop-types';

// const App = () => <h1>Belajar ReactJS</h1>

class App extends React.Component {
  render(){
    let inivariable = this.props.text
    return (
      <div>
        <h1>ReactJS App</h1>
        <p>{inivariable}</p>
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// class App extends React.Component {
//   render(){
//     return React.createElement('h1','null','Hello');
//   }
// }

export default App;
