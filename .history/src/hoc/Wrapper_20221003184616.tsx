import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const Wrapper: React.FC<BoxProps> = ({ children, ...style }) => {
  return (
    <Box w={{base: "100%", sm: "500px"}} {...style}>
      <Center>{children}</Center>
    </Box>
  );
};

export default Wrapper