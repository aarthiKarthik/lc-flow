
import React, { Component } from 'react';
import './App.css';
import LineChart from './LineChart';

class App extends Component {
  createFakeData(){
    // This function creates data that doesn't look entirely random
    const data = [0, 1, 3, 5, 2, 3, 9, 10]
/*
    for (let x = 0; x <= 10; x++) {
      const random = Math.random()*10;
      const temp = data.length > 0 ? data[data.length-1].y : 50;
      //const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
      //data.push(random)
    }*/
    return data;
  }

  render() {
    return (
      <div className="App">             
        <LineChart data={this.createFakeData()} color={'#FFB300'}  />
      </div>
    );
  }
}

export default App;