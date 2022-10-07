import { Box, Image } from '@chakra-ui/react';
import Wrapper from '../../../../hoc/Wrapper';
import DescriptionText from './DescriptionText';

const CoinCharts = () => {
const 
  return (
    <Wrapper w="100%" h="700px" p="33px 210px">
      <DescriptionText />
      <Box>
        <Image
          src="/images/cityPic.png"
          alt="cityPic"
          w="806px"
          h="665px"
        ></Image>
      </Box>
    </Wrapper>
  );
};

export default CoinCharts;
