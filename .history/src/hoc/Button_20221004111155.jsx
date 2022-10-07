import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const Button: React.FC<BoxProps> = ({ children, ...style }) => {
  return (
    <Box {...style}>
      <Center>{children}</Center>
    </Box>
  );
};

export default per;