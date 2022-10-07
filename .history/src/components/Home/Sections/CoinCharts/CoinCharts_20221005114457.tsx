import { Box, Flex, Image, Text } from '@chakra-ui/react';
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
      <Box >
        <Flex>
          <DescriptionText />
          <Box>
            <Image
              src="/images/cityPic.png"
              alt="cityPic"
              w="806px"
              h="665px"
            ></Image>
          </Box>
        </Flex>
      </Box>
      {/* <Box>
        {coinInfo.map((item) => {
          return (
            <Box>
              <Image src={item.image} />
              <Box>
                <Box>
                  <Text>{item.name}</Text>
                  <Text>{item.current_price}</Text>
                </Box>
                <Box>
                  <Text>{item.market_cap_change_percentage_24h}</Text>
                  <Text>{item.market_cap_change_24h}</Text>
                </Box>
                <Text>Last 24 hours</Text>
              </Box>
            </Box>
          );
        })}
      </Box> */}
    </Wrapper>
  );
};

export default CoinCharts;
