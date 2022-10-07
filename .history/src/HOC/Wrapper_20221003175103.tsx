import { Box, Center } from '@chakra-ui/react';
import React from 'react';

function Wrapper() {
  return (
    <Box>
      <Center>
        {children}
      </Center>
    </Box>
  );
}

export default Wrapper;
