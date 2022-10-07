import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Flex>
      <Box>
        <Image src="/images/logo.svg" alt="Cointrack"></Image>
      </Box>
      <Flex>
        <Box>
          <Text>Home</Text>
        </Box>
        <Box>
        <Text>Pricing</Text>
        </Box>
        <Box>
        <Text>Portfolio</Text>
        </Box>
        <Box>
        <Text>Futures</Text>
        </Box>
      </Flex>
      <Flex>
        <Box><Text></Text></Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </Flex>
  );
};
