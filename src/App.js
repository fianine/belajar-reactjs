import React from 'react';
import PropTypes from 'prop-types';

// const App = () => <h1>Belajar ReactJS</h1>

class App extends React.Component {

  constructor(){
    super();
    this.state = {txt: "Belajar state"}
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    let txt = this.props.iniPropsText
    return (
      <div>
        <h1>ReactJS App</h1>
        <Tambahin update = {this.update.bind(this)}/>
        <p>{this.state.txt}</p>
        <p>{txt}</p>
      </div>
    )
  }
}

const Tambahin = (iniState) => <input type="text" onChange={iniState.update} />

App.propTypes = {
  text: React.PropTypes.string.isRequired,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  text: "Ini adalah default dari text"
}

// class App extends React.Component {
//   render(){
//     return React.createElement('h1','null','Hello');
//   }
// }

export default App;
