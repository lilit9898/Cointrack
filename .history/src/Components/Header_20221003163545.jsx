import { Box, Button, Flex, Image. } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Flex>
      <Box>
        <Image
          src="/images/logo.svg"
          alt="Cointrack"
          w="162px"
          h="44.5px"
        ></Image>
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
          <Image src="/images/light-mode-icon.svg" alt="Cointrack"></Image>
        </Box>
      </Flex>
    </Flex>
  );
};
