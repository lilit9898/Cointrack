import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

const  Wrapper:React.FC<BoxProps>() {
  return (
    <Box>
      <Center>
{children}
      </Center>
    </Box>
  );
}

export default Wrapper;
