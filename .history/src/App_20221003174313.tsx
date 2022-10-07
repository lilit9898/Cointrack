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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <Box className="App">
        <Header />
      </Box>
    </ChakraProvider>
  );
}

export default App;
