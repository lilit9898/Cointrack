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
      <HomePage></HomePage>
      </Box>
    </ChakraProvider>
  );
}

export default App;
