import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from './components/Logo/Logo';

const AppHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(' #F4F6FF', '#212834');
  return (
    <Flex p="20px 210px" gap="190px" bg={bg}>
      <Logo />
      <Flex w="100%" justifyContent="space-between">
        <Flex
          gap="40px"
          fontWeight="800"
          fontSize="18px"
          lineHeight="27px"
          fontFamily="Axiforma"
        > 
          <Center>
            <Text cursor="pointer">Home</Text>
          </Center>
          <Center>
            <Text cursor="pointer">Pricing</Text>
          </Center>
          <Center>
            <Text cursor="pointer">Portfolio</Text>
          </Center>
          <Center>
            <Text cursor="pointer">Futures</Text>
          </Center>
        </Flex>
        <Flex
          gap="40px"
          fontWeight="800"
          fontSize="18px"
          lineHeight="27px"
          fontFamily="Axiforma"
        >
          <Center color="#A588E7">
            <Text cursor="pointer">Sign in</Text>
          </Center>
          <Center>
            <Button
              w="207px"
              h="53px"
              bg="#805AD5"
              color=" #FFFFFF"
              fontWeight="600"
              fontSize="18px"
              lineHeight="27px"
              fontFamily="Axiforma"
              cursor="pointer"
              _hover={{
                bgColor: "unset"
              } }
            >
              Start a Free Trial
            </Button>
          </Center>
          <Center>
            <Image
              src="/images/light-mode-icon.svg"
              alt="Cointrack"
              cursor="pointer"
              onClick={toggleColorMode}
            ></Image>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
};

//#A588E7
export default AppHeader