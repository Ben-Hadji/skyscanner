import React from 'react';
import './App.css';
import NavBar from './components/elements/Navbar'
import Wrapper from './components/styles/Wrapper'
import Airports from './components/elements/Airports';
import Vols from './components/elements/Vols';
import Vol from './components/elements/Vol'
import DetailsVol from './components/elements/DetailsVols'

const App: React.FC = (Props) => {
  return (
      <div >
          <NavBar />
      <Wrapper>
        <Airports/>
        {/*      <Vols />*/}
              {/*<DetailsVol/>*/}
              <Vol/>
      </Wrapper>
    </div>
  );
}

export default App;
