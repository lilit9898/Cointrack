import { Box, Image } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import Wrapper from '../../../../hoc/Wrapper';
import DescriptionText from './DescriptionText';
import store from '../../../../store/store';
import { useAppSelector } from '../../../../store/store';
import { useEffect } from 'react';
import { getCoinInfo } from '../../../../store/coinSlices';

const CoinCharts = () => {
  const { coinInfo } = useAppSelector((state) => state.coincard);
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(getCoinInfo(1));
  }, []);
  console.log(coinInfo);
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
      <Box>
        {
          coinInfo.map((item) => {
            return <Box>{ }</Box>
          })
        }
      </Box>
    </Wrapper>
  );
};

export default CoinCharts;
