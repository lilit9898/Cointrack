import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Flex>
      <Box>
        <Image src='/images/logo.svg' alt='Cointrack'></Image>
      </Box>
     
      <Box></Box>
    </Flex>
  );
};
