import React from 'react';
import './App.css';

const App = () => {

    const d01 = new Date()
    console.log('d01', d01)

    const d02 = new Date(2018, 11, 24, 10, 33, 30, 0)
    console.log('d02', d02)

    const d03 = new Date("2015-03-25T12:00:00Z")
    console.log('d03', d03)



    return (
      <div className="App">
        <p>ISO date format: YYYY-MM-DDTHH:MM:SS</p>
      </div>
    )
}

export default App;
