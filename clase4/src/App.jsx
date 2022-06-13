import React from 'react'
import { NavBar } from "./components/NavBar";
import {ItemListContainer} from './components/ItemListContainer';
import "boxicons";


function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer title="Zapatillas" description="Las mejores de la zona"/>
    </div>
  );
}

export default App;