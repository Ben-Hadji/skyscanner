import React from 'react';
import './App.css';
import NavBar from './components/elements/Navbar'
import Wrapper from './components/styles/Wrapper'
import Airports from './components/elements/Airports';
import Vols from './components/elements/Vols';
import DetailsVol from './components/elements/DetailsVols'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FC = (Props) => {
  return (
      <div >
          <BrowserRouter>
              <NavBar />
              <Wrapper>
                {/*<Airports/>*/}
                {/*      <Vols />*/}
                      {/*<DetailsVol/>*/}
                  <Routes>
                      <Route path="/" element={<Airports />} />
                      <Route path="/vols" element={<Vols />} />
                      <Route path="/details" element={<DetailsVol/> } />
                  </Routes>
              </Wrapper>
          </BrowserRouter>
    </div>
  );
}

export default App;
