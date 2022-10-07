import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const Button: React.FC<BoxProps> = ({ children, ...style }) => {
  return (
    <Button {...style}>
     {children}
    </Button>
  );
};

export default Button;
