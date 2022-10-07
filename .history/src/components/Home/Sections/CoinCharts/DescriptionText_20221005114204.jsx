import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import CustomButton from '../../../../hoc/CustomButton';
import Button from '../../../../hoc/CustomButton';

function DescriptionText() {
  return (
    <Box gap="21px" w>
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
      <Box mt="47px">
        <CustomButton
          w="220px"
          h="60px"
          borderRadius="10px"
          bg="#805AD5"
          _hover={{
            bgColor: '#805AD5',
            opacity: 0.85,
          }}
          fontWeight="600"
          fontSize="18px"
          lineHeight="27px"
          fontFamily="Axiforma"
          cursor="pointer"
        >
          Start Tracking
        </CustomButton>
      </Box>
    </Box>
  );
}

export default DescriptionText;
