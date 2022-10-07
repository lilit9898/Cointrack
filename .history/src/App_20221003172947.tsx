import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, ChakraProvider, ColorModeScript, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Components/Header';
import theme from './Theme/theme';

function App() {
  return (
    <ChakraProvider >
      <ColorModeScript initialColorMode={theme.colorConfig} />
      <Box className="App">
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
