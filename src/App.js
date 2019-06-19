import React, { Component } from 'react';
import Hello from './Hello';
import Goodbye from './Goodbye';


class App extends Component{
  render () {
    return (
      <div>
        <Hello greeting={"How's it going?"}/>
        <Goodbye salutation={"Addios"}/>
      </div>
    );
  }
}

export default App;


