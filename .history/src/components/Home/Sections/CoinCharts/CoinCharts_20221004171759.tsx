import { Box, Image } from '@chakra-ui/react';
import 
import { useDispatch } from 'react-redux';
import Wrapper from '../../../../hoc/Wrapper';
import DescriptionText from './DescriptionText';
import store from '../../../../store/store';

const CoinCharts = () => {
  const Dispatch = useDispatch<typeof store.();
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
