import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Box,
  ChakraProvider,
  color,
  ColorModeScript,
  useColorMode,
} from '@chakra-ui/react';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.colorConfig.initialColorMode} />
      <Box className="App">
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
