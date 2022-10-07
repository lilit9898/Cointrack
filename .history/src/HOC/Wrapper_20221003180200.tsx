import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

export const Wrapper: React.FC<BoxProps> = ({ children, ...style }) => {
  return (
    <Box {...style}>
      <Center>{children}</Center>
    </Box>
  );
};
