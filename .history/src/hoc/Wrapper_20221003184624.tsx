import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const Wrapper: React.FC<BoxProps> = ({ children, ...style }) => {
  return (
    <Box fontSize={ } {...style}>
      <Center>{children}</Center>
    </Box>
  );
};

export default Wrapper