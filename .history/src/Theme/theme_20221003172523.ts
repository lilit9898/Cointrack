import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const colorConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ colorConfig });

export default theme;
