import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Button from '../../../../hoc/Button';

function DescriptionText() {
  return (
    <Box gap="21px">
      <Box w="610px">
        <Text
          fontFamily="Axiforma"
          fontWeight="500"
          fontSize="46px"
          lineHeight="69px"
          color="white"
        >
          Track your cryptocurrency assets from one place
        </Text>
      </Box>
      <Box w="610px" mt="21px">
        <Text
          fontFamily="Axiforma"
          fontWeight="400"
          fontSize="26px"
          lineHeight="39px"
          color="#8085B1"
        >
          Cointrack.ai is a simple and secure crypto portfolio tracker which
          manages your DeFi assets
        </Text>
      </Box>
      <Box>
        <Button
          w="220px"
          h="60px"
          borderRadius="10px"
          bg="#805AD5"
          marginTop="47px"
        >
          Start Tracking
        </Button>
      </Box>
    </Box>
  );
}

export default DescriptionText;
