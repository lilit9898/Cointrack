import { Box, Image } from '@chakra-ui/react';
import { Store } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import Wrapper from '../../../../hoc/Wrapper';
import DescriptionText from './DescriptionText';

const CoinCharts = () => {
  const Dispatch = useDispatch < typeof Store.Dispatch>()
  <typeof store.dispatch>();
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
