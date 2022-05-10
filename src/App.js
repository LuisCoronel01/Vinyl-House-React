import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import List from './components/list'
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar>
      </NavBar>
      <ItemListContainer>
      </ItemListContainer>

    </div>
  );
}

export default App;