import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Components/Header';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header/>
     </Box>
    </ChakraProvider>
  );
}

export default App;
