import { Box, Center } from '@chakra-ui/react';
import React, { Children } from 'react';

function Wrapper:FC< children >() {
  return (
    <Box>
      <Center>
{Children}
      </Center>
    </Box>
  );
}

export default Wrapper;
