import React from 'react';

class App extends React.Component {
  plus = {
    
  }


  apple =()=>{
    this.setState({사과});
  }
  orange=()=>{
    this.setState({오랜지});
  }
  banana=()=>{
    this.setState({바나나});
  }
  App() {
    return ( 
    <div>
      <h1>어떤 과일을 좋아하나요? {this.plus}</h1>
      <button onClick={this.apple}>사과</button>
      <button onClick={this.orange}>오랜지</button>
      <button onClick={this.banana}>바나나</button> 
    </div> 
  )
  }
}

export default App;
