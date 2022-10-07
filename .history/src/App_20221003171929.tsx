import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Components/Header';

function App() {

  // const bgColor = useColorModeValue()

  return (
    <ChakraProvider>
      <Box className="App">
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
