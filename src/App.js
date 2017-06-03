import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>ReactJS</h1>
        <h3>Fian <Cinta /> Feby</h3>
        <Tombol>Ini Button</Tombol>
      </div>
    )
  }
}

const Tombol = (props) => <button>{props.children}</button>

class Cinta extends React.Component {
  render(){
    return (
      <div>
        <span>&hearts;</span>
      </div>
    )
  }
}

export default App;
