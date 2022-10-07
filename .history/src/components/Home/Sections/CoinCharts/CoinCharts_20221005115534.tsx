import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
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
      <Box>
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
        <Flex gap="110px">
          {coinInfo.map((item) => {
            return (
              <Box
                w="294px"
                h="298px"
                bg=" #1C2430"
                borderRadius="21px"
                boxShadow="0px 0px 79px 28px rgba(9, 11, 15, 0.2)"
              >
                <Box>
                  <Center></Center>
                  <Image src={item.image} w="68px" h="68px" />
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
                <Box>GRafik</Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default CoinCharts;
