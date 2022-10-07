import logo from './logo.svg';
import './App.css';
import {
  Box,
  ChakraProvider,
  color,
  ColorModeScript,
  useColorMode,
} from '@chakra-ui/react';
import theme from '../theme/theme';
import { Header } from '../Components/Header';

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
