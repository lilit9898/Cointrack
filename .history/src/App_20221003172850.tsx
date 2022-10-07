import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Components/Header';
import theme from './Theme/theme';

function App() {
  return (
    <ChakraProvider initialColor>
      <Box className="App">
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
