import { Box, Image } from '@chakra-ui/react';
import Wrapper from '../../../../hoc/Wrapper';
import DescriptionText from './DescriptionText';

const CoinCharts = () => {
  return <Wrapper w="100%" h="700px" p="33px 210px">
    <DescriptionText />
    <Box>
      <Image src=''></Image>
    </Box>
  </Wrapper>;
};

export default CoinCharts;
