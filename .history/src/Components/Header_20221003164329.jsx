import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Flex p="20px 210px">
      <Box>
        <Image
          src="/images/logo.svg"
          alt="Cointrack"
          w="162px"
          h="44.5px"
        ></Image>
      </Box>
      <Flex>
        <Center>
          <Text>Home</Text>
        </Center>
        <Center>
          <Text>Pricing</Text>
          </Center>
        <Center>
          <Text>Portfolio</Text>
        </Box>
        <Center>
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
