import React from 'react';
import './App.css';
import Lottery from './components/lottery/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      {/* <Lottery title='Daily Lotto' maxNum={9} numBalls={3} /> */}
    </div>
  );
}

export default App;
