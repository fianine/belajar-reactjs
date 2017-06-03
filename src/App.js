import React from 'react';

class App extends React.Component {
  render(){
    return (
      <Title text="ReactJS"/>
    )
  }
}

const Title = (props) => <h1>{props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`${propName} kosong`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} terlalu pendek`)
    }
  }
}

export default App;
