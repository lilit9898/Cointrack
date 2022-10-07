import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Flex p="20px 210px" gap="190px">
      <Box>
        <Image
          src="/images/logo.svg"
          alt="Cointrack"
          w="162px"
          h="44.5px"
        ></Image>
      </Box>
      <Flex w="100%" justifyContent="space-between">
        <Flex
          gap="40px"
          fontWeight="800"
          fontSize="18px"
          lineHeight="27px"
          fontFamily="Axiforma"
        >
          <Center>
            <Text>Home</Text>
          </Center>
          <Center>
            <Text>Pricing</Text>
          </Center>
          <Center>
            <Text>Portfolio</Text>
          </Center>
          <Center>
            <Text>Futures</Text>
          </Center>
        </Flex>
        <Flex gap="40px">
          <Center>
            <Text>Sign in</Text>
          </Center>
          <Center>
            <Button>Start a Free Trial</Button>
          </Center>
          <Center>
            <Image src="/images/light-mode-icon.svg" alt="Cointrack"></Image>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
};

//font-style: normal;
// font-weight: 800;
// font-size: 18px;
// line-height: 27px;
