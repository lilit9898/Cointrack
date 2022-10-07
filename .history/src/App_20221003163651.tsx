import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from './Components/Header';

function App() {
  return (
    <ChakraProvider>
      <Box className='App'>
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
