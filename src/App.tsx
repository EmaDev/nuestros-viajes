import React from 'react';
import { Carrusel } from './components/Carrusel';
import { Header } from './components/Header';
import { HeaderSelecionador } from './components/HeaderSelecionador';
import { Loading } from './components/Loading';
import { ViajeContextProvider } from './context/ViajeContext';
import ViajesApp from './ViajesApp';

function App() {

  return (
    <ViajeContextProvider>
      <ViajesApp/>
    </ViajeContextProvider>
  );
}

export default App;
