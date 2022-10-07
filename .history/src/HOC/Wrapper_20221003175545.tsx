import { Box, BoxProps, Center } from '@chakra-ui/react';
import React, { Children } from 'react';

function WrapperFC<{ children:JSX.Element } >() {
  return (
    <Box>
      <Center>
{children}
      </Center>
    </Box>
  );
}

export default Wrapper;
