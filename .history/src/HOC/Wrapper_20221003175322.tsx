import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children } from 'react';

function Wrapper: FC<{ children:BoxProps } >() {
  return (
    <Box>
      <Center>
{children}
      </Center>
    </Box>
  );
}

export default Wrapper;
