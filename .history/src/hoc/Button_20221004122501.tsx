import { Box, BoxProps, Center,Button } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const Button: React.FC<BoxProps> = ({ children, ...style }) => {
  return <But {...style}>{children}</But>;
};

export default Button;
