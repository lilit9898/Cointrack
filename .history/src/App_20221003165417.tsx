import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Redux/Header';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
      </div>
    </ChakraProvider>
  );
}

export default App;
