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
import { Header } from './Components/Header';
import theme from './Theme/theme';

function App() {
  const { colorMode:ColorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.colorConfig.initialColorMode} />
      <Box className="App">
        <Header colorMode={colorMode} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
