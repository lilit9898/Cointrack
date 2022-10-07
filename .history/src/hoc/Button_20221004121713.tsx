import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const Button: React.FC<BoxProps> = ({ children, ...style }) => {
  return (
    <Button {...style}>
      <Center>{children}</Center>
    </Button>
  );
};

export default Button;
