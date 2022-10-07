import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children, FC } from 'react';

function Wrapper:FC<{ children:JSX.Element } >() {
  return (
    <Box>
      <Center>
{children}
      </Center>
    </Box>
  );
}

export default Wrapper;
