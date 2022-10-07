import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const MainLayout: React.FC<BoxProps> = ({ children, ...style }) => {
  return (
    <Box>
      <AppHeader />
      {children}
      
    </Box>
  );
};

export default MainLayout