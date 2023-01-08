import React from 'react';
import './App.css';
import Wrapper from './components/styles/Wrapper'
import Airports from './components/elements/Airports';
import Vols from './components/elements/Vols';

const App: React.FC = (Props) => {
  return (
    <div className="App">
      <Wrapper>
        <Airports/>
        <Vols/>
      </Wrapper>
    </div>
  );
}

export default App;
