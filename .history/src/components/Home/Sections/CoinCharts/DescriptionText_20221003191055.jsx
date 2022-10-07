import { Box, Text } from '@chakra-ui/react';
import React from 'react';

function DescriptionText() {
  return (
    <Box>
      <Text
        fontFamily="Axiforma"
        fontWeight="500"
        fontSize="46px"
        lineHeight="69px"
        color="white"
      >
        Track your cryptocurrency assets from one place
      </Text>
      <Text fontFamily="Axiforma"  fontWeight="500">
        Cointrack.ai is a simple and secure crypto portfolio tracker which
        manages your DeFi assets
      </Text>
      //custom Button
    </Box>
  );
}

export default DescriptionText;
