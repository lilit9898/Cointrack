import { Box, Button, Flex, Image } from '@chakra-ui/react';
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
        <Box>
          <Text>Sign in</Text>
        </Box>
        <Box>
          <Button>Start a Free Trial</Button>
        </Box>
        <Box>
          <Image ></Image>
        </Box>
      </Flex>
    </Flex>
  );
};
