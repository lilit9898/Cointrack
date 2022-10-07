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
                pr="16px"
                pl="16px"
              >
                <Flex gap="11px">
                  <Center mt="19px">
                    <Image src={item.image} w="60px" h="60px" />
                  </Center>
                  <Box mt="31px">
                    <Box
                      fontFamily="roboto"
                      fontWeight="400"
                      fontSize="27.3px"
                      lineHeight="32px"
                    >
                      <Text>{item.name}</Text>
                    </Box>
                    <Flex
                      alignItems="center"
                      gap="26.4px"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Text
                          display="flex"
                          alignItems="center"
                          height="auto"
                          fontFamily="roboto"
                          fontWeight="500"
                          fontSize="27.3px"
                          lineHeight="33px"
                        >
                          ${item.current_price}
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          fontFamily="roboto"
                          fontWeight="400"
                          fontSize="15.9px"
                          lineHeight="19px"
                        >
                          {item.price_change_percentage_24h.toFixed(2)}%
                        </Text>
                      </Box>
                    </Flex>
                    <Flex alignItems="center" gap="15px">
                      <Text>${item.price_change_24h.toFixed(2)}</Text>
                      <Text>Last 24 hours</Text>
                    </Flex>
                  </Box>
                </Flex>
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
